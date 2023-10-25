import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <SmallText>Hi There</SmallText>
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
  ${font({fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, Fmax: 50, Fmin: 34})}
  margin: 10px 0;
  z-index: 9999;


  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

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

    @media ${theme.media.mobile} {
      margin: 15px 0 22px;
    }

  }
`

const MainTitle = styled.h1`
  ${font({fontWeight: 400, Fmax: 27, Fmin: 20})}
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  margin-right: 20px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    //margin-top:45px;
    width: 310px;
    height: 380px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top:45px;

  &::before {
    content: '';

    //display: inline-block;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.color.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }

    // @media ${theme.media.mobile} {
    //   margin-top:45px
    // }
  }



`



