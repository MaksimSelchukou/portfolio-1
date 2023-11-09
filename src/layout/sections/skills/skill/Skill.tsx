import React from 'react';
import styled from "styled-components";
import {Icon} from '../../../../components/icon/Icon';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
    iconID: string
    skillTitle: string
    skillText: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconID={props.iconID}/>
                </IconWrapper>
                <SkillTitle>{props.skillTitle}</SkillTitle>
                <SkillText>{props.skillText}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 330px;
  padding: 50px 20px 50px;
  flex-grow: 1;
  
  @media ${theme.media.mobile}{
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
