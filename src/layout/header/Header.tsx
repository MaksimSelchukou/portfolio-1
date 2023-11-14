import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from '../../components/FlexWrapper';
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {DesktopMenu} from "./headerMenu/desktopMenu/HeaderMenu";
import {useViewport} from "../../hooks/useViewport";

export const Header = () => {

    const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']
    const {width, breakPoint} = useViewport()

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <Logo/>
                    {width > breakPoint ? <DesktopMenu menuItems={items}/> : <MobileMenu menuItems={items}/>}
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.90);
  padding: 20px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99999;
`