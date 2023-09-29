import React from 'react';
import styled from "styled-components";
import {Icon} from '../../../../components/icon/Icon';


type SkillPropsType = {
    iconID: string
    skillTitle: string
    skillText: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconID={props.iconID}/>
            <SkillTitle>{props.skillTitle}</SkillTitle>
            <SkillText>{props.skillText}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
  background-color: azure;
`

const SkillTitle = styled.h3`
 
`
const SkillText = styled.p`
`
