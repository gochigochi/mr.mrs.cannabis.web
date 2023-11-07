import dynamic from 'next/dynamic'
import { useState } from 'react'
import NavBar from "./NavBar/NavBar"
import {
    LayoutContainer,
} from "./Elements"
import withRouteEvents from '@/hocs/withRouteEvents'

const DynMenu = dynamic(() => import("./NavBar/Menu/Menu"))
const DynFooter = dynamic(() => import("./Footer/Footer"))

const Layout = ({ children }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <LayoutContainer>
            <NavBar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <DynMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <main>{children}</main>
            <DynFooter />
        </LayoutContainer>
    )
}

export default Layout