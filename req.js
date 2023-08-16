const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url
    if(url==='/home'){
        res.write('Welcome Home')
    }
    else if(url==='/about'){
        res.write('Welcome to About Us page')
    }
    else if(url==='/node'){
        res.write('Welcome to my node js project')
    }
    else{
        res.write('Wrong Page')
    }
    res.end();
})

server.listen(4400)
