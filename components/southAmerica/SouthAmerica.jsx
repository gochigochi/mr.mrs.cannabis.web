import { useState } from "react"
import Opening from "../layout/Opening/Opening"
import BackgroundImage from "../backgrounds/BackgroundImage/BackgroundImage"
import { Section, Inner } from "./Elements"
import Soon from "../soon/Soon"

const SouthAmerica = () => {

  const [bgLoaded, setBgLoaded] = useState(false)

  return (
    <Section>
      <Opening assetsLoaded={bgLoaded} />
      <BackgroundImage 
        src="https://firebasestorage.googleapis.com/v0/b/someapp-4381f.appspot.com/o/backgrounds%2Fevent-soon.jpg?alt=media&token=d2ade69c-d018-40de-96ce-4d2709f9363f&_gl=1*1jg7aqb*_ga*MTE3NzM4MjM4Ni4xNjk2OTU4MTk0*_ga_CW55HF8NVT*MTY5ODY5NTI0Ni4zNS4xLjE2OTg3MDEwNTYuNjAuMC4w" 
        setLoaded={setBgLoaded} 
      />
      <Inner>
        {
          // Delay appearance to keep enter/exit animations
          bgLoaded ? <Soon /> : null
        }
      </Inner>
    </Section>
  )
}

export default SouthAmerica