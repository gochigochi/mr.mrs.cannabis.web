import {
    Cover,
    Logo,
    LogoContainer,
} from './Elements'
import {
    bgMotion,
    logoMotion,
} from './Motions'

const Opening = ({ assetsLoaded }) => {
    return (
        <Cover
            variants={assetsLoaded ? bgMotion : null}
            animate="animate"
        >
            <LogoContainer
                variants={logoMotion}
                initial="initial"
                animate="animate"
            >
                <Logo src="/assets/logos/logo-white-green.png" alt="Mr. and Mrs. Cannabis splash logo" fill priority />
            </LogoContainer>
        </Cover>
    )
}

export default Opening