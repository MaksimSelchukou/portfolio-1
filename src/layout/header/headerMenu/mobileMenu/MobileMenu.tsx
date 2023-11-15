import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../../Header_Styles"


export const MobileMenu = ({menuItems}: { menuItems: Array<string> }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup onClick={() => setIsOpen(false)} isOpen={isOpen}>
                <Menu menuItems={menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




