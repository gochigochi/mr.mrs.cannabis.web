import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const Section = styled.section`
    width: 100vw;
    padding: 5rem 0;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    z-index: 300;

    background-color: var(--alt-black);
`

export const Inner = styled.div`
    width: 90%;
    max-width: var(--inner-max-width);
    margin: 0 auto;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media all and (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`

export const LogoContainer = styled.div`
    position: relative;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    bottom: 1.5rem;
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const SocialContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 960px) {
        top: 0;
        margin: 2rem 0;
    }
`

export const SocialIcons = styled.div`
    display: flex;
`

export const SocialIconContainer = styled(Link)`
    position: relative;
    width: 2rem;
    height: 2rem;
    margin: 0 .5rem 1rem .5rem;
`

export const SocialIcon = styled(Image)`
    object-fit: contain;
`

export const Email = styled.p`
    color: #fff;
    font-size: 1.1rem;
    text-align: center;
`

export const Information = styled.div`
    width: 80%;
    margin: .8rem auto 0 auto;
`

export const InformationEntry = styled.p`
    font-size: .7rem;
    margin-bottom: .4rem;
    color: #fff;
    text-align: center;
`

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;    
`

export const Button = styled.div`
    padding: .5rem 1.5rem;
    width: 12rem;
    margin-bottom: 1rem;
    border-radius: 500px;
    background-color: var(--green);
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
`