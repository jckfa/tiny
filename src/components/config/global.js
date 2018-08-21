import { injectGlobal } from 'styled-components'
import { colors, fonts } from './vars'
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
    font: 7vw/1.1 ${fonts.sans};
    ${media.s`font-size: 4vw;`}
    ${media.m`font-size: 3vw;`}
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

    &[href^="http"]:not(#bird)::after {
      content: "↗";
      color: ${colors.meta};
    }
  }

  .active {
    border-bottom: 0.075em solid currentColor;
  }

  p {
    word-break: break-all;
  }

  p + p {
    margin-top: 1em;
  }
`
