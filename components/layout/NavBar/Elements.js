import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 950;
`

export const Inner = styled.div`
    height: 7rem;
    width: 95%;
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    /* justify-content: flex-end; */
    align-items: center;
`

export const LogoContainer = styled(motion.div)`
    width: 4rem;
    height: 4rem;
    position: relative;
`

export const Logo = styled(Image)`
    object-fit: contain;
`