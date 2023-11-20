import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'

export const Footer = () => {

    const SocialItemsData = [
        {iconID: 'instagram'},
        {iconID: 'telegram'},
        {iconID: 'vk'},
        {iconID: 'linkedin'},
    ]

    return (
        <S.Footer>
            <FlexWrapper align={'center'} direction={'column'}>
                <S.Name>Maxim</S.Name>
                <S.SocialList>
                    {SocialItemsData.map((i, ind) => {
                        return (
                            <li key={ind}>
                                <S.SocialIconLink>
                                    <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconID={i.iconID}/>
                                </S.SocialIconLink>
                            </li>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};


