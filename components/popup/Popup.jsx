import {
    overlayMotions,
    popMotions,
} from "./Motions"
import {
    Overlay,
    PopContainer,
    ImageContainer,
    Img,
    Content,
    ContentItem,
    Oldy,
    Title,
    SmallText,
    Text,
    LinkButton,
} from "./Elements"

const Popup = ({ setOpen }) => {

    const handleClick = (e) => e.target.id === "overlay" && setOpen(false)

    return (
        <Overlay
            variants={overlayMotions}
            initial="initial"
            animate="animate"
            exit="exit"
            id="overlay"
            onClick={handleClick}
        >
            <PopContainer variants={popMotions}>
                <ImageContainer>
                    <Img src="/assets/images/europe-winners.jpg" atl="." fill sizes="25vw" />
                </ImageContainer>
                <Content>
                    <ContentItem>
                        <SmallText>- Next edition -</SmallText>
                        <Title><span>Europe 2024</span></Title>
                        <Text>Join us on our next event at Berlin</Text>
                        <LinkButton dis="true" href="#" disabled={true}>Comming soon</LinkButton>
                    </ContentItem>
                    <ContentItem>
                        <Oldy>
                            <SmallText>Past edition</SmallText>
                            <Title>Europe 2023</Title>
                            <Text>Check the winners of our last event</Text>
                            <LinkButton href="/europe-winners-2023">Visit</LinkButton>
                        </Oldy>
                    </ContentItem>
                </Content>
            </PopContainer>
        </Overlay>
    )
}

export default Popup