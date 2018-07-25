import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

const App = () => (
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Footer/>
    </div>
  </Router>
)

export default App
