import React from 'react';
import styled from "styled-components";
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
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
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`