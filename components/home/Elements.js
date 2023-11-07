import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export const Section = styled(motion.section)`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: grid;
    place-items: center;
`

export const Inner = styled(motion.div)`
    position: relative;
    display: grid;
    justify-items: center;
    z-index: 300;
    bottom: 3rem;

    @media all and (max-width: 860px) { 
        bottom: -2rem;
    }
`

export const LogoContainer = styled(motion.div)`
    position: relative;
    width: 14rem;
    height: 12rem;
    margin-bottom: 1rem;

    @media all and (max-width: 860px) {
        display: none;
    }
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const Copy = styled(motion.h2)`
    font-size: 4rem;
    color: #fff;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    max-width: 60rem;

    @media all and (max-width: 1024px) {
        font-size: 3rem;
        max-width: 40rem;
    }

    @media all and (max-width: 860px) {
        font-size: 2.8rem;
        width: 90%;
    }

    @media all and (max-width: 450px) {
        font-size: 2.3rem;
    }
`

export const Piece = styled(motion.span)``

export const Accent = styled.span`
    color: var(--green);
    font-weight: 900;
`

export const ButtonsContainer = styled(motion.div)`
    width: 90%;
    margin: 3rem auto 0 auto;
    display: flex;
    justify-content: center;
    position: relative;

    @media all and (max-width: 860px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 1rem;
    }
`

export const LinkContainer = styled(motion.div)``

export const AltButtonContainer = styled.div`
    position: absolute;
    right: -10rem;

    &:hover p {
        transform: rotate(-10deg);
    }

    &:hover div:first-child {
        bottom: 60px;
        transform: rotate(-12deg);
    }

    @media all and (max-width: 860px) {
        position: relative;
        right: 0;

        &:hover div:first-child {
            bottom: 35px;
            left: -70px;
            transform: rotate(310deg);
        }
    }
`

export const AltButton = styled(motion.p)`
    padding: 1rem 2rem;
    margin: 0 .5rem;
    text-align: center;
    text-transform: uppercase;
    border-radius: 500px;
    color: var(--blue);
    background-color: var(--green);
    transition: all .2s ease-in-out;
    position: relative;
    z-index: 20;
    letter-spacing: .2rem;
    font-weight: 700;
    
    span {
        text-transform: uppercase;
        font-weight: 700;
    }
`

export const CrownContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 15px;
    width: 65%;
    height: 65%;
    transition: all .2s ease;
`

export const HiddenCrown = styled(Image)`
    object-fit: contain;
    z-index: 10;
`
















