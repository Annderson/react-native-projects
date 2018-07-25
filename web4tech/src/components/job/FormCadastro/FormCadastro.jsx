import React,{Component} from 'react'

import axios from 'axios'


class FormVagas extends Component {

    state = {
        newJob: {}
    }

    postDataHandler = (event) => {
        let novaVaga = {...this.state.newJob}
    
        axios.post('/jobs', novaVaga)
          .then((response) => {
            novaVaga.id = response.data;
            this.props.addToList = novaVaga;
          })
          .catch((error) => {
              console.error(error);
          }) 
        
        event.preventDefault();
    }
    
      changeValueHandler = (nomeAtributo, valor) => {
        let currentJob = this.state.newJob;
    
        currentJob[nomeAtributo] = valor;
    
        this.setState({ newJob: currentJob });
      }

    render(){
        return(
            
            <div>
                <p>
                    <button className="btn btn-primary" type="button" data-toggle="collapse" 
                            data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa  fa-send"></i> Nova Vaga
                    </button>
                </p>

                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <form className="form-body">
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label><br/>
                                <input id="nome" type="text" className="form-control" 
                                       onChange={(event) => this.changeValueHandler('name',event.target.value)}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Descriçao</label><br/>
                                <textarea rows="4" cols="50" className="form-control"
                                          onChange={(event) => this.changeValueHandler('description',event.target.value)}></textarea>
                            </div>

                            <div className="row form-group">
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-15">
                                    <label htmlFor="skills">Habilidades Necessárias</label><br/>
                                    <textarea rows="4" cols="50" className="form-control "
                                              onChange={(event) => this.changeValueHandler('skills',event.target.value)}></textarea>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <label htmlFor="differentials">Diferenciais</label><br/>
                                    <textarea rows="4" cols="50" className="form-control"
                                              onChange={(event) => this.changeValueHandler('differentials',event.target.value)}></textarea>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-15">
                                    <label htmlFor="salary">Salario base</label><br/>
                                    <input id="salary" type="text" className="form-control" 
                                           onChange={(event) => this.changeValueHandler('salary',event.target.value)}/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <label htmlFor="area">Área</label><br/>
                                    <select id="area" className="form-control" 
                                            onChange={(event) => this.changeValueHandler('area',event.target.value)}>
                                        <option value="0">Desenvolvimento</option>
                                        <option value="1">Design</option>
                                        <option value="2">Testes</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="checkbox"  /> Vaga para PCD
                            </div>
                            <div className="form-group text-right">
                                <button type="submit" className="btn btn-success"
                                        onClick={this.postDataHandler}>Criar vaga</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormVagas