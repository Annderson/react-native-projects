import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-inverse">
            <ul class="nav nav-pills">
                <li>
                    <a href="#"> <img src="img/logo-h-vjobs.png" class="logo" /> </a>
                </li>
                <li class="style-lis">
                    <a href="#"> Vagas </a>
                </li>
                <li class="style-lis">
                    <a href="#"> Sobre </a>
                </li>
            </ul>
        </nav>

        <div class="container">

            <p>
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Nova Vaga
                </button>
            </p>

            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    <form class="form-body">
                        <div class="form-group">
                            <label for="nome">Nome</label><br/>
                            <input id="nome" type="text" class="form-control" />
                        </div>

                        <div class="form-group">
                            <label for="nome">Descriçao</label><br/>
                            <textarea rows="4" cols="50" class="form-control">
                            </textarea>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-6 col-md-6 col-sm-12 mb-15">
                                <label for="nome">Habilidades Necessárias</label><br/>
                                <textarea rows="4" cols="50" class="form-control "></textarea>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <label for="nome">Diferenciais</label><br/>
                                <textarea rows="4" cols="50" class="form-control"></textarea>
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-6 col-md-6 col-sm-12 mb-15">
                                <label for="salarioBase">Salario base</label><br/>
                                <input id="salarioBase" type="text" class="form-control " />
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <label for="nome">Área</label><br/>
                                <select class="form-control">
                                    <option>Desenvolvimento</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" /> Vaga para PCD
                        </div>
                        <div class="form-group text-right">
                            <input type="submit" class="btn btn-success" value="Criar vaga" />
                        </div>
                    </form>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-xm-12">
                    <div class="bloco">
                        <img src="img/designer.png" class="img-responsive" />
                        <h3>Teste</h3>
                        <b>Descriçao:</b>
                        <p>Algumas coisa</p>
                        <b>Salario base:</b>
                        <p>R$: 10,00</p>
                        <p>
                            <button class="btn-warning">
                                <span class="fa fa-edit icons"></span>
                            </button>
                            <button class="btn-danger">
                                <span class="fa fa-trash icons"></span>
                            </button>
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-xm-12">
                    <div class="bloco">
                        <img src="img/developer.png" class="img-responsive" />
                        <h3>Teste</h3>
                        <b>Descriçao:</b>
                        <p>Algumas coisa</p>
                        <b>Descriçao:</b>
                        <p>R$: 10,00</p>
                        <p>
                            <button class="btn-warning">
                                <span class="fa fa-edit icons"></span>
                            </button>
                            <button class="btn-danger">
                                <span class="fa fa-trash icons"></span>
                            </button>
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-xm-12">
                    <div class="bloco">
                        <img src="img/tester.png" class="img-responsive" />
                        <h3>Teste</h3>
                        <b>Descriçao:</b>
                        <p>Algumas coisa</p>
                        <b>Descriçao:</b>
                        <p>R$: 10,00</p>
                        <p>
                            <button class="btn-warning">
                                <span class="fa fa-edit icons"></span>
                            </button>
                            <button class="btn-danger">
                                <span class="fa fa-trash icons"></span>
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
