import React from 'react';
import styled from "styled-components";


export const Menu = ({menuItems}: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item, ind) => {
                    return (
                        <li key={ind}>
                            <a href="src/components/menu/Menu">{item}</a>
                        </li>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`
