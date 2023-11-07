import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.section)`
    width: 50vw;
    height: 100vh;
    position: fixed;
    left: 100%;
    top: 0;
    background-color: var(--black);
    transform: ${({ isopen }) => isopen ? 'translateX(-30vw)' : 'translateX(10vw)'};
    transition: transform .3s cubic-bezier(.17,.67,.93,.3);
    box-shadow: -5px 0px 20px rgba(0, 0, 0, 0.8);
    padding-left: 3rem;
    display: flex;
    align-items: center;
    z-index: 800;

    @media all and (max-width: 860px) {
        transform: ${({ isopen }) => isopen ? 'translateX(-50vw)' : 'translateX(10vw)'};
    }

    @media all and (max-width: 550px) {
        width: 80vw;
        transform: ${({ isopen }) => isopen ? 'translateX(-80vw)' : 'translateX(10vw)'};
    }

    @media all and (max-width: 480px) {
        width: 100vw;
        transform: ${({ isopen }) => isopen ? 'translateX(-100vw)' : 'translateX(10vw)'};
    }
`

export const Content = styled.div`
    position: relative;
    height: fit-content;
    bottom: 3rem;

    @media all and (max-width: 550px) {
        left: 0rem;
        bottom: 0;
    }
`

export const PrimaryLinks = styled(motion.nav)`
    position: relative;
    padding-bottom: 1rem;
`

export const DivLine = styled(motion.div)`
    width: 100%;
    height: .1rem;
    background-color: #fff;
`

export const Primary = styled(motion.div)`
    /* display@ */
`

export const PrimaryLinkContainer = styled(motion.div)`
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: .2rem;
    margin-bottom: 1rem;
    color: #fff;

    a {
        font-weight: 800;
        color: #fff;
    }
`

export const Childs = styled(motion.div)`
    position: relative;
    left: 2rem;
`

export const PrimaryChildLinkContainer = styled(motion.div)`
    font-size: 1.1rem;
    margin-bottom: .8rem;

    a {
        font-weight: 600;
        color: #fff;
        letter-spacing: .2rem;
    }
`

export const SecondaryLinks = styled(motion.nav)`
    padding-top: 1rem;
`

export const SecondaryLinkContainer = styled(motion.div)`
    margin-bottom: 1rem;
    letter-spacing: .4;
    cursor: pointer;
    font-size: .85rem;

    a {
        font-family: var(--text-font);
        font-weight: 300;
        color: #fff;
    }

    span {
        font-weight: 300;
        font-family: var(--text-font);
        color: #fff;
        letter-spacing: inherit;
    }
`

export const Span = styled.span`
    letter-spacing: 0;
    color: var(--green);
`

export const Log = styled.span`
    margin-bottom: 1rem;
    letter-spacing: .4;
    font-weight: 600;
`