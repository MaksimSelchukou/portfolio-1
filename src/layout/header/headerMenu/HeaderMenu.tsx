import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = ({menuItems}: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ListItems>
                {menuItems.map((item, ind) => {
                    return (
                        <ListItem key={ind}>
                            <Link href="src/components/menu/Menu">
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
    );
};


const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
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
