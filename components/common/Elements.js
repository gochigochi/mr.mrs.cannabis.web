import styled from "styled-components"
import { motion } from "framer-motion"

export const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    padding: 7rem 0;
`

export const Inner = styled(motion.div)`
    position: relative;
    width: 100%;
    max-width: var(--inner-max-width);
    margin: 0 auto;
    z-index: 300;
`

export const Title = styled(motion.h2)`
    color: #fff;
    text-transform: uppercase;
    font-size: 4rem;
    text-align: center;
    margin: 0 auto;
    width: 90%;

    @media all and (max-width: 650px) {
        font-size: 3rem;
        margin: 2rem auto 0 auto;
    }
`

export const Accent = styled.span`
    color: var(--green);
    font-weight: 900;
`