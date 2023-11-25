import * as yap from 'yap';
export const registerSchema = yap.object({
    userName: yap.string().required("username is required").min(3, "must be at least 3 char").max(30, "max is 30 char"),
    email 
})