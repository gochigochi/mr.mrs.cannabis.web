import dynamic from 'next/dynamic'

const PrivacyPolicy = dynamic(() => import("@/components/privacy/PrivacyPolicy"))

const PrivacyPolicyPage = () => <PrivacyPolicy />

export default PrivacyPolicyPage