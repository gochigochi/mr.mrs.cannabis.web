export const subMotions = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .1,
            delayChildren: 2,
        }
    }
}

export const subCharMotions = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
}

export const titleMotions = {
    initial: {
        scale: .5,
    },
    animate: {
        scale: 1,
        transition: {
            staggerChildren: .2,
            delayChildren: 2.2,
            type: "spring",
            duration: 2,
        }
    }
}

export const titleWordsMotions = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
}

export const textsMotions = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .3,
            delayChildren: 2.4
        }
    }
}

export const textMotion = {
    initial: {
        opacity: 0,
        y: 5,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
        }
    }
}

export const logoMotions = {
    initial: {
        opacity: 0,
        scale: .7,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 3.5,
        },
    }
}