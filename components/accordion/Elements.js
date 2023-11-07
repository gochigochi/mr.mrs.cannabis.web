import styled from "styled-components"

export const AccordionContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: var(--general-shadow);
    z-index: 2;
    max-width: 35rem;
    margin: 2rem auto;
`

export const Item = styled.div`
    margin: .5rem 0;
`

export const Qcontainer = styled.div`
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding-right: 3rem;
    left: 2rem;
`

export const Chevron = styled.div`
    position: absolute;
    width: .7rem;
    height: .7rem;
    top: 50%;
    transform: translateY(-50%);
    left: -1.5rem;
    align-self: center;
    
    &:before {
        ${({ open }) => open && 'transform: rotate(90deg);'}
        content: "";
        position: absolute;
        width: 0; 
        height: 0; 
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 7px solid var(--green);
        transition: all .2s ease-in-out;
    }
`

export const Acontainer = styled.div`
    overflow: hidden;
    max-height: ${({ open }) => open ? '100rem' : '.05rem'};
    transition: all .2s ease-in-out;
    padding: 0 2rem;
    background-color: var(--green);
    `

export const Q = styled.p`
    font-weight: 600;
    font-family: var(--text-font);
    color: var(--green);
    text-align: center;
`

export const A = styled.p`
    padding: 1rem 0;
    font-family: var(--text-font);
    font-size: .9rem;
`