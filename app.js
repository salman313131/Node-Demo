const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('salman')
})

server.listen(4000)