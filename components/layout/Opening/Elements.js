import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Cover = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--blue);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoContainer = styled(motion.div)`
    width: 8rem;
    height: 8rem;
    position: relative;
`

export const Logo = styled(Image)`
    object-fit: contain;
`