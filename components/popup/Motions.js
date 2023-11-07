export const overlayMotions = {
    initial: { opacity: 0 },
    animate: { 
        opacity: 1, 
        transition: {
            duration: .2,
            delayChildren: .2,
        }
    },
    exit: { 
        opacity: 0,
        transition: { delay: .2 },
    },
}

export const popMotions = {
    initial: { 
        opacity: 0, 
        scale: 0, 
    },
    animate: { 
        opacity: 1, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20
        } 
    },
    exit: {
        opacity: 0,
        scale: 0,
    }
}