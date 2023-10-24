import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const MobileMenu = ({menuItems}: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            <MobiledMenuPopup isOpen={true}>
                <ListItems>
                    {menuItems.map((item, ind) => {
                        return (
                            <ListItem key={ind}>
                                <Link href="src/layout/sections/works/tabMenu/TabMenu">
                                    {item}
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                </Link>
                            </ListItem>
                        )
                    })}
                </ListItems>
            </MobiledMenuPopup>
        </StyledMobileMenu>


    );
};


const StyledMobileMenu = styled.nav`


  @media ${theme.media.tablet} {
    display: none;
  }
`

const MobiledMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  //width: 100%;
  background-color: rgba(31, 31, 32, 0.90);

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
  //top: -100px;
  //right: -100px;
  border: 1px solid red;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.color.font};
    position: absolute;
    left: 40px;
    bottom: 50px;


    &::after {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(-10px);
    }

    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(-18px);
    }
  }


`

const ListItems = styled.ul`

`


const Link = styled.a`
  font-family: Josefin Sans, sans-serif;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.color.accent};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.color.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);

  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.color.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`

