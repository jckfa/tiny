import React from 'react'
import styled from 'styled-components'
// import Heading from './utils/Heading'

const Img = styled.img`
  width: 100%;
  display: block;

  p + &, & + p {
    margin-top: 1em;
  }
`

const Home = () => (
  <main>
    <p>
      TINY is an experimental pop-up shop selling customized t-shirts and tote bags that consider how much more a souvenir can be.
    </p>

    <Img src="/assets/1.gif" />

    {/* <Heading>INVENTORY</Heading>

    <p>
      Shirts(150) $15 [S, M, L, XL]<br/>
      Totes(60) $15<br/>
      Misc(TBD) $TBD [1 Size]
    </p> */}
  </main>
)

export default Home
