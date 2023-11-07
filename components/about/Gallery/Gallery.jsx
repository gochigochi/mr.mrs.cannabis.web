import { useEffect, useState, useRef } from "react"
import { IoCloseCircleOutline, IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5"
import ProgressBar from "./ProgressBar/ProgressBar"
import {
    GalleryInner,
    Return,
    ImageContainer,
    Img,
    BarsContainer,
    TopOverlay,
    ButtonsContainer,
    Button,
} from "./Elements"

const DURATION = 3000

const Gallery = ({ stories, setOpenGallery, openGallery }) => {

    const [currentStoryIndex, setCurrentStoryIndex] = useState(1)
    const timeoutRef = useRef()

    useEffect(() => {

        // USE REF TO CLEAR TIMEOUT ON FORWARD/BACKWARD HANDLERS
        timeoutRef.current = setTimeout(() => {

            if (currentStoryIndex < stories.length) {

                setCurrentStoryIndex(currentStoryIndex + 1)

            } else if (currentStoryIndex >= stories.length) {

                setCurrentStoryIndex(1)

            }
        }, DURATION)

    }, [currentStoryIndex])

    const handleForward = () => {

        // CLEAR TIMEOUT
        if (timeoutRef.current) clearTimeout(timeoutRef.current)

        if (currentStoryIndex < stories.length) {

            setCurrentStoryIndex(currentStoryIndex + 1)

        } else if (currentStoryIndex >= stories.length) {

            setCurrentStoryIndex(1)

        }
    }

    const handleBackwards = () => {

        // CLEAR TIMEOUT
        if (timeoutRef.current) clearTimeout(timeoutRef.current)

        if (currentStoryIndex > 1) {

            setCurrentStoryIndex(currentStoryIndex - 1)

        } else if (currentStoryIndex === 1) {

            setCurrentStoryIndex(stories.length)

        }
    }

    return (
        <GalleryInner>
            <Return onClick={() => setOpenGallery(!openGallery)}>
                <IoCloseCircleOutline />
            </Return>
            <ImageContainer>
                {
                    stories.map(img => {
                        return (
                            <Img
                                key={img.id}
                                src={img.src}
                                alt=""
                                fill
                                sizes="60vw"
                                show={img.id === currentStoryIndex}
                                priority
                            />
                        )
                    }
                    )
                }
                <TopOverlay />
                <BarsContainer>
                    {stories.map(img => {
                        return (
                            <ProgressBar
                                isActive={img.id === currentStoryIndex}
                                wasActive={img.id < currentStoryIndex}
                                t={DURATION}
                            />
                        )
                    })}
                </BarsContainer>
                <ButtonsContainer
                    initial={{opacity: 0}}
                    whileHover={{opacity: 1}}
                >
                    <Button pos="left" onClick={handleBackwards}>
                        <IoArrowBackCircleOutline />
                    </Button>
                    <Button pos="right" onClick={handleForward}>
                        <IoArrowForwardCircleOutline />
                    </Button>
                </ButtonsContainer>
            </ImageContainer>
        </GalleryInner>
    )
}

export default Gallery