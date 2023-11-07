import * as Yup from 'yup'

export const userSchema = Yup.object({
    email: Yup.string().email('Please, provide a correct email').required('Please, provide an email'),
})

export const adminSchema = Yup.object({
    email: Yup.string().email('Please, provide a correct email').required('Please, provide an email'),
    psw: Yup.string().required('Please, provide a password'),
})