import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

type SectionTitlePropsType = {}
export const SectionTitle = styled.h2<SectionTitlePropsType>`
  ${font({fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, Fmax: 36, Fmin: 30,letterSpacing:'5px'})}
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
    transform: translateX(-50%);
    bottom: -30px;

    @media ${theme.media.mobile} {
      bottom: -24px;
    }

  }
`