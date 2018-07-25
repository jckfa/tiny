import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Flexlist from './utils/Flexlist'

const NavItem = styled.li`
  & + & {
    margin-left: 0.5em;
  }
`

const Header = (props) => (
  <header id="top">
    <nav>
      <Flexlist>
        <NavItem>
          <NavLink exact to="/">Index</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
      </Flexlist>
    </nav>
  </header>
)

export default Header
