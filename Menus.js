const {sequelize, DataTypes, Model} = require('./db')

//create model for Menus in our database
class Menus extends Model {}

//create attributes for model using init method
Menus.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    inSpanish: DataTypes.BOOLEAN,
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})

module.exports = {Menus}