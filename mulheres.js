const express = require("express")
const router = express.Router()
const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Hirai Momo',
        imagem: 'https://static1.purebreak.com.br/articles/1/10/19/01/@/420276-voce-vai-amar-descobrir-estas-19-curiosi-diapo-2.jpg',
        bio: 'Twice Main Dancer.'
   
    }


]

function mostraMulheres (request, response) {
response.json (mulheres)
}

function mostraPorta () {
    console.log("Servidor criado e rodando na porta", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)