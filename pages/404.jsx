import dynamic from "next/dynamic"

const CustomPageError = dynamic(() => import("../components/errors/CustomPageError"))

const Custom404Page = () => <CustomPageError>404 | This page could not be found. ご</CustomPageError>

export default Custom404Page