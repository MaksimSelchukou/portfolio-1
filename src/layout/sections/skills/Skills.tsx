import React from 'react';
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';


export const Skills = () => {
    const skillData = [
        {
            iconID: 'code',
            skillTitle: 'html5',
            skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                'sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim'
        },
        {
            iconID: 'css',
            skillTitle: 'css3',
            skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                'sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim'
        },
        {
            iconID: 'react',
            skillTitle: 'react',
            skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                'sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim'
        },
        {
            iconID: 'typeScript',
            skillTitle: 'typescript',
            skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                'sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim'
        },
        {
            iconID: 'styledComponents',
            skillTitle: 'styled components',
            skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                'sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim'
        },
        {
            iconID: 'figma',
            skillTitle: 'web design',
            skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                'sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim'
        },
    ]
    return (
        <section>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                    {skillData.map(sk =>
                        (<Skill key={sk.iconID}
                                iconID={sk.iconID}
                                skillText={sk.skillText}
                                skillTitle={sk.skillTitle}/>)
                    )}
                </FlexWrapper>
            </Container>
        </section>
    );
};
