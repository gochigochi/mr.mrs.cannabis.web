import { cubicBezier, easeInOut } from "framer-motion"

export const motion = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
            delay: .3,
        }
    },
    exit: {}
}

export const composedMotion = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 1,
            delayChildren: .2,
        }
    },
    exit: {}
}

export const one = {
    initial: {
        opacity: 0,
        y: 10,
        rotate: -35,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .2,
            delay: .3,
        }
    },
    exit: {}
}

export const two = {
    initial: {
        opacity: 0,
        y: 10,
        rotate: -35,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .2,
            delay: .4,
        }
    },
    exit: {}
}

export const three = {
    initial: {
        opacity: 0,
        y: 10,
        rotate: -35,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .2,
            delay: .9,
        }
    },
    exit: {}
}


export const four = {
    initial: {
        opacity: 0,
        y: 10,
        rotate: -35,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .2,
            delay: 1,
        }
    },
    exit: {}
}

export const circleMotion = {
    initial: { scale: 0, translateX: -50, translateY: '-50%' },
    animate: { scale: 1, transition: { delay: 1.5 }, translate: { x: '-50%', y: '-50'}},
    exit: { scale: 0 }
}

export const highlightMotion = {
    initial: {width: '0%'},
    animate: {width: '100%', transition: { delay: 1, duration: .5, ease: cubicBezier(.17,.67,.93,.3)}},
}

export const badgesMotion = {
    initial: {
        opacity: 0,
        y: 15,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .5,
            duration: .5, 
            ease: cubicBezier(.17,.67,.93,.3)
        }
    }
}