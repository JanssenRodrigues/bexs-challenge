import styled from "styled-components"

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: row;
  width: 640px;
`; 

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
`; 

export const MenuItem = styled.li`
  width: 100px;
  height: 18px;
  background-color: #9c9c9c;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 35px;
  }
`; 