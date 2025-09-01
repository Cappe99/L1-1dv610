/**
 * @file Defines the main router.
 * @module router
 * @author Casper Björlin
 */

import express from 'express'
import http from 'node:http'
import { router as homeRouter } from './homeRouter.js'
import { router as nameRouter } from './nameRouter.js'

export const router = express.Router()

router.use('/', homeRouter)
router.use('/names', nameRouter)

// Catch 404 (ALWAYS keep this as the last route).
router.use('*', (req, res, next) => {
  const statusCode = 404
  const error = new Error(http.STATUS_CODES[statusCode])
  error.status = statusCode
  next(error)
})
