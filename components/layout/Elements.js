import styled from 'styled-components'
import Image from 'next/image'

export const LayoutContainer = styled.div`
    width: 100vw;
    position: relative;
`

// export const BgVideo = styled.video`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     position: fixed;
//     top: 0; left: 0;
// `

export const BgContainer = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
`

export const BgImg = styled(Image)`
    object-fit: cover;
`

// export const Overlay = styled.div`
//     position: absolute;
//     top: 0; left: 0;
//     background-color: rgba(0, 0, 0, 0.7);
//     width: 100%;
//     height: 100%;
// `