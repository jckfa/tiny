import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import './components/config/global'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

registerServiceWorker()
