import styled from 'styled-components'

export const Form = styled.form`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    width: 25rem;
    margin: 0 auto;
    padding-top: 2rem;

    @media all and (max-width: 550px) {
        width: 90%;
    }
`

export const InputContainer = styled.div`
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    border-radius: 3px;
    border: 1px solid var(--soft-gray);
    padding: .5rem 1rem;
    font-size: 1rem;
`

export const GeneralError = styled.p`
    font-size: 1rem;
    position: absolute;
    color: #fff;
    bottom: -2rem;
    left: .2rem;
`

export const FieldError = styled.p`
    font-size: .9rem;
    position: absolute;
    color: var(--error-color);
    top: .9rem;
    /* transform: translateY(-50%); */
    right: .9rem;
`

export const Submit = styled.button`
    padding: .4rem .8rem;
    height: 3rem;
    border-radius: 3px;
    color: var(--black);
    text-transform: uppercase;
    transition: opacity .2s ease-in-out;
    font-size: 1.1rem;
    background-color: ${({dis}) => dis ? "var(--soft-gray)" : "var(--green)"};
    ${({dis}) => dis && "cursor: none;"}

    &:hover {
        opacity: ${({dis}) => dis ? 1 : .7};
    }
` 