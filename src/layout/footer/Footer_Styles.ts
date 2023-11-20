import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
  position: relative;
  background-color: ${theme.color.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
  @media ${theme.media.mobile} {
    font-size: 16px
  }
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`


const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  color: ${theme.color.accent};

  &:hover {
    position: relative;
    top: -30%;
    color: ${theme.color.primaryBg};
    background-color: ${theme.color.accent};
  }

`

const Copyright = styled.small`
  color: rgba(255, 255, 255, 0.50);
  font-size: 12px;
  font-weight: 400;
`

export const S = {
    Footer, Name, SocialList, SocialIconLink, Copyright
}