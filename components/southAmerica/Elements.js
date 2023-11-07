import styled from "styled-components"
import { motion } from "framer-motion"

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    position: relative;
    display: grid;
    place-items: center;
`

export const Inner = styled(motion.div)`
    position: relative;
    /* bottom:  */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: var(--inner-max-width);
    margin: 0 auto;
    z-index: 300;

    @media all and (max-width: 480px) {
        /* bottom: 0; */
        padding: 3rem 0 5rem 0;
    }
`