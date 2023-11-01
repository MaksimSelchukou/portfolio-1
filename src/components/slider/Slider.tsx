import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <SlideText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </SlideText>
                    <SlideName>
                        @ivan ivanow
                    </SlideName>
                </Slide>
            </FlexWrapper>
            <SlidePagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </SlidePagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
`

const Slide = styled.div`
  text-align: center;

`

const SlideText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  
`

const SlideName = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`
const SlidePagination = styled.span`
  span {
    display: inline-block;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.50);
    width: 7px;
    height: 7px;
    margin: 5px;
    &.active {
      width: 20px;
     background-color: ${theme.color.accent};
    }
  }
`