import React, { Component } from 'react'

import Menu from '../template/Menu/Menu'
import ListJobs from '../components/job/ListJobs/ListJobs'
import FormCadastro from '../components/job/FormCadastro/FormCadastro'

import '../css/index-style.css'


class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
            <FormCadastro />
            <ListJobs />            
        </div>
      </div>
    )
  }
}

export default App;
