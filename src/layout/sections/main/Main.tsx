import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Maksim Selchukou</h2>
                    <MainTitle>A Web Developer</MainTitle>
                </div>
                <Photo src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #bce8d8;
  
`
const MainTitle = styled.h1`
`

const Photo = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
`

