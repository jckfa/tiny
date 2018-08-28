import React from 'react'
import Heading from '../utils/Heading'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
`

const About = () => (
  <main>
    <p>
      We’re interested in the idea of the “souvenir”—who it’s for, how it’s represented, and what it’s capable of. We think souvenirs can be magical, but generally have found those in NYC to be passive objects; nostalgic of times / places / people / events / experiences that tourists can’t possibly have a personal connection to as these no longer exist. We’re interested in an alternative form; one that’s more specific and personal and participatory. We want to offer tourists a commemorative totem of not just New York but their relationship to it.
    </p>

    <p>
      <i>Today in New York</i> is a prompt; we print each customer’s answer on his/her choice of a t-shirt or tote bag. On the back of each item is a receipt of sale with the following information: customer ID, product number, time of purchase, and weather.
    </p>

    <Heading>Press</Heading>

    <List>
      <li>
        <a href="https://coolhunting.com/design/verdes-pop-up-shop/" target="_blank" rel="noopener noreferrer">Cool Hunting</a>
      </li>
    </List>
  </main>
)

export default About
