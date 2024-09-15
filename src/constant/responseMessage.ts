export default {
    SUCCESS: `The operation has been successful`,
    SOMETHING_WENT_WRONG: `Something went wrong!`,
    NOT_FOUND: (entity: string) => `${entity} not found`,
    TOO_MANY_REQUESTS: `Too many requests! Please try again after some time`,
    ALREADY_EXIST: (entity: string, identifier: string) => `${entity} already exist with ${identifier}`,
    INVALID_PHONE_NUMBER: `Invalid phone number`,
    INVALID_ACCOUNT_CONFIRMATION_TOKEN_OR_CODE: `Invalid account confirmation token or code`,
    ACCOUNT_ALREADY_CONFIRMED: `Account already confirmed`,
    INVALID_EMAIL_OR_PASSWORD: `Invalid email address or password`,
    UNAUTHORIZED: `You are not authorized to perform this action`,
    ACCOUNT_CONFIRMATION_REQUIRED: `Account Confirmation Required`,
    EXPIRED_URL: `Your password reset url is expired`,
    INVALID_REQUEST: `Invalid request`,
    INVALID_OLD_PASSWORD: `Invalid old password`,
    PASSWORD_MATCHING_WITH_OLD_PASSWORD: `Password matching with old password`
}
