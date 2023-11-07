import styled from "styled-components"

export const Hamb = styled.button`
    background: transparent;
    outline: none;
    cursor: pointer;
    z-index: 800;
    align-self: center;
    padding: 4px 0;
    border-radius: 4px;
    position: relative;
`

export const Span = styled.span`
    display: block;
    width: 27px;
    height: 2px;
    background-color: #ffffff;
    margin-block: 5px;
    transition: transform .2s, opacity .25s;

    &:nth-child(1) {
        transform: ${({isOpen}) => isOpen ? 'translateY(7px) rotate(45deg)' : 'none'};
    }

    &:nth-child(2) {
        opacity: ${({isOpen}) => isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
        transform: ${({isOpen}) => isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none'};
    }
`