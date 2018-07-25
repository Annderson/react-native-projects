import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';


import Menu from '../template/Menu/Menu'
import Lista from '../components/job/ListJobs/ListJobs';
import Main from '../components/navigation/Main/Main';
import About from '../components/about/About';
import '../css/index-style.css'


class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        
        <Main>
          <Switch>
            <Route exact path='/' component={ Lista }></Route>
            <Route path='/vagas' component={ Lista }></Route>
            <Route path='/sobre' component={ About }></Route>
          </Switch>
        </Main>
      </div>
    )
  }
}

export default App;
