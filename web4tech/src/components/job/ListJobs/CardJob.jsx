import React from 'react'

import design from '../../../img/designer.png'
//import testes from '../../../img/tester.png'
//import developer from '../../../img/developer.png'

const card = (props) => {

 

    return(
        
            <div className="card bloco">
                <img src={design} alt="design" className="img-responsive" />
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <b>Descriçao:</b>
                    <p>{props.description}</p>
                    <b>Salario base:</b>
                    <p>{props.salary}</p>
                    <p>
                        <button onClick={props.editHendlar} className="btn-warning" >
                            <i className="fa fa-edit icons"></i> Editar
                        </button>
                        <button onClick={props.removeHendla} className="btn-danger">
                            <i className="fa fa-trash icons"></i>  Excluir
                        </button>
                    </p>
                </div>
            </div>
    )
}

export default card;