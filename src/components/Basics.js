import React from 'react'
import styled from 'styled-components'
import { site } from './config/vars'

const Section = styled.section`
  text-transform: uppercase;
`

const Basics = () => (
  <Section>
    <p>
      Aug 13–17 2018<br/>
      11AM–7PM
    </p>

    <p>
      <a href="https://goo.gl/maps/AZb2qXdGLaw" target="_blank">
        167 Canal St<br/>
        New York City<br/>
        NY 10013 USA
      </a>
    </p>

    <p>
      <a href={site.instagram_url} target="_blank">
        @tinypopup
      </a>
    </p>
  </Section>
)

export default Basics
