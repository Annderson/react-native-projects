import React, { Component } from 'react'

import '../css/index-style.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from '../img/logo-h-vjobs.png'
import design from '../img/designer.png'
import testes from '../img/tester.png'
import developer from '../img/developer.png'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
            <ul className="nav nav-pills">
                <li>
                    <a href=""> <img src={logo} alt="logo" className="logo" /> </a>
                </li>
                <li className="style-lis">
                    <a href=""> Vagas </a>
                </li>
                <li className="style-lis">
                    <a href=""> Sobre </a>
                </li>
            </ul>
        </nav>

        <div className="container">

            <p>
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Nova Vaga
                </button>
            </p>

            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <form className="form-body">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label><br/>
                            <input id="nome" type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="nome">Descriçao</label><br/>
                            <textarea rows="4" cols="50" className="form-control">
                            </textarea>
                        </div>

                        <div className="row form-group">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-15">
                                <label htmlFor="nome">Habilidades Necessárias</label><br/>
                                <textarea rows="4" cols="50" className="form-control "></textarea>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="nome">Diferenciais</label><br/>
                                <textarea rows="4" cols="50" className="form-control"></textarea>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-15">
                                <label htmlFor="salarioBase">Salario base</label><br/>
                                <input id="salarioBase" type="text" className="form-control " />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="nome">Área</label><br/>
                                <select className="form-control">
                                    <option>Desenvolvimento</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" /> Vaga para PCD
                        </div>
                        <div className="form-group text-right">
                            <input type="submit" className="btn btn-success" value="Criar vaga" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xm-12">
                    <div className="bloco">
                        <img src={design} alt="design" className="img-responsive" />
                        <h3>Teste</h3>
                        <b>Descriçao:</b>
                        <p>Algumas coisa</p>
                        <b>Salario base:</b>
                        <p>R$: 10,00</p>
                        <p>
                            <button className="btn-warning">
                                <span className="fa fa-edit icons"></span>
                            </button>
                            <button className="btn-danger">
                                <span className="fa fa-trash icons"></span>
                            </button>
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xm-12">
                    <div className="bloco">
                        <img src={developer} alt="developer" className="img-responsive" />
                        <h3>Teste</h3>
                        <b>Descriçao:</b>
                        <p>Algumas coisa</p>
                        <b>Descriçao:</b>
                        <p>R$: 10,00</p>
                        <p>
                            <button className="btn-warning">
                                <span className="fa fa-edit icons"></span>
                            </button>
                            <button className="btn-danger">
                                <span className="fa fa-trash icons"></span>
                            </button>
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xm-12">
                    <div className="bloco">
                        <img src={testes} alt="testes" className="img-responsive" />
                        <h3>Teste</h3>
                        <b>Descriçao:</b>
                        <p>Algumas coisa</p>
                        <b>Descriçao:</b>
                        <p>R$: 10,00</p>
                        <p>
                            <button className="btn-warning">
                                <span className="fa fa-edit icons"></span>
                            </button>
                            <button className="btn-danger">
                                <span className="fa fa-trash icons"></span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
