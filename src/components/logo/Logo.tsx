import React, {MouseEvent} from 'react';
import {Icon} from '../icon/Icon';

export const Logo = () => {
    const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
        window.scrollTo({
            top: e.currentTarget.offsetTop,
            behavior: 'smooth',
        });
    }
    return (
        <a onClick={scrollToTop} >
            <Icon iconID={'code'}/>
        </a>
    );
};
