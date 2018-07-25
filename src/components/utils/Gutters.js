import React from 'react'
import styled from 'styled-components'
import media from './media'
import { spacing } from '../config/vars'

const Container = styled.div`
  padding-left:  ${spacing.gutter}em;
  padding-right: ${spacing.gutter}em;

  ${media.s`
    padding-left:  ${spacing.gutter * 2}em;
    padding-right: ${spacing.gutter * 2}em;
  `}
`

const Gutters = (props) => (
  <Container>
    {props.children}
  </Container>
)

export default Gutters
