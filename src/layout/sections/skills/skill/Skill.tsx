import React from 'react';
import {Icon} from '../../../../components/icon/Icon';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Skills_styles'

type SkillPropsType = {
    iconID: string
    skillTitle: string
    skillText: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconID={props.iconID}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.skillTitle}</S.SkillTitle>
                <S.SkillText>{props.skillText}</S.SkillText>
            </FlexWrapper>
        </S.StyledSkill>
    );
};

