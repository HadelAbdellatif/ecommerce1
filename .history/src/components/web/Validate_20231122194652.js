import * as yap from 'yap';
export const registerSchema = yap.object({
    userName: yap.string().required("username is required").min
})