import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const Skills = styled.section`
  position: relative;
`

const StyledSkill = styled.div`
  width: 330px;
  padding: 50px 20px 50px;
  flex-grow: 1;

  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }

`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`
const SkillText = styled.p`
  text-align: center;
  line-height: 1.4;
`

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.10);

    position: absolute;
    left: 50%;
    top: 50%;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: left top;

  }
`
export const S = {
    Skills, StyledSkill, SkillTitle, SkillText, IconWrapper
}