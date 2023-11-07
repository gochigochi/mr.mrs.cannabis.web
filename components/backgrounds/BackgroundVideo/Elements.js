import styled from 'styled-components'

export const VideoContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
`

export const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 50%);
    z-index: 200;

    @media all and (max-width: 650px) {
        position: fixed;
    }
`