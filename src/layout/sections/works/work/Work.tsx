import React from 'react';
import styled from "styled-components";


type WorkPropsType = {
    srcImg: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <WorkImage src={props.srcImg}/>
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.text}</WorkText>
            <WorkLink href={'#'}>code</WorkLink>
            <WorkLink href={'#'}>demo</WorkLink>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;

  max-height: 443px;
  border: 1px solid black;
  background-color: #eab5b5;
`

const WorkImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const WorkTitle = styled.h3`
`

const WorkText = styled.p`
`

const WorkLink = styled.a`

`