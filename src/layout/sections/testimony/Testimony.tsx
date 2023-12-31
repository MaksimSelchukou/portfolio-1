import React from 'react';
import styled from "styled-components";
import {SectionTitle} from '../../../components/SectionTitle';
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper, S} from "../skills/Skills_styles";
import {Container} from "../../../components/Container";


export const Testimony = () => {
    return (
        <StyledTestimony id={'Testimony'}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconID={'quote'}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`
  
  position: relative;
  background-color: #afeaea;

  ${IconWrapper} {
    margin: 28px 0 72px;
  }
`