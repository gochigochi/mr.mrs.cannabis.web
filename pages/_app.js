import { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout/Layout'
import { Open_Sans } from "next/font/google"
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import RoutesLoader from '@/components/loader/RoutesLoader/RoutesLoader'
import localFont from "next/font/local"

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
})

const neusa = localFont({
  src: [
    {
      path: "./fonts/neusa-light-webfont.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/neusa-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neusa-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/neusa-semibold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/neusa-bold-webfont.woff2",
      weight: "800",
      style: "normal",
    },
  ]
})

export default function App({ Component, pageProps }) {

  const router = useRouter()

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${neusa.style.fontFamily};
        }
      `}</style>
      <RoutesLoader />
      <Layout className={openSans.className}>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  )
}
