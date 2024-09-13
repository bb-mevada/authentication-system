import { NextFunction, Request, Response } from 'express'
import { IUser } from '../types/userTypes'
import quicker from '../util/quicker'
import config from '../config/config'
import { IDecryptedJwt } from '../types/userTypes'
import databaseService from '../service/databaseService'
import httpError from '../util/httpError'
import responseMessage from '../constant/responseMessage'

interface IAuthenticatedRequest extends Request {
    authenticatedUser: IUser
}

export default async (request: Request, _res: Response, next: NextFunction) => {
    try {
        const req = request as IAuthenticatedRequest

        const { cookies } = req

        const { accessToken } = cookies as {
            accessToken: string | undefined
        }

        if (accessToken) {
            // Verify Token
            const { userId } = quicker.verifyToken(accessToken, config.ACCESS_TOKEN.SECRET as string) as IDecryptedJwt

            // Find User by id
            const user = await databaseService.findUserById(userId)
            if (user) {
                req.authenticatedUser = user
                return next()
            }
        }

        httpError(next, new Error(responseMessage.UNAUTHORIZED), req, 401)
    } catch (err) {
        httpError(next, err, request, 500)
    }
}
