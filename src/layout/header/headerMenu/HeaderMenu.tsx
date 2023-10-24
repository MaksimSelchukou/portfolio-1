import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = ({menuItems}: { menuItems: Array<string> }) => {
    return (
        <>
            <StyledHeaderMenu>
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

