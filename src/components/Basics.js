import React from 'react'
import styled from 'styled-components'
import { site } from './config/vars'
import media from './utils/media'
import Alert from './utils/Alert'
import Heading from './utils/Heading'
import Logo2 from './Logo2'

const Section = styled.section`
  text-transform: uppercase;
  position: relative;
  border-top: 0.075em solid currentColor;
  padding-top: 1em;

  ${media.m`
    border-top: none;
    padding-top: 0;
  `}
`

const List = styled.ul`
  list-style: none;
`

const LogoShell = styled.div`
  height: 1.85em;
  display: inline-block;
  background-color: black;
  position: absolute;
  top: 1.125em;
  right: 0;

  ${media.m`
    top: 0.125em;
  `}

  & svg {
    fill: white;
    height: 100%;
  }
`

const Basics = () => (
  <Section>
    <p>
      Aug 13→17 2018<br/>
      11AM→7PM<br/>
      <Alert>Closed ☹</Alert>
    </p>

    <p>
      <a href="https://goo.gl/maps/AZb2qXdGLaw" target="_blank" rel="noopener noreferrer">
        167 Canal St<br/>
        New York City<br/>
        NY 10013 USA
      </a>
    </p>

    <p>
      <a href={site.instagram_url} target="_blank" rel="noopener noreferrer">
        @tinypopup
      </a>
    </p>

    <Heading>Press</Heading>

    <List>
      <li>
        <a href="http://officemagazine.net/today-new-york" target="_blank" rel="noopener noreferrer">Office Magazine</a>
      </li>

      <li>
        <a href="https://coolhunting.com/design/verdes-pop-up-shop/" target="_blank" rel="noopener noreferrer">Cool Hunting</a>
      </li>
    </List>

    <LogoShell><Logo2/></LogoShell>
  </Section>
)

export default Basics
