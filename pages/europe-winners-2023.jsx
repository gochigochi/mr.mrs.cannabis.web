import dynamic from "next/dynamic"
import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"

const EuropeWinners = dynamic(() => import("@/components/europe/EuropeWinners/EuropeWinners"))

const EuropeWinnersPage = ({ data, sponsors }) => <EuropeWinners data={data} sponsors={sponsors} />

export default EuropeWinnersPage

export const getServerSideProps = async () => {
  
  const docRef = doc(db, "europe", "winners")
  const docSnap = await getDoc(docRef)
  const sponsorsRef = doc(db, "europe", "sponsors")
  const sponsorsSnap = await getDoc(sponsorsRef)

  if (!sponsorsSnap.exists() || !docSnap.exists()) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: docSnap.data(),
      sponsors: sponsorsSnap.data(),
    }
  }
}