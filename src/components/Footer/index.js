import styled from 'styled-components';
import YoutubeIcon from '@mui/icons-material/YouTube';
import GithubIcon from '@mui/icons-material/GitHub';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import footerLogoImage from '../../images/logo-rflii-ver-putih.png';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  display: flex;
  font-weight: 600;
  font-size: 20px;
  color: white;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>
          <img src={footerLogoImage} alt="Rflii" width="20rem" height="30rem" />
          <Logo size="3rem" style={{ paddingLeft: '10px' }}>Rflii</Logo>
        </Logo>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display"><GithubIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.whatsapp} target="display"><WhatsappIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.youtube} target="display"><YoutubeIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Rflii. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;