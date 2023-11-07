import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"

const pulse = keyframes`
    0% {
        box-shadow: 0 0 0 0px rgba(197, 236, 79, 0.6);
        transform: scale(1);
    }
    50% {
        transform: scale(.95);
    }
    100% {
        box-shadow: 0 0 0 20px rgba(197, 236, 79,  0);
        transform: scale(1);
    }
`

export const IconContainer = styled(motion.a)`
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 500px;
    animation: ${pulse} 1.5s infinite;
`

export const Icon = styled(Image)`
    object-fit: contain;
`