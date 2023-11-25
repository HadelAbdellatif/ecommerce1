import * as yap from 'yap';
export const registerSchema = yap.object({
    userName: yap.string().required("username is required").min(3, "must be at least 3 char").max(30, "max is 30 char").userName,
    email: yap.string().required("email is required").email(),
    password: yap.string().required("password is required").min(3, "must be at least 3 char").max(30, "max is 30 char"),

})