import React,{Component} from 'react'


class FormVagas extends Component {
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
            </div>
        )
    }
}

export default FormVagas