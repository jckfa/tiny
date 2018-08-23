import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
  display: block;

  p + &, & + p {
    margin-top: 1em;
  }
`

const Home = () => (
  <main>
    <Img src="/assets/1.gif" />

    <p>
      TINY is an experimental pop-up shop selling customized t-shirts and tote bags that consider how much more a souvenir can be.
    </p>
  </main>
)

export default Home
