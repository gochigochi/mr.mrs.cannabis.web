import dynamic from "next/dynamic"
import { db } from "@/firebase/config"
import { collection, query, getDocs } from "firebase/firestore"
import { computeVotes } from "@/lib/computeVotes"

const Admin = dynamic(() => import("@/components/admin/Admin"))

const AdminPage = ({ data }) => {
        
    const computedVotes = computeVotes(data.votes)

    return <Admin users={data.users} votes={computedVotes} />
}

export default AdminPage

export async function getServerSideProps({ req }) {

    const data = { users: [], votes: [] }
    const isAuth = req.cookies.token === process.env.ADMIN_UNIQUE_IDENTIFIER

    if(!isAuth) {
        return {
            notFound: true,
        }
    }

    const snapShot = await getDocs(query(collection(db, "users")))

    snapShot.forEach(doc => {

        const { name, email, voted } = doc.data()

        data.users.push({ name: name, email: email })
        data.votes.push(...voted)
    })

    return { props: { data: data }}
}