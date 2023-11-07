import dynamic from 'next/dynamic'

const Africa = dynamic(() => import("@/components/africa/Africa"))

const AfricaPage = () => <Africa />

export default AfricaPage