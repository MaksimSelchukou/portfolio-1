import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";


//Works

const Works = styled.section`

  position: relative;

  ${FlexWrapper} {
    gap: 30px;
  }
`

//Work

const Work = styled.div`
  flex-grow: 1;
  width: 330px;
  background-color: ${theme.color.secondaryBg};


  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -1%);
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    opacity: 0;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
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


export const S = {
    Works, Work, ImageWrapper, Description, WorkText, WorkTitle, WorkImage
}