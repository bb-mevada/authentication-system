export default {
    SUCCESS: `The operation has been successful`,
    SOMETHING_WENT_WRONG: `Something went wrong!`,
    NOT_FOUND: (entity: string) => `${entity} not found`,
    TOO_MANY_REQUESTS: `Too many requests! Please try again after some time`,
    ALREADY_EXIST: (entity: string, identifier: string) => `${entity} already exist with ${identifier}`,
    INVALID_PHONE_NUMBER: `Invalid phone number`
}
