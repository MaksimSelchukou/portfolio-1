import {S} from './Slider_Styles'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/Slider.css'

type SlideProps = {
    text: string
    name: string
}

const Slide = ({text, name}: SlideProps) => {
    return (
        <S.Slide data-value="1">
            <S.SlideText>
                {text}
            </S.SlideText>
            <S.SlideName>
                {name}
            </S.SlideName>
        </S.Slide>
    )
}


const items = [
    <Slide name={'@ivan ivanow'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
               '                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
               '                elit.'
           }/>,
    <Slide name={'@maksim selchukou'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus ea ex, ' +
               'excepturi ipsa necessitatibus obcaecati porro quia sapiente temporibus.'
           }/>,
    <Slide name={'@maksim selchukou'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus ea ex, ' +
               'excepturi ipsa necessitatibus obcaecati porro quia sapiente temporibus.'
           }/>,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            autoPlay
            autoPlayInterval={1000}
            infinite
            mouseTracking
            items={items}
        />
    </S.Slider>
);

