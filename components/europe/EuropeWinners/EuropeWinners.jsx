import { useState } from "react"
import Link from "next/link"
import Opening from "@/components/layout/Opening/Opening"
import BackgroundImage from "@/components/backgrounds/BackgroundImage/BackgroundImage"
import { boxVariants, parentMotions } from "./Motions"
import {
  Section,
  Inner,
  Title,
  Accent,
} from "../../common/Elements"
import {
  WinnersContainer,
  WinnerContainer,
  WinnerImg,
  ImageContainer,
  Overlay,
  OverlayInner,
  Logo,
  WinnerTitle,
  Box,
  Name,
  SponsorsContainer,
  SponsorContainer,
  SponsorLogo,
} from "./Elements"

const EuropeWinners = ({ data, sponsors }) => {

  const [bgLoaded, setBgLoaded] = useState(false)
  const dataMap = Object.values(data)[0].map(el => el)
  const sponsorsMap = Object.values(sponsors)[0].map(el => el)
  

  return (
    <Section>
      <Opening assetsLoaded={bgLoaded} />
      <BackgroundImage
        src="https://firebasestorage.googleapis.com/v0/b/someapp-4381f.appspot.com/o/backgrounds%2Feurope-winners.jpg?alt=media&token=7882f4da-16e2-4353-abaa-8a043b8d0047&_gl=1*chkcz2*_ga*MTE3NzM4MjM4Ni4xNjk2OTU4MTk0*_ga_CW55HF8NVT*MTY5ODY3MTE2Ny4zMy4xLjE2OTg2NzM0MTUuNjAuMC4w"
        setLoaded={setBgLoaded}
      />
      <Inner>
        <Title>Winners <Accent>Europe 2023</Accent></Title>
        <WinnersContainer
          variants={parentMotions}
          initial="initial"
          animate="animate"
        >
          {
            dataMap.map(winner => {
              return (
                <Box key={winner.id} variants={boxVariants}>
                  <WinnerTitle>{winner.cat}</WinnerTitle>
                  <WinnerContainer>
                    <ImageContainer>
                      <WinnerImg src={winner.src} alt="" fill priority sizes="33vw" />
                    </ImageContainer>
                    <Overlay>
                      {
                        winner.logo ?
                          <OverlayInner>
                            <Logo src={winner.logo} alt="" fill priority sizes="25vw" />
                          </OverlayInner> :
                          null
                      }
                    </Overlay>
                  </WinnerContainer>
                  <Name>{winner.name}</Name>
                </Box>
              )
            })
          }
        </WinnersContainer>
        <Title>Thank you to our <Accent>Sponsors 2023</Accent></Title>
        <SponsorsContainer>
          {
            sponsorsMap.map(sponsor => {
              return(
                <Link href={sponsor.url} key={sponsor.id}>
                  <SponsorContainer 
                    whileHover={{scale: 1.2}} 
                    initial={{opacity: 0, y: 10}}
                    whileInView={{opacity: 1, y: 0, transition: { delay: .3 }}}
                    viewport={{once: true}}
                  >
                    <SponsorLogo src={sponsor.src} alt={sponsor.alt} fill sizes="25vw"/>
                  </SponsorContainer>
                </Link>
              )
            })
          }
        </SponsorsContainer>
      </Inner>
    </Section>
  )
}

export default EuropeWinners