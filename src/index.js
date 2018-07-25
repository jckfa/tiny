import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
import './components/config/global'

render(
  <App />,
  document.querySelector('#root')
)
