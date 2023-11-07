import { useState } from "react"
import {
    AccordionContainer,
    Item,
    Qcontainer,
    Chevron,
    Acontainer,
    Q,
    A,
} from "./Elements"

const Accordion = ({ content }) => {

    const [openedId, setOpenedId] = useState(null)

    const handleToggle = (id) => {
        setOpenedId(null)
        setTimeout(() => setOpenedId(id !== openedId ? id : null), 200)
    }

    return (
        <AccordionContainer>
            {
                content.map(item => {
                    return (
                        <Item key={item.id} open={openedId === item.id}>
                            <Qcontainer onClick={() => handleToggle(item.id)}>
                                <Q>{item.q}</Q>
                                <Chevron open={openedId === item.id} />
                            </Qcontainer>
                            <Acontainer open={openedId === item.id}>
                                <A dangerouslySetInnerHTML={{ __html: item.a }} />
                            </Acontainer>
                        </Item>
                    )
                })
            }
        </AccordionContainer>
    )
}

export default Accordion