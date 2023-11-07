import styled from "styled-components"
import Image from "next/image"

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    z-index: 100;

    @media all and (max-width: 650px) {
        position: fixed;
    }
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: rgba(94, 23, 235, .5);
    background-color: rgb(0 0 0 / 65%);
    z-index: 200;

    @media all and (max-width: 650px) {
        position: fixed;
    }
`