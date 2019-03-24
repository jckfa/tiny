import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch } from "react-router-dom";
import styled from 'styled-components'
import Header from   './components/Header'
import Footer from   './components/Footer'
import Home from     './components/pages/Home'
import About from    './components/pages/About'
import NotFound from './components/pages/NotFound'
import Basics from   './components/Basics'
import Flexlist from './components/utils/Flexlist'
import media from    './components/utils/media'
import Gutters from  './components/utils/Gutters'
import Marquee from  './components/utils/Marquee'
import GlobalStyle from './components/config/global'

const Main = styled(Flexlist)`
  flex-direction: column;

  ${media.m`
    flex-direction: row;
    margin-bottom: 3em;
  `}
`

const Item = styled.li`
  width: 100%;
  margin-bottom: 1em;
  ${media.m`width: 50%;`}
`

const App = () => (
  <Router>
    <GlobalStyle/>
    <div>
      <Marquee string="Custom Souvenirs  "/>
      <Header/>
      <Main>
        <Item>
          <Gutters>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Gutters>
        </Item>
        <Item>
          <Gutters>
            <Basics/>
          </Gutters>
        </Item>
      </Main>
      <Footer/>
    </div>
  </Router>
)

export default App
