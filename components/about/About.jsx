import { useState } from "react"
import Opening from "../layout/Opening/Opening"
import BackgroundImage from "../backgrounds/BackgroundImage/BackgroundImage"
import Gallery from "./Gallery/Gallery"
import SecondaryButton from "../buttons/SecondaryButton/SecondaryButton"
import {
    Section,
    Inner,
    Title,
    Text,
    SubText,
    ButtonsContainer,
    Button,
    Note,
    MiddleSection,
    BackText,
    OverlayText,
    ImageGallerySection,
    GalleryButton,
    GalleryContainer,
    AltButton,
} from "./Elements"
import PulsIcon from "../pulsicon/PulsIcon"

const About = ({ stories }) => {

    const [openGallery, setOpenGallery] = useState(false)
    const [bgLoaded, setBgLoaded] = useState(false)

    return (
        <>
            <Section>
                <Opening assetsLoaded={bgLoaded} />
                <BackgroundImage
                    src="/assets/images/about-us.jpg"
                    setLoaded={setBgLoaded}
                />
                <Inner>
                    <Title>
                        The award show for the
                        <br></br>
                        <span>cannabis industry</span>
                    </Title>
                    <Text>
                        The Mr & Mrs Cannabis award aims to lift and highlight entrepeneurship, creativity, innovation and authenticity in a buzzing award ceremony, where companies and influential profiles within the cannabis industry are awarded for their unique contribution. The ceremony recognizes individuals and companies who are pre-nominated in a range of award categories.
                    </Text>
                    <SubText>
                        Mr & Mrs Cannabis is an international concept, with a award show in different regions of the world.
                    </SubText>
                    {/* <ButtonsContainer> */}
                        <PulsIcon />
                    {/* </ButtonsContainer> */}
                    <Note>Get in contact with us here <span>contact@mrmrscannabis.com</span>
                    </Note>
                </Inner>
            </Section>
            <MiddleSection>
                <BackText>Previous Events</BackText>
                <OverlayText>Europe 2023</OverlayText>
            </MiddleSection>
            <ImageGallerySection>
                <BackgroundImage
                    src="/assets/images/gallery-bg.jpg"
                    setLoaded={setBgLoaded}
                />
                <Inner>
                    <GalleryButton onClick={() => setOpenGallery(!openGallery)}>Photo Gallery</GalleryButton>
                </Inner>
            </ImageGallerySection>
            <GalleryContainer isopen={openGallery}>
                {
                    openGallery ?
                        <Gallery stories={stories} setOpenGallery={setOpenGallery} openGallery={openGallery} /> :
                        null
                }
            </GalleryContainer>
        </>
    )
}

export default About