const http = require('http')

const server = http.createServer();

server.on('request',(req,res)=>{
    res.end(`Your data here!`);
})

server.listen(5000,()=>{
    console.log('Server listening on 5000...')
})