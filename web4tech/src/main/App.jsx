import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';


import Menu from '../template/Menu/Menu'
import Lista from '../components/job/ListJobs/ListJobs';
import Main from '../components/navigation/Main/Main';
import About from '../components/about/About';
import '../css/index-style.css'
import Login from '../components/login/Login';
import axios from 'axios'


class App extends Component {

  state = {
    loggedUser: JSON.parse(window.localStorage.getItem('user')) || null
  }

  loginHandler = (emailVal, passVal) => {
    axios.post('/login', {email: emailVal, password: passVal})
         .then(response => {
           window.localStorage.setItem('user', JSON.stringify(response.data.user))
           window.localStorage.setItem('token', response.data.token)
           this.setState({ loggedUser: response.data.user})
         })
         .catch(error => console.log(error))
  }

  getLoggedUser(){
    return this.state.loggedUser
  }

  loggoutHandle = () => {
    window.localStorage.clear()
    this.setState({ loggedUser: null })
  }

  render() {
    if(this.getLoggedUser()){
      return (
        <div>
            <Menu logout={this.loggoutHandle}
                  name={this.state.loggedUser.name}/>  
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

    return(<Login login={this.loginHandler}/>)
    
  }
}

export default App;

