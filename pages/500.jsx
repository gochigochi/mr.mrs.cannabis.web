import dynamic from "next/dynamic"

const CustomPageError = dynamic(() => import("../components/errors/CustomPageError"))

const Custom500Page = () => <CustomPageError>500 | An error on the server occured. ご</CustomPageError>

export default Custom500Page