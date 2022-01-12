const Sequelize = require('sequelize');
const database = require('./cadastrar');



const aluno = database.define('aluno', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = aluno


// Nessa parte passe as informações da sua tabela

/* Caso seu objetivo seja apenas testar a conexão do banco com o AMW (Laragon, Xampp, Wamp), 
então siga o código acima normalmente*/