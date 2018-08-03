import styled from 'styled-components'

const Heading = styled.div`
  text-transform: uppercase;
  margin-left: 1em;
  margin-top: 1em;

  & + p {
    padding-top: 1em;
  }
`

export default Heading
