import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;

  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.color.accent};
    width: 53%;
    height: 10px;

    transition: ${theme.animations.transition};
    
    position: absolute;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`