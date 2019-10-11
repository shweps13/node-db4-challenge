const db = require('../data/db-config.js');

module.exports = {
    fingetRecipes,
    getShoppingList
}

function fingetRecipes() {
    return db('recipes');
}


function getShoppingList(recipe_id) {
    return db('recipes as r')
      .join('shoppingList as s', 'r.id' , '=', 'q.recipe_id')
      .join('ingredients as i', 'i.id' , '=', 'q.ingredient_id')
      .select('i.name', 'q.quantity')
      .where({ recipe_id })
  }
