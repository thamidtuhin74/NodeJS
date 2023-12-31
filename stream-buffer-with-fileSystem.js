const http = require('http');

const fs = require('fs');//require file-system
// const { buffer } = require('stream/consumers');

//Createing server using core nodeJS
const server = http.createServer();

//lisener
server.on('request', (req,res)=>{
    console.log(req.url, req.method);
    if(req.url==="/read-file" && req.method==="GET");
        const readableStream = fs.createReadStream(process.cwd() +'/text/read.txt');
    //cwd-> current directory

        //streaming read file
        // const readableStream = fs.createReadStream('/text/read.txt');
    // const readableStream = fs.createReadStream(__dirname + 'text/read.txt');


        readableStream.on('data',(buffer)=>{
            res.statusCode =  200;
            res.write(buffer);
        })
        readableStream.on('end',()=>{
            res.statusCode =  200;
            res.end('Streaming was end');
        })
        readableStream.on('error',(error)=>{
            res.statusCode =  404;
            console.log(error);
            res.end('Somethings went wrong');
        })

})

server.listen(5000, ()=>{
    console.log("Server running on port 5000");
})