const Sequelize = require('sequelize');
const database = require('./connection/db');

const Tarefa = database.define('tarefa',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome_Tarefa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    desc_tarefa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data_finalizacao:{
        type: Sequelize.DATE,
    }
});

 
module.exports = Tarefa;

