import styled from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"

export const Section = styled.section`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: grid;
    place-items: center;
`

export const Inner = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: var(--inner-max-width);
    margin: 0 auto;
    z-index: 300;
    padding: 0 1rem;
`

export const Sub = styled(motion.p)`
    font-size: 2.5rem;
    margin-bottom: .5rem;
`

export const Char = styled(motion.span)`
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    font-family: var(--text-font);
`

export const Title = styled(motion.h2)`
    text-transform: uppercase;
    text-align: center;
    font-size: 5rem;
    margin-bottom: 1.5rem;

    @media all and (max-width: 768px) {
        font-size: 4rem;
    }

    @media all and (max-width: 480px) {
        font-size: 2.5rem;
    }
`

export const TitleWord = styled(motion.span)`
    color: ${({color}) => color ? color : "#fff"};
    font-weight: 800;
`

export const Text = styled(motion.p)`
    text-transform: uppercase;
    text-align: center;
`

export const TextWord = styled(motion.span)`
    color: ${({color}) => color ? color : "#fff"};
    font-family: var(--text-font);
    letter-spacing: 1px;
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 500;

    @media all and (max-width: 480px) {
        font-size: 1rem;
    }
`

export const LogoContainer = styled(motion.div)`
    width: 15rem;
    height: 9rem;
    position: relative;
    margin-top: 1rem;
`

export const Logo = styled(Image)`
    object-fit: contain;
`