import React from 'react'
import Heading from './utils/Heading'

const NoMatch = ({ location }) => (
  <main>
    <p>
      404. No match for {location.pathname}
    </p>
  </main>
)

export default NoMatch
