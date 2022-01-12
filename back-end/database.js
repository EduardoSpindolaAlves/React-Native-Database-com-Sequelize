const Sequelize = require('sequelize');
const sequelize = new Sequelize('nome do banco','usuario','senha',{
    dialect: 'postgres',
    host:'localhost',
    port:'5432'
});

module.exports = sequelize;

/*Lembrando que...

// No Mysql o ao invés do nome do banco de usa o nome do schema

// O usuário padrão do Postgres é 'postgres'

// A porta padrão é '5432'

// O dialect é o Banco usado Mysql,Sqlite,Postgres...

// Cuidado com o case sensitive */ 