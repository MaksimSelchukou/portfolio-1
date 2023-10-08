import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from '../../components/FlexWrapper';

export const Header = () => {

    const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <Logo/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: azure;
`