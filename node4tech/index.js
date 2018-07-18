const http = require('http');
const port = 3005

const server = http.createServer((req, res) => {
    res.write('Hello Word')
    res.end()
}).listen(port, () => {
    console.log(`Listening on port:  ${port}`)
})