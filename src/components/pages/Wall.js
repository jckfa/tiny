import React from 'react'
import styled from 'styled-components'
import Heading from './utils/Heading'
import data from './config/data.js'

const Part = styled.span`
  display: block;
`

const Wall = () => (
  <main>
    <p>Each customer is given a form to answer the prompt <i>Today in New York</i>. Once completed each form is then physically and digitally posted—on our store wall as well as this webpage.</p>

    <Heading>EXAMPLE</Heading>

    {data.map((person, index) =>
      <p>
        <Part>{person.name}</Part>
        <Part><i>Today in New York</i> {person.msg}</Part>
        <Part>{person.num}/210</Part>
        <Part>{person.time}</Part>
        <Part>{person.weather}</Part>
      </p>
    )}
  </main>
)

export default Wall
