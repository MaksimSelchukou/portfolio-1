import React from 'react';
import {S} from '../../Header_Styles'


export const Menu: React.FC<{ menuItems: Array<string> }> = ({menuItems}) => {
    return (
        <ul>
            {menuItems.map((item, ind) => {
                return (
                    <S.ListItem key={ind}>
                        <S.Link href="src/layout/sections/works/tabMenu/TabMenu">
                            {item}
                            <S.Mask>
                                <span>{item}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item}</span>
                            </S.Mask>
                        </S.Link>
                    </S.ListItem>
                )
            })}
        </ul>
    );
};
