import { Router } from 'express'
import apiController from '../controller/apiController'

const router = Router()

router.route('/self').get(apiController.self)
router.route('/health').get(apiController.health)

router.route('/register').post(apiController.register)

router.route('/confirmation/:token').put(apiController.confirmation)

router.route('/login').post(apiController.login)

export default router
