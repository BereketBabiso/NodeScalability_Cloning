const http = require('http');
const url = require('url');
const {fork}=require('child_process');

const server = http.createServer();
server.on('request',(req,resp)=>{
    var q = url.parse(req.url, true);
    var filepath = "." + q.pathname;
    const childProcess=fork('filereader.js');
    childProcess.send(filepath);
    childProcess.on('message',(data)=>{
        resp.end(data);
    });
});

server.listen(5555,()=>console.log("server started on port 5555"));

