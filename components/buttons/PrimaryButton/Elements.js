import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Button = styled(motion.button)`
    color: var(--blue);
    padding: 1rem 2rem;
    margin: 0 .5rem;
    text-align: center;
    text-transform: uppercase;
    border-radius: 500px;
    position: relative;
    overflow: hidden;
    transition: all .1s ease;
    font-weight: 700;
    letter-spacing: .2rem;
    
    
    span {
        text-transform: uppercase;
        font-weight: 900;
    }

    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: -2;
    }

    &:after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: var(--green);
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-100%, 0) rotate(15deg);
        transform-origin: top left;
        transition: transform .2s ease-in-out;
        z-index: -1;
        border-radius: 500px;
    }

    &:hover:after {
        transform: translate(0, 0);
    }
    
    &:hover {
        transform: scale(1.1);
    }
`

