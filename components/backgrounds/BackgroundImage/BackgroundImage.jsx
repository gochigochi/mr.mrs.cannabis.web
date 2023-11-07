import { ImageContainer, Img, Overlay } from "./Elements"

const BackgroundImage = ({ src, setLoaded }) => {
    return (
        <ImageContainer>
            <Overlay />
            <Img src={src} alt="" fill priority sizes="100vw"  onLoad={() => setLoaded(true)} quality={65}/>
        </ImageContainer>
    )
}

export default BackgroundImage