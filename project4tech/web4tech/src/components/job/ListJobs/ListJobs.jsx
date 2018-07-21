import React,{Component} from 'react'

import CardJob  from './CardJob'

class ListJobs extends Component {

    constructor(){
        super()
        
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        this.setState({ jobs: vagas })
    }

    removeJobHandler(v2) {
        window.confirm(`Deseja realmente excluir ${v2}`)
    } 

    editJobHendlar(v1){
        window.confirm(`Editar: ${v1}`)
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
            <div className="row">
                {vagasDisponiveis}
            </div>
        )
    }
}

const vagas = [
    {
        "id": "0512",
        "name": "Desenvolvedor Full Stack JR",
        "salary": 3500,
        "area": "Desenvolvimento",
        "description": "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.",
        "skills": [
            "- Superior em Ciência da Computação, Engenharia da Computação, Sistema de Informação ou áreas afins",
            "- Conhecimento em desenvolvimento backend Java",
            "- Conhecimento em desenvolvimento frontend (ex Angular)",
            "- Conhecimentos em banco de dados relacional (administração básica) e programação (PL/SQL)",
            "- Experiência com sistema de controle de versão Git + Gerrit",
            "- Conhecimento em redes (protocolo TCP/IP e VPN)",
            "- Conhecimento em metodologias ágeis (ex. Scrum)"
        ],
        "differentials": [
            "- Conhecimento em EXT JS",
            "- Redes de computadores e sistemas operacionais Linux e noções de configuração de firewall"
        ],
        "isPcd": true,
        "isActive": true
    },
    {
        "id": "0264",
        "name": "Desenvolvedor Full Stack PL",
        "salary": 7000,
        "area": "Desenvolvimento",
        "description": "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.",
        "skills": [
            "- Superior em Ciência da Computação, Engenharia da Computação, Sistema de Informação ou áreas afins",
            "- Conhecimento em desenvolvimento backend Java",
            "- Conhecimento em desenvolvimento frontend (ex Angular)",
            "- Conhecimentos em banco de dados relacional (administração básica) e programação (PL/SQL)",
            "- Experiência com sistema de controle de versão Git + Gerrit",
            "- Conhecimento em redes (protocolo TCP/IP e VPN)",
            "- Conhecimento em metodologias ágeis (ex. Scrum)",
            "- Inglês avançado"
        ],
        "differentials": [
            "- Conhecimento em EXT JS",
            "- Redes de computadores e sistemas operacionais Linux e noções de configuração de firewall"
        ],
        "isPcd": true,
        "isActive": true
    },
    {
        "id": "0654",
        "name": "Estagiário de Data Science",
        "salary": 1200,
        "area": "Desenvolvimento",
        "description": "Suas responsabilidades serão voltadas para o desenvolvimento de modelos de previsão, reconhecimento de padrão e análise de dados para tomada de decisão. O estagiário atuará com técnicas de Machine Learning, Big Data, Data Science e Data Analytics.",
        "skills": [
            "- Cursando ensino superior em Ciências da Computação, Engenharia da Computação e áreas afins",
            "- Desenvolvimento com programação Python, Estrutura de Dados e Lógica de Programação",
            "- Inglês intermediário"
        ],
        "differentials": [
            "- Estatística",
            "- Processamento de texto",
            "- Biliotecas Matplotlib, Pandas, Numpy, Tensorflow e Keras"
        ],
        "isPcd": true,
        "isActive": true
    }
]

export default ListJobs