import React from 'react'

const NoFound = ({ location }) => (
  <main>
    <p>
      404. No match for {location.pathname}
    </p>
  </main>
)

export default NoFound
