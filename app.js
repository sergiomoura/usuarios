// 1 - Importar o express
const express = require('express');
const functions = require('./functions');

// 2 - Criar uma aplicação/servidor
const app = express();

// 3 - Dizer para o servidor o endereço e a função a ser executada
// quando esse endereço receber uma requisição

// Rota GET para '/home vai executar a função FFFFFF
app.get(
    '/home',
    (req, res)=>{
        res.send("Página home a ser exibida...")
    }
);


// Rota para listar os usuários:
// GET '/usuarios' 
app.get(
    '/usuarios',
    (req, res) => {
        let usuarios = functions.listarUsuarios();
        res.send(usuarios);
    }
)

// Rota para criar um usuário
// POST '/usuarios'
app.post(
    '/usuarios',
    (req, res)=>{
        functions.criarUsuario("Fulano");
        res.send("Usuário criado com sucesso");
    }
)


// 4 - Fazer o servidor ficar de prontidão aguardando uma requisição
app.listen(3000,()=>{console.log('Servidor rodando na porta 3000')});
