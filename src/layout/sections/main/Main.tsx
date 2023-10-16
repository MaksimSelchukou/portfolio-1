import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        {/*<h2>I am Maksim Selchukou</h2>*/}
                        <Name>I am <span>Maksim Selchukou</span></Name>
                        <MainTitle>A Web Developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;

`
const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const Name = styled.h2`
  font-family: Josefin Sans, sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2.5px;
  margin: 10px 0;
  z-index: 9999;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      display: inline-block;
      height: 20px;
      width: 100%;
      background-color: ${theme.color.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }


  }
`

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    position: absolute;
    content: '';
    display: inline-block;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.color.accent};
    z-index: -1;
    left: 24px;
    top: -24px;
  }

`



