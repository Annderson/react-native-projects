const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

let jobs = require('./config/jobs')
const Job = require('./model/job')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/vagas/:id', async(req, res) => {
    try {
        let id = req.params.id;
        res.send(jobs.find((obj) => {
            return obj.id == id;
        }))
    } catch (erro) {

    }
})

app.post('/vagas', async(req, res) => {
    try {
        let jobsLength = jobs.length;
        let job = createJob(req.body);
        jobs.push(job);
        if (jobs.length > jobsLength) return res.send('Added');
        return res.status(500).send('Internal error')
    } catch (erro) {
        return res.status(500).send('Internal error')
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

const createJob = (obj) => new Job(
    obj.id, obj.name, obj.salary, obj.area,
    obj.description, obj.skills,
    obj.differentials, obj.isPcd, obj.isActive
)