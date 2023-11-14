import React from 'react';
import {S} from "../../Header_Styles"
import {Menu} from "../menu/Menu";


export const DesktopMenu = ({menuItems}: { menuItems: Array<string> }) => {
    return (
        <>
            <S.HeaderMenu>
                <Menu menuItems={menuItems}/>
            </S.HeaderMenu>
            <S.BurgerMenu>
                <S.ItemBurgerMenu></S.ItemBurgerMenu>
                <S.ItemBurgerMenu></S.ItemBurgerMenu>
                <S.ItemBurgerMenu></S.ItemBurgerMenu>
            </S.BurgerMenu>
        </>
    );
};







