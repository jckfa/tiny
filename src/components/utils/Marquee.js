import React from 'react'
import styled, { keyframes } from 'styled-components'

const Bar = styled.div`
  color: white;
  background-color: black;
  width: 100%;
  overflow: hidden;
`

const Container = styled.div`
  width: 1000vw;
`

const marqueeLeft = keyframes`
  from {transform: translateX(0)}
  to   {transform: translateX(-50%)}
`

const Text = styled.div`
  ${'' /* line-height: 1.4; */}
  padding: 0.2em 0 0.1em;
  text-transform: uppercase;
  font-feature-settings: "case" 1;
  display: inline-block;
  animation: ${marqueeLeft} 40s linear infinite;
`

const Marquee = (props) => (
  <Bar>
    <Container>
      <Text>
        {props.string.repeat(10)}
      </Text>
    </Container>
  </Bar>
)

export default Marquee
