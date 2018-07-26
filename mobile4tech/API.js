import axios from 'axios'

axios.defaults.baseURL = 'https://vjobs.herokuapp.com'

const getJobs = () => {
    return axios.get('/jobs')
                .then(res => res.data)
                .catch(error => console.log(error))
}

module.exports = {
    getJobs
}