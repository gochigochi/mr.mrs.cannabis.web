export const logoMotions = {
    initial: {
        scale: .5,
        opacity: 0,
        y: 10,
    },
    animate: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            delay: 3,
            type: "spring"
        }
    }
}

export const copyMotions = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .1,
            delayChildren: 2.5
        }
    }
}

export const pieceMotions = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: .01,
            delayChildren: 1,
        } 
    },
}

export const buttonsMotions = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .3,
            delayChildren: 2.5,
            delay: .5,
        }
    },
}

export const containerMotions = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .2,
            delayChildren: 3,
        }
    }
}

export const linkMotions = {
    initial: { 
        opacity: 0, 
        scale: 0, 
    },
    animate: { 
        opacity: 1, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        } 
    } 
}