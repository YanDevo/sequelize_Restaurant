const {sequelize, DataTypes, Model} = require('./db')

//import models
const { Menus } = require('./Menus')
const { Restaurant } = require('./Restaurant')

//associate models
//adds foreign key to Menus table connecting a Menu instance to a specific Restaurant
Menus.belongsTo(Restaurant)
//gives us sequelize methods for a one to many relationship
Restaurant.hasMany(Menus)

//export models with added associations
module.exports = {Menus, Restaurant, sequelize}