const http = require('http');
const server =  http.createServer(function (req,res) {
    res.writeHead(200);//codigos 200 = chido
    res.end('Holaaaaa');
});

server.listen(3000,'127.0.0.1', function () {
    console.log('server on port 3000');
});