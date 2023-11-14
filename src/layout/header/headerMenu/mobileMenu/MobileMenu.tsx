import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Menu} from "../menu/Menu";


export const MobileMenu = ({menuItems}: { menuItems: Array<string> }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <StyledMobileMenu>
            <BurgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <span></span>
            </BurgerButton>

            <MobiledMenuPopup onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <Menu menuItems={menuItems}/>
            </MobiledMenuPopup>
        </StyledMobileMenu>


    );
};


const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobiledMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(31, 31, 32, 0.90);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: center;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 100px;
  height: 100px;
  z-index: 999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.color.font};
    position: absolute;
    left: -40px;
    bottom: 100px;


    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }

    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }
  }
`

