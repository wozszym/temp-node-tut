const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.url)

    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('Short info about ourself')
    }
    else {
        res.end(`
    <h1 style="color: red">Page not found</h1>
    <p>We can't seem to find the page you ask</p>
    `)
    }
})

server.listen(5000)