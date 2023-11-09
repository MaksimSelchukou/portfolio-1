import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from '../../styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper align={'center'} direction={'column'}>
                <Name>Maxim</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconID={'instagram'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconID={'telegram'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconID={'vk'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconID={'linkedin'}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
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
  gap: 34px;
  margin: 37px 0;
`

const SocialItem = styled.li`
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