import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Menu} from "../menu/Menu";


export const DesktopMenu = ({menuItems}: { menuItems: Array<string> }) => {
    return (
        <>
            <StyledHeaderMenu>
                <Menu menuItems={menuItems}/>
            </StyledHeaderMenu>
            <BurgerMenu>
                <ItemBurgerMenu></ItemBurgerMenu>
                <ItemBurgerMenu></ItemBurgerMenu>
                <ItemBurgerMenu></ItemBurgerMenu>
            </BurgerMenu>
        </>
    );
};

const BurgerMenu = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 2;
  overflow: hidden;
`

const ItemBurgerMenu = styled.span`
  width: 30px;
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFFFFF;
  transition: all 0.5s;

  &:nth-of-type(2) {
    top: calc(50% - 5px);
  }

  &:nth-of-type(3) {
    top: calc(50% + 5px);
  }
`

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`






