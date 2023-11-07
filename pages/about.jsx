import dynamic from "next/dynamic"
import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"

const About = dynamic(() => import("@/components/about/About"))

const AboutPage = ({ stories }) => <About stories={stories} />

export default AboutPage

export const getServerSideProps = async () => {

    const storiesRef = doc(db, "about", "content")
    const storiesSnap = await getDoc(storiesRef)

    if (!storiesSnap.exists()) {
        return {
            notFound: true,
        }
    }

    const { stories }  = storiesSnap.data()

    return {
        props: {
            stories: stories
        }
    }
}