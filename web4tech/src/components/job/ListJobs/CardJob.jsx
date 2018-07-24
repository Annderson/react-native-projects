import React from 'react'

import design from '../../../img/designer.png'
//import testes from '../../../img/tester.png'
//import developer from '../../../img/developer.png'

const card = (props) => {

 

    return(
        
            <div className="bloco">
                <img src={design} alt="design" className="img-responsive" />
                <h3>{props.nome}</h3>
                <b>Descriçao:</b>
                <p>{props.description}</p>
                <b>Salario base:</b>
                <p>{props.salary}</p>
                <p>
                    <button onClick={()=>props.editHendlar('quatro')} className="btn-warning" >
                        <i className="fa fa-edit icons"></i> Editar
                    </button>
                    <button onClick={() => props.removeHendlar('tres')} className="btn-danger">
                        <i className="fa fa-trash icons"></i>  Excluir
                    </button>
                </p>
            </div>
    )
}

export default card;