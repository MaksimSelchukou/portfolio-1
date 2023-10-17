import React from 'react';
import styled from "styled-components";
import {SectionTitle} from '../../../components/SectionTitle';
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconID={'quote'}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`
  min-height: 100vh;
  background-color: #afeaea;
  
  ${IconWrapper}{
    margin: 33px 0 72px;
  }
`

// const IconWrapper = styled.div`
//   position: relative;
//
//   &::before {
//     content: '';
//     display: block;
//     width: 80px;
//     height: 80px;
//     background-color: rgba(255, 255, 255, 0.10);
//
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: rotate(45deg) translate(-50%, -50%);
//     transform-origin: left top;
// `