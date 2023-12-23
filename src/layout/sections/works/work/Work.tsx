import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from '../Works_Styles'


type WorkPropsType = {
    srcImg: string
    title: string
    text: string
    detectEl: number
}

export const Work = (props: WorkPropsType) => {
    console.log('detectEl',props.detectEl)
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.WorkImage src={props.srcImg}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.WorkTitle>{props.title}</S.WorkTitle>
                <S.WorkText>{props.detectEl > 0 ? props.text : 'Проекты отсутствуют!'}</S.WorkText>
                <Link active href={'#'}>code</Link>
                <Link href={'#'}>demo</Link>
            </S.Description>
        </S.Work>
    );
};

