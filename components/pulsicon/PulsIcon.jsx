import { IconContainer, Icon } from "./Elements"
import { AnimatePresence } from "framer-motion"

const PulsIcon = () => {
    return (
        <AnimatePresence>
            <IconContainer
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0, transition: { duration: .4, delay: 3 }}}
                viewport={{once: true}}
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/mr.mrs.cannabis?igshid=YmMyMTA2M2Y="
            >
                <Icon src="/assets/logos/ig.png" alt="instagram icon" fill size="25vw" />
            </IconContainer>
        </AnimatePresence>
    )
}

export default PulsIcon