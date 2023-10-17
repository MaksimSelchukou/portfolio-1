import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";


type WorkPropsType = {
    srcImg: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <WorkImage src={props.srcImg}/>
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <WorkTitle>{props.title}</WorkTitle>
                <WorkText>{props.text}</WorkText>
                <Link href={'#'}>code</Link>
                <Link href={'#'}>demo</Link>
            </Description>

        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;
  max-height: 443px;
  //border: 1px solid black;
  background-color: ${theme.color.secondaryBg};

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }

  &:hover {

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 260px;
      position: absolute;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      display: inline-block;

      &::before {
        width: 100%;
        height: 100%;
      }
    }

  }

`

const WorkImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const WorkTitle = styled.h3`
  letter-spacing: 1px;
  text-transform: capitalize;

`

const WorkText = styled.p`
  margin-top: 14px;
  margin-bottom: 10px;
`

const Description = styled.div`
  padding: 25px 20px;
`