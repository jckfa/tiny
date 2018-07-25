import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors, fonts } from '../config/vars'
import media from './media'

const Bar = styled.div`
  height: 7vh;
  line-height: 7.2vh;
  font-size: 4.5vh;
  color: ${colors.light};
  background-color: ${colors.dark};
  width: 100%;
  overflow: hidden;

  ${media.m`
    height: 5.5vh;
    line-height: 5.6vh;
  `}
`

const Container = styled.div`
  width: 1000vw;
`

const marqueeLeft = keyframes`
  from {transform: translateX(0)}
  to   {transform: translateX(-50%)}
`

const Text = styled.div`
  font-family: ${fonts.sans};
  text-transform: none;
  display: inline-block;
  animation: ${marqueeLeft} 40s linear infinite;

  & span {
    padding-right: 6vw;
    display: inline-block;
  }
`

const Marquee = (props) => (
  <Bar>
    <Container>
      <Text>
        {props.children}
        {props.children}
        {props.children}
        {props.children}
        {props.children}
        {props.children}
        {props.children}
        {props.children}
      </Text>
    </Container>
  </Bar>
)

export default Marquee
