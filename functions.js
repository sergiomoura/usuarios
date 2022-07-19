// Importar o array de usuários
const usuarios = require('./database/usuarios.json');
const fs = require('fs');
const path = require('path');

module.exports = {

    criarUsuario: (nome)=>{

        // Inferir o id deste novo usuário
        let novoId = usuarios[usuarios.length - 1].id + 1;

        // Criar um objeto literal com os dados do usuario
        let novoUsuario = {
            id: novoId,
            nome: nome
        }

        // Adicionar o usuário (objeto literal) ao final do array
        usuarios.push(novoUsuario);

        // Salvar esse array no arquivo ./database/usuarios.json
        fs.writeFileSync(path.resolve('./database/usuarios.json'),JSON.stringify(usuarios, null, 4));

    },
    removerUsuario: ()=>{},

    substituirUsuario: ()=>{},

    buscarUsuario: (trecho)=> {
        let usuariosEncontrados = usuarios.filter(
            u => u.nome.includes(trecho)
        );
        return usuariosEncontrados;
    },

    listarUsuarios: ()=>{
        return usuarios;
    }

}