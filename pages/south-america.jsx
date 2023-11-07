import dynamic from 'next/dynamic'

const SouthAmerica = dynamic(() => import("@/components/southAmerica/SouthAmerica"))

const SouthAmericaPage = () => <SouthAmerica />

export default SouthAmericaPage