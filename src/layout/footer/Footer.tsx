import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

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
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};



const StyledFooter = styled.footer`
  min-height: 30vh;
  background-color: #fdf1b7;
`

const Name = styled.span`

`

const SocialList = styled.ul`
  display: flex;
  gap:30px
`

const SocialItem = styled.li`
`

const SocialIconLink = styled.a`

`

const Copyright = styled.small`

`