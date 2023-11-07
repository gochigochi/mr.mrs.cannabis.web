export const parentMotion = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .1,
            delayChildren: .3,
        }
    },
    exit: {}
}

export const secondaryParentMotion = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .1,
            delayChildren: .7,
        }
    },
    exit: {}
}

export const childMotion = {
    initial: {
        opacity: 0,
        x: -20,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .2,
        }
    },
    exit: {
        opacity: 0,
        y: -10,
    }
}

export const lineMotion = {
    initial: {
        // scaleX: 0,
        width: 0,
    },
    animate: {
        // scaleX: 1,
        width: 100,
        transition: {
            delay: .7
        }
    },
    exit: {
        opacity: 0,
    }
}