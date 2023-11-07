import styled from "styled-components"
import { motion } from "framer-motion"

export const LoaderScreen = styled(motion.div)`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: var(--blue);
    z-index: 999;
`