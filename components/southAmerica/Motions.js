export const logosMotions = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .1,
            delayChildren: 2.4,
        }
    }
}

export const logoMotions = {
    initial: {
        opacity: 0,
        y: 10,
        scale: .6,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
        }
    }
}

export const titleMotions = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 , transition: { delay: 2.7 }}
}

export const containerMotions = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .1,
            delayChildren: 3
        }
    },
    exit: {},
}

export const buttonsMotions = {
    initial: {
        opacity: 0,
        y: 7,
        scale: .8,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
        },
        scale: 1,
    },
}