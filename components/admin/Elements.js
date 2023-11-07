import styled from 'styled-components'

export const Container = styled.div`
    width: 95%;
    max-width: 800px;
    margin: 8rem auto;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
    width: 95%;
    margin: 0 auto;

    button {
        background-color: #ededed;
        padding: .8rem 2rem;
    }
`

export const Title = styled.h2`
    color: #fff;
`

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

export const ActionButton = styled.button`
    background-color: #ededed;
    padding: .8rem;
    font-weight: bold;
`

export const TableDivisor = styled.div`
    height: .5rem;
    background: transparent;
    padding: 3rem 0;
`

export const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    margin: 1rem auto;
    width: 95%;
    max-width: 65rem;
    border-radius: 4px;
    background-color: #fff;
`

export const Head = styled.thead`
    background-color: #eaeaeaea;
`

export const TH = styled.th`
    border: 1px solid #dfdfe2;
    text-align: left;
    padding: 1rem;
`

export const TD = styled.td`
    border: 1px solid #dfdfe2;
    text-align: left;
    padding: 1rem;
    width: fit-content;
    max-width: 11rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const DataContainer = styled.span`
    display: grid;
    grid-template-columns: 75% 1fr;
`

export const InnerTd = styled.td`
    border: 1px solid #dfdfe2;
    text-align: left;
    padding: 1rem;
    width: 100%;
`

export const FormContainer = styled.div`
    width: 25rem;
    height: 100vh;
    padding: 2rem;
    margin: auto;
    padding-top: 25%;

    @media all and (max-width: 550px) {
        width: 95%;
    }
`

export const Form = styled.form`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
`

export const InputContainer = styled.div`
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 1px solid var(--soft-gray);
    padding: .5rem 1rem;
    font-size: 1rem;
`

export const GeneralError = styled.p`
    font-size: .9rem;
    position: absolute;
    color: var(--error-color);
    top: -1.3rem;
    /* transform: translateY(-50%); */
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
    border-radius: 500px;
    background-color: var(--green);
    color: var(--black);
    text-transform: uppercase;
    transition: opacity .2s ease-in-out;
    font-size: 1.1rem;

    &:hover {
        opacity: .7;
    }
` 

export const ConfirmationModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
`

export const Modal = styled.div`
    position: relative;
    background-color: #ffffff;
    padding: 2rem;

    p {
        margin-bottom: 2rem;
        font-size: 2rem;
    }
`