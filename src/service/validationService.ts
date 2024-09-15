import joi from 'joi'
import {
    IChangePasswordRequestBody,
    IForgotPasswordRequestBody,
    ILoginUserRequestBody,
    IRegisterUserRequestBody,
    IResetPasswordRequestBody
} from '../types/userTypes'

export const ValidateRegisterBody = joi.object<IRegisterUserRequestBody, true>({
    name: joi.string().min(2).max(72).trim().required(),
    emailAddress: joi.string().email().trim().required(),
    phoneNumber: joi.string().min(4).max(20).trim().required(),
    password: joi.string().min(8).max(24).trim().required(),
    consent: joi.boolean().valid(true).required()
})

export const ValidateLoginBody = joi.object<ILoginUserRequestBody, true>({
    emailAddress: joi.string().email().trim().required(),
    password: joi.string().min(8).max(24).trim().required()
})

export const ValidateForgotPasswordBody = joi.object<IForgotPasswordRequestBody, true>({
    emailAddress: joi.string().email().trim().required()
})

export const ValidateResetPasswordBody = joi.object<IResetPasswordRequestBody, true>({
    newPassword: joi.string().min(8).max(24).trim().required()
})

export const ValidateChangePasswordBody = joi.object<IChangePasswordRequestBody, true>({
    oldPassword: joi.string().min(8).max(24).trim().required(),
    newPassword: joi.string().min(8).max(24).trim().required(),
    confirmNewPassword: joi.string().min(8).max(24).trim().valid(joi.ref('newPassword')).required()
})

export const validateJoiSchema = <T>(schema: joi.Schema, value: unknown) => {
    const result = schema.validate(value)

    return {
        value: result.value as T,
        error: result.error
    }
}
