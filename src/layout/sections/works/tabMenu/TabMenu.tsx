import React from 'react';
import styled from "styled-components";
import {Link} from '../../../../components/Link';
import {StatusType} from "../Works";

type TabMenuType = {
    filter: StatusType
    setFilter: (filter: StatusType) => void
    tabsItems: Array<{ title: string, status: StatusType }>
}

//export const TabMenu = ({tabsItem,filter:StatusType}: Array<{title:string,status: StatusType}> }) => {
export const TabMenu: React.FC<TabMenuType> = ({...props}: TabMenuType) => {
    return (
        <StyledTabMenu>
            <ListItems>
                {props.tabsItems.map((item, ind) => {
                    return (
                        <ListItem key={ind}>
                            <Link active={props.filter === item.status} as={'button'}
                                  onClick={() => props.setFilter(item.status)}>{item.title}
                            </Link>
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