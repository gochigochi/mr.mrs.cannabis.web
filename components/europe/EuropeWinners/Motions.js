export const parentMotions = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .2,
            delayChildren: .2
        }
    }
}

export const boxVariants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
        }
    }
}
