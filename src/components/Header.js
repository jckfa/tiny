import React from 'react'
import { NavLink as A } from 'react-router-dom';
import styled from 'styled-components'
import media from './utils/media'
// eslint-disable-next-line
import time from './time'
import { site, spacing } from './config/vars'

const Shell = styled.header`
  ${'' /* background-color: orange; */}
  display: flex;
  flex-direction: column;

  ${media.m`
    margin-bottom: 3em;
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

const Time = styled.time`
  font-variant-numeric: tabular-nums slashed-zero;
`

const Header = (props) => (
  <Shell id="top">
    <Section>
      <A exact to="/">TINY</A>
      <A to="/about">About</A>
      {/* <A to="/wall">Wall</A> */}
      <a href={site.forms} target="_blank">Forms</a>
    </Section>
    <Section>
      <Time></Time>
    </Section>
  </Shell>
)

export default Header
