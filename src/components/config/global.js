import { injectGlobal } from 'styled-components'
import { fonts, colors } from './vars'
import media from '../utils/media'

// eslint-disable-next-line
injectGlobal`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    font: 7vw/1 ${fonts.sans};
    ${media.s`font-size: 4vw;`}
    ${media.m`font-size: 3vw;`}
    padding: 0.5em;
  }

  a, button {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    color: inherit;
    background: none;
    font: inherit;
    outline: none;
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 0.25vw solid currentColor;
  }

  .active {
    color: ${colors.accent};
  }
`
