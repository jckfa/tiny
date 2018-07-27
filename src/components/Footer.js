import React from 'react'
import styled from 'styled-components'
import { spacing } from './config/vars'
import media from './utils/media'
import Gutters from './utils/Gutters'

const Foot = styled.footer`
  text-align: center;
  padding: ${spacing.gutter * 2}em 0;

  ${media.m`
    position: fixed;
    left:  50vw;
    bottom: 0;
  `}
`

const Footer = (props) => (
  <Foot>
    <Gutters>
      Footer
    </Gutters>
  </Foot>
)

export default Footer
