
exports.seed = function(knex) {
  return knex('shoppingList').insert([
    {recipe_id: 1, notes: '500 gramm', ingredient_id: 8},
    {recipe_id: 1, notes: '2 pieces', ingredient_id: 9},
    {recipe_id: 1, notes: '3 pieces', ingredient_id: 6},
    {recipe_id: 2, notes: '2 pieces', ingredient_id: 4},
    {recipe_id: 2, notes: '1 piece', ingredient_id: 5},
    {recipe_id: 2, notes: '2 pieces', ingredient_id: 6},
    {recipe_id: 3, notes: '2 pieces', ingredient_id: 1},
    {recipe_id: 3, notes: '4 spoons', ingredient_id: 2},
    {recipe_id: 3, notes: '400 gramm', ingredient_id: 3}
  ]);
};
