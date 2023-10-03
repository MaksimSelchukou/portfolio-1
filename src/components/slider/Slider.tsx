import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

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
                <span> </span>
                <span> </span>
            </SlidePagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  max-width: 500px;
`

const Slide = styled.div`
  text-align: center;

`

const SlideText = styled.p`

`

const SlideName = styled.span`

`
const SlidePagination = styled.span`
  span {
    display: inline-block;
    background-color: deeppink;
    width: 10px;
    height: 10px;
    margin: 5px;
  }
`