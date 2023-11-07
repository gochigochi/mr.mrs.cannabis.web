import { Container, Inner, LogoContainer, Logo } from './Elements'
import Link from 'next/link'
import MenuIcon from './MenuIcon/MenuIcon'

const NavBar = ({ setMenuOpen, menuOpen }) => {
    return (
        <Container>
            <Inner>
                <Link href="/">
                    <LogoContainer>
                        <Logo src="/assets/logos/logo-white-green.png" alt="" fill sizes="25vw" priority />
                    </LogoContainer>
                </Link>
                <MenuIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </Inner>
        </Container>
    )
}

export default NavBar