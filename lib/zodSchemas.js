import { z } from "zod"

export const adminZodSchema = z.object({
    email: z.string().min(3, { message: "Input an email" }).email({ message: "Input a correct email" }),
    psw: z.string().min(6, { message: "Password must be 6 chars. min." }),
})

export const userZodSchema = z.object({
    email: z.string().min(1, { message: "Type your email"}),
})