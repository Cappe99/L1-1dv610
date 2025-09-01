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
  submitName (req, res, next) {
    console.log('submitName hit', req.body)
    const { name } = req.body
    if (!name) return res.status(400).send('Du måste skriva in ett namn!')
    res.render('enterNames/hello', { name })
  }
}
