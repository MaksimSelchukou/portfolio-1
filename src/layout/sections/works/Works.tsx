import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from './work/Work';
import img1 from '../../../assets/images/proj-1.webp'
import img2 from '../../../assets/images/proj-2.webp'


export const Works = () => {

    const worksItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA']


    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    title={'Social Network'}
                    srcImg={img1}
                />
                <Work
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}
                    title={'Timer'}
                    srcImg={img2}
                />
            </FlexWrapper>

        </StyledWorks>
    );
};


const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #c2c2f6;
  //text-align: center;
`