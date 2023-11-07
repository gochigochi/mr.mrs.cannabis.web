import { useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import BackgroundVideo from "../backgrounds/BackgroundVideo/BackgroundVideo"
import Opening from "../layout/Opening/Opening"
import PrimaryButton from "../buttons/PrimaryButton/PrimaryButton"
import { buttonsMotions, copyMotions, logoMotions, pieceMotions, linksMotions, linkMotions, containerMotions } from "./Motions"
import {
    Section,
    Inner,
    LogoContainer,
    Logo,
    Copy,
    Accent,
    ButtonsContainer,
    LinkContainer,
    AltButton,
    Piece,
    AltButtonContainer,
    HiddenCrown,
    CrownContainer,
} from "./Elements"
import { AnimatePresence } from "framer-motion"

const DynPopup = dynamic(() => import("../popup/Popup"))

const Home = () => {

    const [isVideoLoaded, setVideoLoaded] = useState(false)
    const [isOpen, setOpen] = useState(false)

    return (
        <Section>
            <AnimatePresence>
                {isOpen ? <DynPopup setOpen={setOpen} /> : null}
            </AnimatePresence>
            <Opening assetsLoaded={isVideoLoaded} />
            <BackgroundVideo
                src="/assets/videos/hero-video.mp4"
                setVideoLoaded={setVideoLoaded}
            />
            <Inner>
                <LogoContainer
                    variants={logoMotions}
                    initial="initial"
                    animate="animate"
                >
                    <Logo src="/assets/logos/logo-white-green.png" alt="" fill priority sizes="25vw" />
                </LogoContainer>
                <Copy
                    variants={copyMotions}
                    initial="initial"
                    animate="animate"
                >
                    <Piece variants={pieceMotions}>T</Piece>
                    <Piece variants={pieceMotions}>h</Piece>
                    <Piece variants={pieceMotions}>e </Piece>
                    <Piece variants={pieceMotions}>Gl</Piece>
                    <Piece variants={pieceMotions}>obal </Piece>
                    <Piece variants={pieceMotions}>award show for the </Piece>
                    <Piece variants={pieceMotions}><Accent>Ca</Accent></Piece>
                    <Piece variants={pieceMotions}><Accent>nnabis </Accent></Piece>
                    <Piece variants={pieceMotions}><Accent>Ind</Accent></Piece>
                    <Piece variants={pieceMotions}><Accent>us</Accent></Piece>
                    <Piece variants={pieceMotions}><Accent>t</Accent></Piece>
                    <Piece variants={pieceMotions}><Accent>r</Accent></Piece>
                    <Piece variants={pieceMotions}><Accent>y</Accent></Piece>
                </Copy>
                <ButtonsContainer variants={containerMotions} initial="initial" animate="animate">
                    <LinkContainer variants={linkMotions} onClick={() => setOpen(true)}>
                        <PrimaryButton>Europe</PrimaryButton>
                    </LinkContainer>
                    <LinkContainer variants={linkMotions}>
                        <Link initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} href="/south-america">
                            <PrimaryButton>South America</PrimaryButton>
                        </Link>
                    </LinkContainer>
                    <LinkContainer variants={linkMotions}>
                        <Link initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} href="/africa">
                            <PrimaryButton>Africa</PrimaryButton>
                        </Link>
                    </LinkContainer>
                    <LinkContainer initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 4, duration: .1 } }}>
                        <Link initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} href="/about">
                            <AltButtonContainer>
                                <CrownContainer>
                                    <HiddenCrown src="/assets/logos/logo-crown.png" fill sizes="20vw" />
                                </CrownContainer>
                                <AltButton variants={buttonsMotions} initial="initial" animate="animate">
                                    About us
                                </AltButton>
                            </AltButtonContainer>
                        </Link>
                    </LinkContainer>
                </ButtonsContainer>
            </Inner>
        </Section>
    )
}

export default Home