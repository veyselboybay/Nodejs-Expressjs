const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    // const text = fs.readFileSync('./content/first.txt','utf-8');
    // res.end(text)
    const fileStream = fs.createReadStream('./content/first.txt',{encoding:'utf-8'});
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })
})

server.listen(5000)