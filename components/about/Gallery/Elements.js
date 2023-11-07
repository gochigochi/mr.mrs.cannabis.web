import styled from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"

export const GalleryInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`

export const Return = styled.div`
    position: absolute;
    right: 2rem;
    top: 12px;
    color: #fff;
    font-size: 2.5rem;
    cursor: pointer;

    @media all and (max-width: 600px) {
        right: .5rem;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    width: 95%;
    max-width: 60rem;
    height: 35rem;
    border-radius: 12px;
    overflow: hidden;

    @media all and (max-width: 600px) {
        height: 36rem;
        top: 1rem;
    }
`

export const Img = styled(Image)`
    object-fit: cover;
    display: ${({show}) => show ? "block" : "none"};
`

export const BarsContainer = styled.div`
    position: absolute;
    top: .7rem;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    display: grid;
    gap: .3rem;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
`

export const TopOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    background: linear-gradient(180deg, rgba(32,32,32,0.5) 0%, rgba(255,255,255,0) 100%, rgba(0,212,255,1) 100%);
`

export const ButtonsContainer = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.div`
    height: 100%;
    width: 20%;
    max-width: 6rem;
    background-color: rgba(0, 0, 0, 0.3);
    display: grid;
    place-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 2.2rem;
    ${({pos}) => pos === "left" && "background: linear-gradient(90deg, rgba(2,2,23,1) 0%, rgba(255,255,255,0) 100%);"}
    ${({pos}) => pos === "right" && "background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(2,2,23,1) 100%);"}

    @media all and (max-width: 600px) {
        opacity: 0;
        width: 50%;
        max-width: 1000;
    }
`