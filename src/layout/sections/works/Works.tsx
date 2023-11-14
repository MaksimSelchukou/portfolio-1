import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from './work/Work';
import img1 from '../../../assets/images/proj-1.webp'
import img2 from '../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'


export const Works = () => {

    const worksItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA']
    const workData = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            title: 'social Network',
            srcImg: img1
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
            title: 'Timer',
            srcImg: img2
        }
    ]

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {workData.map((w,i)=>{
                        return (<Work key={i} srcImg={w.srcImg} title={w.title} text={w.text}/>)
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


