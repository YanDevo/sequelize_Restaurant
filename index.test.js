//import the associated models from index.js
const {Menus, Restaurant, sequelize} = require('./index')

//test musician database CRUD
describe('Menus Database', () => {
    
    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
    })
    create({name: breakfast})
test('menu have a restaurant', async() => {
    const testMenu = await Menu.findOne({where: {name: 'breakfastMenu'}});    
    expect(testMenu.isSpanish).toBe('all')})
})

        // //create array of Restaurants
        // const arrayOfRestaurants = [
        //     {name: "Yacob's Gourmet Restaurant", location: 'Hawasa', capacity: 236},
        //     {name: "Preeti's Italian Kitchen", location: 'Pune', capacity: 1529},
        //     {name: "Jannatul's Coffee House", location: 'Dhaka', capacity: 333},
        //     {"Yannick's Caribbean Cuisine", location: 'Georgetown', capacity: 125}]