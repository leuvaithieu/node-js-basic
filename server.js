const http = require('http');
const server = http.createServer((req, res) => {
    console.log('run request ...')
    res.setHeader('Content-type', 'text/html');
    res.write('<h3>Hello world</h3>');
    res.write('<h2>From Hoang Lao Ta</h2>');
    res.end();
})
server.listen(300, 'localhost', () => {
    console.log('Nodejs server is running on port:3000')
})