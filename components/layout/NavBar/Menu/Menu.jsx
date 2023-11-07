import { useState, useEffect } from "react"
import Link from 'next/link'
import { isAuth } from '@/lib/isAuth'
import { logout } from '@/lib/logout'
import {
    parentMotion,
    childMotion,
    secondaryParentMotion,
    lineMotion,
} from './Motions'
import {
    Container,
    Content,
    Primary,
    PrimaryLinks,
    PrimaryLinkContainer,
    PrimaryChildLinkContainer,
    DivLine,
    SecondaryLinks,
    SecondaryLinkContainer,
    Span,
    Log,
    Childs,
} from './Elements'


const Menu = ({ menuOpen, setMenuOpen }) => {

    const [auth, setAuth] = useState()

    useEffect(() => {

        const checkAuth = async () => {
            const a = await isAuth()
            setAuth(a)
        }

        checkAuth()
        
    }, [])

    const temp = {
        primary: [
            {
                title: 'Home',
                url: '/'
            },
            {
                title: 'South America',
                url: '/south-america',
                children: []
            },
            {
                title: 'Europe',
                url: '/europe-winners-2023',
                children: [
                    {
                        title: "2023 Edition",
                        url: "/europe-winners-2023"
                    },
                    {
                        title: "2024 Edition (soon)",
                        url: "/"
                    }
                ]
            },
            {
                title: 'Africa',
                url: '/africa'
            },

        ],
        secondary: [
            {
                title: 'About us',
                url: '/about'
            },
            // {
            //     title: 'Contact',
            //     url: '/'
            // },
            {
                title: 'Privacy Policy',
                url: '/privacy-policy'
            },
        ],
    }

    return (
        <Container isopen={menuOpen}>
            {
                menuOpen ?
                    <Content>
                        <PrimaryLinks
                            variants={parentMotion}
                            initial="initial"
                            whileInView="animate"
                            exit="exit"
                        >
                            {
                                temp.primary.map(link => {
                                    return (
                                        <Primary key={link.title}>
                                            <PrimaryLinkContainer
                                                variants={childMotion}
                                                onClick={() => setMenuOpen(!menuOpen)}
                                            >
                                                <Link href={link.url}>
                                                    <Span>- </Span>
                                                    {link.title}
                                                </Link>
                                            </PrimaryLinkContainer>
                                            {
                                                link.children ?
                                                    <Childs>
                                                        {
                                                            link.children.map(link => {
                                                                return (
                                                                    <PrimaryChildLinkContainer
                                                                        variants={childMotion}
                                                                        onClick={() => setMenuOpen(!menuOpen)}
                                                                    >
                                                                        <Link href={link.url}>
                                                                            <Span>// </Span>
                                                                            {link.title}
                                                                        </Link>
                                                                    </PrimaryChildLinkContainer>
                                                                )
                                                            })
                                                        }
                                                    </Childs> :
                                                    null
                                            }
                                        </Primary>
                                    )
                                })
                            }
                        </PrimaryLinks>
                        <DivLine variants={lineMotion} />
                        <SecondaryLinks
                            variants={secondaryParentMotion}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {
                                temp.secondary.map(link => {
                                    return (
                                        <SecondaryLinkContainer
                                            variants={childMotion}
                                            key={link.title}
                                            onClick={() => setMenuOpen(!menuOpen)}
                                        >
                                            <Link href={link.url}>
                                                <Span>- </Span>
                                                {link.title}
                                            </Link>
                                        </SecondaryLinkContainer>
                                    )
                                })
                            }
                            {
                                auth ?
                                    <SecondaryLinkContainer
                                        variants={childMotion}
                                        onClick={() => logout()}
                                    >
                                        <Span>- </Span>
                                        <Log>Logout</Log>
                                    </SecondaryLinkContainer> : null
                            }
                        </SecondaryLinks>
                    </Content>
                    : null
            }
        </Container>
    )
}

export default Menu