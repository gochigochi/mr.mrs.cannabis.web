import Link from 'next/link'
import SecondaryButton from '@/components/buttons/SecondaryButton/SecondaryButton'
import {
    Section,
    Inner,
    LogoContainer,
    Logo,
    SocialContainer,
    SocialIconContainer,
    SocialIcon,
    SocialIcons,
    Email,
    LinksContainer,
    Information,
    InformationEntry,
    Button,
} from './Elements'

const Footer = () => {

    const temp = [
        {
            entry: 'VYBZ Markenagentur UG (haftungsbeschränkt)',
        },
        {
            entry: 'Geranienweg 9',
        },
        {
            entry: '72555 Metzingen',
        },
        {
            entry: '+49 (0) 172 722 06 30',
        },
        {
            entry: 'info@vybz-agentur.com',
        },
        {
            entry: 'Vertretungsberechtigter Geschäftsführer: Marco Reichardt',
        },
        {
            entry: 'Amtsgericht Stuttgart: HRB 770081',
        },
        {
            entry: 'Ust.-ID: DE325455333',
        },
    ]

    return (
        <Section>
            <Inner>
                <LogoContainer>
                    <Logo src="/assets/logos/logo-white-green.png" alt="" fill />
                </LogoContainer>
                <SocialContainer>
                    <SocialIcons>
                        <SocialIconContainer
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://instagram.com/mr.mrs.cannabis?igshid=YmMyMTA2M2Y=">
                            <SocialIcon src="/assets/logos/ig.png" alt="instagram icon link" fill sizes="20vw" />
                        </SocialIconContainer>
                        <SocialIconContainer
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/company/mr-mrs-cannabis/">
                            <SocialIcon src="/assets/logos/in.png" alt="linkedin icon link" fill sizes="20vw" />
                        </SocialIconContainer>
                    </SocialIcons>
                    <Email>contact@mrmrscannabis.com</Email>
                    <Information>
                        {
                            temp.map(item => <InformationEntry key={item.entry}>{item.entry}</InformationEntry>)
                        }
                    </Information>
                </SocialContainer>
                <LinksContainer>
                    <Link href="/about">
                        <SecondaryButton>About us</SecondaryButton>
                    </Link>
                    <Link href="/privacy-policy">
                        <SecondaryButton>Privacy policy</SecondaryButton>
                    </Link>
                </LinksContainer>
            </Inner>
        </Section>
    )
}

export default Footer