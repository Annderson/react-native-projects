'use strict';

const Job = require('../../model/job.js');

module.exports = app => {

    const jobsCollection = app.config.firebaseConfig.collection('jobs');

    app.get('/jobs', async(req, res) => {
        try {
            const docs = await jobsCollection.get();
            let jobs = [];
            docs.forEach(doc => {
                jobs.push(extractJob(doc));
            });
            return res.send(jobs);
        } catch (error) {
            return res.status(500).send('error')
        }

    })

    app.get('/jobs/:id', async(req, res) => {
        return res.send(jobs.find(el => el.id === req.params.id));
    })

    app.post('/jobs', async(req, res) => {
        try {

            const job = await jobsCollection.doc().set(req.body);

            if (job) {
                return res.send('success')
            } else {
                throw Error;
            }

        } catch (error) {
            return res.status(500).send(error);
        }
    })

    app.put('/jobs/:id', async(req, res) => {
        try {
            if (!req.body) {
                return res.status(403).send('Para alterar um usuário, é necessário passar algum valor');
            }
            let index = await jobs.findIndex(job => job.id === req.params.id);
            if (index >= 0) {
                Object.keys(req.body).forEach(job => {
                    jobs[index][job] = req.body[job]
                })
                return res.send(`Vaga com o id ${req.params.id} alterada com sucesso`);
            }
            return res.send("nao foi encontrado vaga com esse id");
        } catch (error) {
            return res.status(500).send(error);
        }
    })

    app.delete('/jobs/:id', (req, res) => {
        try {
            let length = jobs.length;
            jobs.splice(jobs.findIndex(el => el.id === req.params.id), 1);
            if (jobs.length < length) return res.send(`A vaga com o id ${req.params.id} com successo`);
            else return res.status(500).send(`Não foi possível deletar a vaga ${req.params.id}`);
        } catch (error) {
            return res.status(500).send(error);
        }
    })

    const extractJob = (job) => {
        let obj = job.data();
        return {
            id: job.id,
            name: obj.name,
            salary: obj.salary,
            area: obj.area,
            description: obj.description,
            skills: obj.skills,
            differentials: obj.differentials,
            isPcd: obj.isPcd,
            isActive: obj.isActive
        }
    }

    const createJob = (obj) => new Job(
        obj.name,
        obj.description,
        obj.skills,
        obj.salary,
        obj.area,
        obj.differentials,
        obj.isPcd,
        obj.isActive
    )
}