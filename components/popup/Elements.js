import styled from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const Overlay = styled(motion.div)`
    background-color: rgba(0 0 0 / 70%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    z-index: 999;
`

export const PopContainer = styled(motion.div)`
    width: 90%;
    max-width: 55rem;
    display: grid;
    grid-template-columns: 35% 1fr;
    position: relative;
    background-color: var(--black);
    border-radius: 13px;
    overflow: hidden;

    @media all and (max-width: 860px) {
        grid-template-columns: 1fr;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    @media all and (max-width: 860px) {
        height: 15rem;
    }
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const Content = styled.div`
    padding: 5.5rem 1.5rem;
    margin-left: 1rem;
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media all and (max-width: 860px) {
        padding: 2.5rem 1.5rem;
    }

    @media all and (max-width: 550px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

export const ContentItem = styled.div`
    border-left: 1px solid #fff;
    padding: 0 2rem;

    @media all and (max-width: 450px) {
        padding: 0 1rem;
    }
`

export const Title = styled.h3`
    font-size: 2.2rem;
    margin-bottom: 3.5rem;

    span {
        color: var(--green);
        font-weight: bold;
    }

    @media all and (max-width: 550px) {
        margin-bottom: 2rem;
    }
`

export const Oldy = styled.div`
    opacity: .5;
    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }

    @media all and (max-width: 680px) {
        opacity: 1;
    }
`

export const SmallText = styled.p`
    font-size: .8rem;
`

export const Text = styled.p`
    font-size: 1rem;
    margin-bottom: 1.5rem;
`


export const LinkButton = styled(Link)`
    color: var(--black);
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: .2rem;
    background-color: #fff;
    border-radius: 500px;
    margin-top: 1rem;
    padding: .5rem 1rem;
    position: relative;
    left: -2px;
    overflow: hidden;
    transition: all .4s ease;
    z-index: 5;

    &:hover {
        background-color: ${({dis}) => dis ? "#fff" : "var(--green)"};
    }

    @media all and (max-width: 550px) {
        bottom: 8px;
    }
`
