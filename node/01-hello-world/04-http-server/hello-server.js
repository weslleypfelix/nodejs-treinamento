const http = require('http')

//criando um servidor http

const server = http.createServer(
    (request, response) => {
        response.write('<head><meta charset="UTF-8"></head>')
        response.write('<h3>Fala dev!</h3>')
        response.end()
    }
)

// subir o servidor => 

server.listen(3000)