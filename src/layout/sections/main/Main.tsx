import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';
import '../../../styles/TypeWritter.css'
import Tilt from 'react-parallax-tilt';
import '../../../styles/Main.css'


export const Main = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Maksim Selchukou</span></S.Name>
                        {/*<S.MainTitle>A Web Developer</S.MainTitle>*/}
                        <S.MainTitle>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50
                                }}
                            /></S.MainTitle>

                    </div>
                    {/*<S.PhotoWrapper>*/}
                    {/*    <S.Photo src={photo}/>*/}
                    {/*</S.PhotoWrapper>*/}

                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <S.PhotoWrapper>
                            {/*<div style={{ height: '300px', backgroundColor: 'darkgreen' }}>*/}
                            {/*    <h1>React Parallax Tilt 👀</h1>*/}
                            {/*</div>*/}
                            <S.Photo src={photo}/>
                        </S.PhotoWrapper>
                    </Tilt>


                </FlexWrapper>
            </Container>
        </S.Main>
    );
};




