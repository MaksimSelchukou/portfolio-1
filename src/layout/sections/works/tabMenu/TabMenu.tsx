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

`
const ListItems = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 352px;
  width: 100%;
  margin: 0 auto 40px;
`
const ListItem = styled.li`
`