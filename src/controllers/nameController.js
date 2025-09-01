/**
 *
 */
export class NameController {
  /**
   *
   * @param req
   * @param res
   */
  async index (req, res) {
    res.render('enterNames/names')
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  async submitName (req, res, next) {
    try {
      console.log('submitName hit', req.body)
      const { name } = req.body
      if (!name) {
        return res.status(400).send('You have to write a name!')
      }

      const prompt = `write a good quote to a person named ${name}. Only the quote, and with plain text, no markdown.`

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-chat-v3-0324:free',
          messages: [{ role: 'user', content: prompt }]
        })
      })

      const data = await response.json()
      console.log('OpenRouter response:', JSON.stringify(data, null, 2))
      const funnyGreeting = data.choices?.[0]?.message?.content || 'No qoute today, Sorry!'

      res.render('enterNames/hello', { name, funnyGreeting })
    } catch (err) {
      console.error('Wrong with api:', err)
      res.render('enterNames/hello', { name: 'unknown', funnyGreeting: 'Somting went wrong with the api.' })
    }
  }
}
