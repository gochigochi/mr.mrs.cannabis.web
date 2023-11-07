import styled from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"

export const WinnersContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 17rem);
    gap: 4rem;
    margin: 3rem auto 8rem auto;
    width: 59rem;

    @media all and (max-width: 1024px) {
        grid-template-columns: repeat(2, 17rem);
        width: 38rem;
    }

    @media all and (max-width: 650px) {
        grid-template-columns: 1fr;
        width: 17rem;
    }
`

export const Box = styled(motion.div)`
    position: relative;

    &:hover p:last-child {
        bottom: -32px;
        opacity: 1;
    }

    &:after {
        content: "";
        width: 0;
        height: 1px;
        background-color: #fff;
        position: absolute;
        bottom: -36px;
        transition: all .3s ease-in-out;
    }

    &:hover:after {
        width: 100%;
    }
`

export const WinnerContainer = styled.div`
    position: relative;
    border-radius: 12px;
    overflow: hidden;

    &:hover div:last-child {
        right: -100%;
    }
`

export const WinnerTitle = styled.p`
    color: var(--green);
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: .6rem;
    position: relative;
    text-align: center;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 17rem;
    height: 17rem;
    background-color: #fff;
`

export const WinnerImg = styled(Image)`
    object-fit: cover;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(197, 236, 79, .9); */
    background-color: rgba(250, 250, 250, .8);
    transition: right .5s ease-in-out;
`

export const OverlayInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Logo = styled(Image)`
    width: 70% !important;
    height: 70% !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
    object-fit: contain;
`

export const Name = styled.p`
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 1.3rem;
    color: #fff;
    opacity: 0;
    bottom: -48px;
    left: 3px;
    transition: all .2s ease-in-out;
`

export const SponsorsContainer = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    margin: 5rem auto 0 auto;
    width: 60rem;

    @media all and (max-width: 1024px) {
        flex-wrap: wrap;
        width: 90%;
    }
`

export const SponsorContainer = styled(motion.div)`
    position: relative;
    width: 12rem;
    height: 12rem;
`

export const SponsorLogo = styled(Image)`
    object-fit: contain;
`