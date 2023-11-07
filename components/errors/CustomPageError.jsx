import { Section, Inner } from "@/components/common/Elements"
import styled from "styled-components"

const Text = styled.p`
  display: grid;
  place-items: center;
  height: calc(100% - 6rem);
  color: #fff;
  font-size: 5vw;
`

const CustomPageError = ({ children }) => {
  return (
    <Section>
      <Inner style={{"height": "100vh"}}>
        <Text>
          {children}
        </Text>
      </Inner>
    </Section>
  )
}

export default CustomPageError