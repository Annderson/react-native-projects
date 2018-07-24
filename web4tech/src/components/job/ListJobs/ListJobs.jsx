import React,{Component} from 'react'
import axios from 'axios'

import CardJob  from './CardJob'

import FormCadastro from '../FormCadastro/FormCadastro'


class ListJobs extends Component {

    constructor(){
        super()
        
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        this.refresh()
    }

    refresh(){
        axios.get('/jobs')
             .then(res =>{
                 this.setState({ jobs: res.data })
             }).catch(error => {
                 console.log(error)
             })
    }

    removeJobHandler(v2) {
        if (window.confirm(`Deseja realmente excluir ${v2}`)){

        }
    } 

    editJobHendlar(v1){
        window.confirm(`Editar: ${v1}`)
    }

    addItemToList(nova){
        let newJob = {...this.state.jobs}
        newJob.push(newJob)
        this.setState({ jobs: newJob })
    }

    render(){

        let vagasDisponiveis = this.state.jobs.map(
            job => {
                return(
                    <div key={job.id} className="col-lg-4 col-md-6 col-sm-6 col-xm-12">
                        <CardJob
                            nome={job.name}
                            description={job.description}
                            salary={job.salary}
                            editHendlar={this.editJobHendlar}
                            removeHendlar={this.removeJobHandler}
                            />
                    </div>
                )                
            }
        ) 
            
        

        return(
            <div>
                <FormCadastro itemNewJob={this.addItemToList} />
                <div className="row">
                    {vagasDisponiveis}
                </div>
            </div>
        )
    }
}


export default ListJobs