const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const method = req.method
    if(method==='GET'){
    fs.readFile('hello.txt', 'utf-8', (err, data) => {
      if (err) {
          res.write('<html>');
          res.write('<head><title>File System</title></head>');
          res.write('<body>');
          res.write('<p>No message available.</p>');
          res.write('<form method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form>');
          res.write('</body>');
          res.write('</html>');
          res.end();
      } else {
        res.write('<html>');
        res.write('<head><title>File System</title></head>');
        res.write('<body>');
        res.write(data);
        res.write('<form method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
      }
    });
    }
    if(method ==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk)
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1]
            fs.writeFileSync('hello.txt',message)
            res.statusCode = 302;
            res.setHeader('Location','/')
            return res.end()
        })
    }
})

server.listen(8000)