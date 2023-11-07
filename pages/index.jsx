import dynamic from "next/dynamic"
import Head from "next/head"

const Home = dynamic(() => import("@/components/home/Home"))

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Mr. & Mrs. Cannabis</title>
        <meta name="description" content="Mr. & Mrs. Cannabis awards" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
