//exemplo de servidor de paginas

const http = require('http')
const server = http.createServer(
    (request, response) => {
        request.url // tenho a string da url da req
        response.writeHead(200 /*status sucesso*/, {'Content-Type': 'text/html'})
        if (request.url === '/'){
            response.write('<head><meta charset = "UTF-8"></head>')
            response.write('<h1>Página do Weslley</h1>')
            response.write('<ul>')
            response.write('<li><a href ="/">home</a></li>')
            response.write('<li><a href ="/artigos">artigos</a></li>')
            response.write('<li><a href ="/contato">contato</a></li>')
            response.write('</ul>')
        } else if(request.url === '/artigos'){
            response.write('<head><meta charset = "UTF-8"></head>')
            response.write('<h1>Artigos do Weslley</h1>')
            response.write('<ul>')
            response.write('<li><a href ="/">home</a></li>')
            response.write('<li><a href ="/artigos">artigos X</a></li>')
            
            response.write('</ul>')
        }else if (request.url === '/contato') {
            response.write('<head><meta charset = "UTF-8"></head>')
            response.write('<h1>Contatos do Weslley</h1>')
            response.write('<ul>')
            response.write('<li><a href ="/">home</a></li>')
            response.write('<li><a href ="/artigos">artigos X</a></li>')          
            response.write('</ul>')
        }
        else {
            response.write('<h1>Ops.. página não encontrada! </h1>')
            response.write('<li><a href ="/">home</a></li>')

        }
        response.end()
    }
)

server.listen(3009, ()=> {console.log('servidor esta escutando porta 3000')})