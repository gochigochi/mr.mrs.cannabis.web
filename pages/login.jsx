import dynamic from "next/dynamic"

const AdminLogin = dynamic(() => import("@/components/login/admin/AdminLogin"))

const LoginPage = () => <AdminLogin />

export default LoginPage