import { Router } from 'express'
import apiController from '../controller/apiController'
import authentication from '../middleware/authentication'
import rateLimit from '../middleware/rateLimit'

const router = Router()

router.route('/self').get(apiController.self)
router.route('/health').get(apiController.health)

router.route('/register').post(rateLimit, apiController.register)

router.route('/confirmation/:token').put(rateLimit, apiController.confirmation)

router.route('/login').post(rateLimit, apiController.login)

router.route('/self-identification').get(authentication, apiController.selfIdentification)

router.route('/logout').put(authentication, apiController.logout)

router.route('/refresh-token').post(rateLimit, apiController.refreshToken)

router.route('/forgot-password').put(rateLimit, apiController.forgotPassword)

router.route('/reset-password/:token').put(rateLimit, apiController.resetPassword)

router.route('/change-password').put(authentication, apiController.changePassword)

export default router
