import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Wall from './components/Wall'
import Basics from './components/Basics'
import Footer from './components/Footer'
import styled from 'styled-components'
import Flexlist from './components/utils/Flexlist'
import media from './components/utils/media'
import Gutters from './components/utils/Gutters'

const Main = styled(Flexlist)`
  flex-direction: column;

  ${media.m`
    flex-direction: row;
  `}
`

const Item = styled.li`
  width: 100%;
  margin-bottom: 1em;
  ${media.m`width: 50%;`}
`

const App = () => (
  <Router>
    <div>
      <Header/>
      <Main>
        <Item>
          <Gutters>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/wall" component={Wall} /> */}
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
