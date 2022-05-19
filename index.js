const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json()) //determina o tipo de dados que vai receber (json)
app.use(cors()) //sem domínio, a api será usada localmente
app.use(routes)

//ligando o servidor
//porta, 
app.listen(21262, () => {
    console.log('Exress started at http://localhost:21260')
})


