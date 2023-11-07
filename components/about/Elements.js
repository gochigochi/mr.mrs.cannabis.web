import styled from "styled-components"
import { motion } from "framer-motion"
import Link from "next/link"

export const Section = styled.section`
    padding: 12rem 0 1rem 0;
    width: 100vw;
    position: relative;
    display: grid;
    place-items: center;
    box-shadow: var(--hard-shadow);
`

export const Inner = styled(motion.div)`
    position: relative;
    bottom: 3rem;
    right: 1rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: var(--inner-max-width);
    margin: 0 auto;
    z-index: 300;
    gap: 2rem;

    @media all and (max-width: 480px) {
        padding: 0 .5rem;
    }
`

export const Title = styled(motion.h2)`
    text-transform: uppercase;
    text-align: center;
    font-size: 5rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    color: #fff;

    span { 
        color: var(--green);
        font-weight: 800;
    }

    @media all and (max-width: 768px) {
        font-size: 3rem;
    }
`

export const Text = styled.p`
    color: #fff;
    font-size: 1.4rem;
    max-width: 60rem;
    text-align: center;
`

export const SubText = styled.p`
    color: #fff;
    font-weight: 800;
    font-size: 1.4rem;
    margin-top: 1rem;
    text-align: center;
`

export const ButtonsContainer = styled(motion.div)`
    margin-top: 4rem;
`

export const Note = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 1.4rem;
    margin-top: 4rem;
    letter-spacing: .9;
    text-align: center;

    span {
        font-weight: 900;
        color: var(--green);
        text-decoration: underline;
    }
`

export const MiddleSection = styled.section`
    position: relative;
    width: 100vw;
    display: grid;
    place-items: center;
    min-height: 8rem;
    background-color: #fff;
`

export const BackText = styled.p`
    font-size: 10rem;
    text-transform: uppercase;
    text-align: center;
    color: var(--blue);
    opacity: .2;
    line-height: .9;

    @media all and (max-width: 1024px) {
        font-size: 6rem;
    }
`

export const OverlayText = styled.p`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: var(--blue);
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 4rem;
    display: grid;
    place-items: center;
`

export const ImageGallerySection = styled.section`
    position: relative;
    height: 40rem;
    width: 100vw;
    display: grid;
    place-items: center;
`

export const GalleryButton = styled(motion.button)`
    background-color: var(--green);
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    border-radius: 500px;
    font-size: 1.8rem;
    transition: color .1s ease-in-out, background-color .1s ease-in-out;
    padding: 1.3rem 3rem;
    line-height: .8;

    &:hover {
        background-color: #fff;
        color: var(--blue);
    }
`

export const GalleryContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    transition: all .1s ease-in-out;
    background-color: var(--blue);

    clip-path: ${({isopen}) => isopen ? "inset(0% 0% 0% 0%)" : "inset(48% 50% 52% 49% round 10px)"};
`