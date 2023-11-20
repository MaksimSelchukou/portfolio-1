import React, {MouseEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    const goToTop = (e: MouseEvent<HTMLButtonElement>) => {
        window.scrollTo({
            top: e.currentTarget.scrollTop,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            }else{
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && <StyledGoTopBtn onClick={goToTop}>
                <Icon width={'15'} height={'16'} viewBox={"0,0,16,15"} iconID={'arrowGoTop'}/>
            </StyledGoTopBtn>}
        </>

    );
};

const StyledGoTopBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
`