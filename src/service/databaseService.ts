import mongoose from 'mongoose'
import config from '../config/config'
import userModel from '../model/userModel'
import { IRefreshToken, IUser } from '../types/userTypes'
import refreshTokenModel from '../model/refreshTokenModel'

export default {
    connect: async () => {
        try {
            await mongoose.connect(config.DATABASE_URL as string)
            return mongoose.connection
        } catch (err) {
            throw err
        }
    },
    findUserByEmailAddress: (emailAddress: string, select: string = '') => {
        return userModel
            .findOne({
                emailAddress
            })
            .select(select)
    },
    registerUser: (payload: IUser) => {
        return userModel.create(payload)
    },
    findUserById: (id: string, select: string = '') => {
        return userModel.findById(id).select(select)
    },
    findUserByConfirmationTokenAndCode: (token: string, code: string) => {
        return userModel.findOne({
            'accountConfirmation.token': token,
            'accountConfirmation.code': code
        })
    },
    findUserByResetToken: (token: string) => {
        return userModel.findOne({
            'passwordReset.token': token
        })
    },
    createRefreshToken: (payload: IRefreshToken) => {
        return refreshTokenModel.create(payload)
    },
    deleteRefreshToken: (token: string) => {
        return refreshTokenModel.deleteOne({ token: token })
    },
    findRefreshToken: (token: string) => {
        return refreshTokenModel.findOne({ token })
    }
}
