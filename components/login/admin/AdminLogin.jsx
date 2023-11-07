import { useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { adminSchema } from '@/lib/formikSchemas'
import Loader from '@/components/loader/Loader/Loader'
import { Inner, Section } from '@/components/common/Elements'
import {
    Form,
    InputContainer,
    Input,
    GeneralError,
    FieldError,
    Submit,
} from '../Elements'

const AdminLogin = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [generalError, setGeneralError] = useState("")
    const formik = useFormik({
        initialValues: { email: "", psw: "" },
        validationSchema: adminSchema,
        onSubmit: (values) => handleSubmit(values)
    })

    const handleSubmit = async (values) => {

        setLoading(true)

        const response = await fetch("/api/admin-login", {
            method: "POST",
            body: JSON.stringify(values)
        })

        const json = await response.json()

        if (json.error) {
            
            setGeneralError(json.msg)
            setLoading(false)
        }

        if(!json.error) router.push("/admin")

    }

    return (
        <Section>
            <Inner>
                <Form noValidate onSubmit={formik.handleSubmit}>
                    <InputContainer>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="Email"
                            aria-label="email"
                            aria-required="true"
                        />
                        {formik.errors.email && formik.touched.email && <FieldError>{formik.errors.email}</FieldError>}
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="psw"
                            type="password"
                            name="psw"
                            value={formik.values.psw}
                            onChange={formik.handleChange}
                            placeholder="Password"
                            aria-label="password"
                            aria-required="true"
                        />
                        {formik.errors.psw && formik.touched.psw && <FieldError>{formik.errors.psw}</FieldError>}
                    </InputContainer>
                    <Submit type="submit"
                        dis={loading}
                        disabled={loading}
                        aria-disabled={loading}
                    >
                        {loading ? <Loader /> : "Login"}
                    </Submit>
                    {
                        generalError.length !== 0 ?
                            <GeneralError>{generalError}</GeneralError> :
                            null
                    }
                </Form>
            </Inner>
        </Section>
    )
}

export default AdminLogin