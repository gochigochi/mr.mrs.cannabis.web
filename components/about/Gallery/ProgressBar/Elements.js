import styled, { css, keyframes } from "styled-components"

const barProgress = keyframes`
    from {
        width: 0;
    } 
    to {
        width: 100%;
    }
`

export const ProgressBarEl = styled.div`
    position: relative;
    width: auto;
    height: .2rem;
    background-color: ${({ wasActive }) => wasActive ? "#fff" : "rgba(250, 250, 250, 0.3)"};
    cursor: pointer;
    transition: all .1s ease-in;
`

export const BarEl = styled.div`
    background-color: #fff;
    animation: ${barProgress} 3s linear;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
`