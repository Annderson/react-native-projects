import React,{Component} from 'react'
import axios from 'axios'

import CardJob  from './CardJob'

import FormCadastro from '../FormCadastro/FormCadastro'


class ListJobs extends Component {

        state = {
            jobs: []
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

    jobRemoveHandler = (id, nome) => {
        if (window.confirm(`Deseja realmente excluir essa vaga "${nome}"?`)) {
          axios.delete(`/jobs/${id}`)
               .then(res => {
                 let vagasAtualizadas = this.state.jobs;
                 const indiceRemovido = 
                  vagasAtualizadas.findIndex(item => item.id === id);
                  
                 vagasAtualizadas.splice(indiceRemovido, 1);
                 this.setState({ jobs: vagasAtualizadas })
               })
               .catch(error => {
                 console.error(error);
               })
        }
      }

    jobEditHandler = (id) => {
        console.log("Editar id " + id);
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
                            name={job.name}
                            description={job.description}
                            salary={job.salary}
                            editHendlar={() => this.jobEditHandler(job.id)}
                            removeHendla={() => this.jobRemoveHandler(job.id, job.name)}
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