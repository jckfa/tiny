import React from 'react'
import styled from 'styled-components'
import { site } from './config/vars'
import media from './utils/media'
import Alert from './utils/Alert'
import Logo from './Logo'

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
      Aug 13–17 2018<br/>
      11AM–7PM<br/>
      <Alert>Closed ☹</Alert>
    </p>

    <p>
      <a href="https://goo.gl/maps/AZb2qXdGLaw" target="_blank">
        167 Canal St<br/>
        New York City<br/>
        NY 10013 USA
      </a>
    </p>

    <p>
      <a href={site.instagram_url} target="_blank">
        @tinypopup
      </a>
    </p>

    <LogoShell><Logo/></LogoShell>
  </Section>
)

export default Basics
