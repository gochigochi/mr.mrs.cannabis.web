import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Section = styled(motion.section)`
    width: 100vw;
    position: relative;
    background-color: var(--blue);
    padding: 8rem 0;
`

export const Inner = styled(motion.div)`
    width: 95%;
    margin: 0 auto;
    max-width: var(--inner-max-width);
    position: relative;
    margin: 0 auto;
    padding: 3rem;
    justify-content: center;
    background-color: #fff;
    border-radius: 15px;

    @media all and (max-width: 500px) {
        padding: 1rem;
    }
`

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 900;
    margin: 1rem 0;
`

export const SubTitle = styled.h2`
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1rem;
`

export const Text = styled.p`
    font-family: var(--text-font);
    font-weight: normal;
    margin-bottom: 1rem;
`

export const List = styled.ul`
    margin: 1rem 0 0 2rem;
`

export const ListItem = styled.li`
    margin-bottom: 1rem;
    font-family: var(--text-font);
    font-weight: normal;
`