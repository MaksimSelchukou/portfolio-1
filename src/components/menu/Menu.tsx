import React from 'react';
import styled from "styled-components";


export const Menu = ({menuItems}: { menuItems: Array<string> }) => {
// export const Menu = ({...menuItems}: Array<string>) => {
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
                {/*<li>*/}
                {/*    <a href="src/components/menu/Menu">Home</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="src/components/menu/Menu">Skills</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="src/components/menu/Menu">Works</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="src/components/menu/Menu">Testimony</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="src/components/menu/Menu">Contact</a>*/}
                {/*</li>*/}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`
