import z from "zod"

export const userSignUpSchema = z.object({
    username:z.string(),
    password:z.string().min(5).max(12),
    email:z.string().email()
})

export const userSignInSchema = z.object({
    password:z.string().min(5).max(12),
    email:z.string().email()
})