import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const withRouteEvents = (WrappedComponent) => {
    return (props) => {

        const router = useRouter()
        const [loading, setLoading] = useState(true)

        useEffect(() => {

            const handleComplete = () => setLoading(false)

            router.events.on("routeChangeComplete", handleComplete)
            router.events.on("routeChangeError", handleComplete)

            return () => {
                router.events.off("routeChangeComplete", handleComplete)
                router.events.off("routeChangeError", handleComplete)
            }

        }, [router])

        return !loading ? <WrappedComponent {...props} /> : null

    }
}

export default withRouteEvents