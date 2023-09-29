import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from '../../../components/icon/Icon';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                <Skill iconID={'code'} skillTitle={'html5'}
                       skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
                           '                labore et dolore magna aliqua Ut enim'}
                />
                <Skill iconID={'code'} skillTitle={'html5'}
                       skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
                           '                labore et dolore magna aliqua Ut enim'}
                />
                <Skill iconID={'code'} skillTitle={'html5'}
                       skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
                           '                labore et dolore magna aliqua Ut enim'}
                />
                <Skill iconID={'code'} skillTitle={'html5'}
                       skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
                           '                labore et dolore magna aliqua Ut enim'}
                />
                <Skill iconID={'code'} skillTitle={'html5'}
                       skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
                           '                labore et dolore magna aliqua Ut enim'}
                />
                <Skill iconID={'code'} skillTitle={'html5'}
                       skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
                           '                labore et dolore magna aliqua Ut enim'}
                />
                {/*<Icon iconID={'code'}/>*/}
                {/*<SkillTitle>html5</SkillTitle>*/}
                {/*<SkillText>*/}
                {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut*/}
                {/*    labore et dolore magna aliqua Ut enim*/}
                {/*</SkillText>*/}

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: bisque;
`