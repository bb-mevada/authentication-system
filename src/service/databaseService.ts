import mongoose from 'mongoose'
import config from '../config/config'
import userModel from '../model/userModel'
import { IUser } from '../types/userTypes'

export default {
    connect: async () => {
        try {
            await mongoose.connect(config.DATABASE_URL as string)
            return mongoose.connection
        } catch (err) {
            throw err
        }
    },
    findUserByEmailAddress: (emailAddress: string) => {
        return userModel.findOne({
            emailAddress
        })
    },
    registerUser: (payload: IUser) => {
        return userModel.create(payload)
    }
}
