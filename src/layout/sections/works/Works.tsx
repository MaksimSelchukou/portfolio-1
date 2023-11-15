import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from './work/Work';
import img1 from '../../../assets/images/proj-1.webp'
import img2 from '../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'


export type StatusType = 'all' | 'landing' | 'react' | 'spa'

const tabsItems: Array<{ title: string, status: StatusType }> = [
    {title: 'ALL', status: 'all'},
    {title: 'LANDING PAGE', status: 'landing'},
    {title: 'REACT', status: 'react'},
    {title: 'SPA', status: 'spa'},

]
const workData = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        title: 'social Network',
        srcImg: img1,
        type: 'react'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        title: 'Timer',
        srcImg: img2,
        type: 'spa'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        title: 'Timer',
        srcImg: img2,
        type: 'landing'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        title: 'Timer',
        srcImg: img2,
        type: 'landing'
    }
]

export const Works = () => {

    const [filter, setFilter] = useState<StatusType>('all')

    let filteredWorkData = workData
    if (filter === 'spa') {
        filteredWorkData = filteredWorkData.filter(d => d.type === 'spa')
    }
    if (filter === 'landing') {
        filteredWorkData = filteredWorkData.filter(d => d.type === 'landing')
    }
    if (filter === 'react') {
        filteredWorkData = filteredWorkData.filter(d => d.type === 'react')
    }


    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu filter={filter} setFilter={setFilter} tabsItems={tabsItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {/*{workData.map((w, i) => {*/}
                    {/*    return (<Work key={i} srcImg={w.srcImg} title={w.title} text={w.text}/>)*/}
                    {/*})}*/}
                    {filteredWorkData.map((w, i) => {
                        return (<Work key={i} srcImg={w.srcImg} title={w.title} text={w.text}/>)
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


