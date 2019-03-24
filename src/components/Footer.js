import React from 'react'
import styled from 'styled-components'
import media from './utils/media'
import { site } from './config/vars'
import Bird from './Bird'

const Foot = styled.footer`
  text-align: center;
  ${'' /* background-color: green; */}
  display: flex;
  width: 100%;

  & a {
    width: 100%;
    padding: 0.75em;
    display: inline-block;
    ${'' /* background-color: red; */}
  }

  ${media.m`
    width: 50%;
    justify-content: space-between;
    position: fixed;
    left: 50vw;
    bottom: 0;

    & a {
      width: auto;
    }
  `}
`

const Birdhouse = styled.div`
  height: 0.75em;
  display: inline-block;

  & svg {
    height: 100%;
  }
`

const Footer = () => (
  <Foot>
    <a href={"mailto:" + site.email + "?subject=Today in New York"} target="_blank" rel="noopener noreferrer">
      Contact
    </a>

    <a href="http://verdes.nyc" target="_blank" rel="noopener noreferrer" id="bird"><Birdhouse><Bird/></Birdhouse>
    </a>
  </Foot>
)

export default Footer
