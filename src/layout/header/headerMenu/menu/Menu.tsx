import React, {useState} from 'react';
import {S} from '../../Header_Styles'
import {smoothScroll} from "../../../../hooks/smoothScroll";


export const Menu: React.FC<{ menuItems: Array<string> }> = ({menuItems}) => {
    const [activeLink, setActiveLink] = useState('')
    const handleHook = (item: any) => {
        smoothScroll(item)
        setActiveLink(item)
    }
    return (
        <ul>
            {menuItems.map((item, ind) => {
                return (
                    <S.ListItem key={ind}>
                        <S.Link className={activeLink === item ? 'active' : ''} onClick={() => handleHook(item)}>
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
