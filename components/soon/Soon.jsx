import PulsIcon from '../pulsicon/PulsIcon'
import {
    titleMotions,
    titleWordsMotions,
} from './Motions'
import {
    Title,
    TitleWord,
} from "./Elements"

const Soon = () => {
    return (
        <>
            <Title
                variants={titleMotions}
                initial="initial"
                animate="animate"
            >
                <TitleWord variants={titleWordsMotions}>Event </TitleWord>
                <TitleWord variants={titleWordsMotions}>information</TitleWord>
                <br></br>
                <TitleWord variants={titleWordsMotions} color="var(--green)">Coming </TitleWord>
                <TitleWord variants={titleWordsMotions} color="var(--green)">Soon!</TitleWord>
            </Title>
            <PulsIcon />
        </>
    )
}

export default Soon