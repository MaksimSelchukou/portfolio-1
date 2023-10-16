import styled from "styled-components";
import {theme} from "../styles/Theme";

type SectionTitlePropsType = {}
export const SectionTitle = styled.h2<SectionTitlePropsType>`
  font-family: Josefin Sans, sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin-bottom: 90px;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.color.accent};

    position: absolute;
    left: 50%;
    transform: translateX(-50%) ;
    bottom: -30px;


  }
`