const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome lil bro')
    }
    if(req.url === '/about'){
        res.end('About page')

    }
    res.end(`<h1>LMAO your going nowhere budy<h1>
        <p>Go here chump</p>
        <a href="/">back home</a>`);
})

server.listen(5000)