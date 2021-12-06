const {Sequelize, DataTypes, Model} = require('sequelize');
//create a database neamed 'sequelize'
//add models to this db in index.js
const sequelize = new Sequelize('database', 'username', 'password',{
    dialect: 'sqlite', //type of sql,
    storage: './restaurant.sqlite',
    logging: false

})

module.exports = {sequelize, DataTypes, Model};