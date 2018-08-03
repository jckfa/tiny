import React from 'react'
import styled from 'styled-components'
import { spacing } from './config/vars'
import media from './utils/media'
import Gutters from './utils/Gutters'
import { site } from './config/vars'
import Bird from './Bird'

const Foot = styled.footer`
  text-align: center;

  & a {
    padding: 1em 0;
    display: inline-block;
  }

  ${media.m`
    position: fixed;
    left:  50vw;
    bottom: 0;
  `}
`

const Birdhouse = styled.div`
  height: 0.75em;
  display: inline-block;
  padding: 0 1em;

  & svg {
    height: 100%;
  }
`

const Footer = () => (
  <Foot>
    <Gutters>
      <a href={"mailto:" + site.email + "?subject=Today in New York"} target="_blank">
        Contact
      </a>
      <a href="http://verdes.nyc" target="_blank"><Birdhouse><Bird/></Birdhouse>
      </a>
    </Gutters>
  </Foot>
)

export default Footer
