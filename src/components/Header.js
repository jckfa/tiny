import React from 'react'
import { NavLink as A } from 'react-router-dom';
import styled from 'styled-components'
import media from './utils/media'
import time from './time'
import { spacing } from './config/vars'

const Shell = styled.header`
  ${'' /* background-color: orange; */}
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;

  ${media.m`
    flex-direction: row;
  `}
`

const Section = styled.section`
  width: 100%;
  display: flex;

  & a, & time {
    text-align: center;
    width: 100%;
    padding: ${spacing.target_area}em;

    ${media.m`
      width: auto;
    `}
  }
`

const Header = (props) => (
  <Shell id="top">
    <Section>
      <A exact to="/">TINY</A>
      <A to="/about">About</A>
      {/* <A to="/wall">Wall</A> */}
    </Section>
    <Section>
      <time></time>
    </Section>
  </Shell>
)

export default Header
