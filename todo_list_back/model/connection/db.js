const Sequelize = require('sequelize');
const database = new Sequelize('teste_sequelize', 'root', 'Kaikelindo1',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = database;