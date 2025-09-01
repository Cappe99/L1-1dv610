/**
 * @file Defines the home router.
 * @module homeRouter
 * @author Casper Björlin
 */

import express from 'express'
import { NameController } from '../controllers/nameController.js'

export const router = express.Router()

const controller = new NameController()

router.get('/', (req, res, next) => controller.index(req, res, next))
router.post('/submit-name', (req, res, next) => controller.submitName(req, res, next))
