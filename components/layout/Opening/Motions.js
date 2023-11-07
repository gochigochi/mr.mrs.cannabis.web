export const bgMotion = {
    animate: {
        x: '-100vw',
        transition: {
            duration: .6,
            delay: 1.5,
            ease: [.17,.67,.93,.3],
        },
    },
}

export const logoMotion = {
    initial: {
        opacity: 0,
        y: -10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
            delay: .3,
            ease: [.17,.67,.93,.3],
        }
    },
}