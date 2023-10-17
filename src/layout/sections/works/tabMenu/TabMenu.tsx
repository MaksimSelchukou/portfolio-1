import React from 'react';
import styled from "styled-components";
import {Link} from '../../../../components/Link';


export const TabMenu = ({menuItems}: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ListItems>
                {menuItems.map((item, ind) => {
                    return (
                        <ListItem key={ind}>
                            <Link href="src/layout/sections/works/tabMenu/TabMenu.tsx">{item}</Link>
                        </ListItem>
                    )
                })}
            </ListItems>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
  margin-bottom: 40px;

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`
const ListItems = styled.ul`

`
const ListItem = styled.li`
  //position: relative;
  //z-index: 0;

`

// const Link = styled.a`
//   font-size: 14px;
//   font-weight: 400;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   padding: 10px;
//
//
//   &::before {
//     content: '';
//     display: inline-block;
//
//     background-color: ${theme.color.accent};
//
//
//     position: absolute;
//     bottom: -6px;
//     left: 0;
//     right: 0;
//     z-index: -1;
//   }
//
//   &:hover {
//     &::before {
//       height: 10px;
//     }
//   }
//
// }
// `