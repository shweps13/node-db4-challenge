
exports.seed = function(knex) {
  return knex('shoppingList').insert([
    {recipe_id: 1, notes: '500 gramm', ingredient_id: 8, instructions: null},
    {recipe_id: 1, notes: '2 pieces', ingredient_id: 9, instructions: "Nothing special"},
    {recipe_id: 1, notes: '3 pieces', ingredient_id: 6, instructions: "Nothing special"},
    {recipe_id: 2, notes: '2 pieces', ingredient_id: 4, instructions: "Nothing special"},
    {recipe_id: 2, notes: '1 piece', ingredient_id: 5, instructions: "Use a grill!"},
    {recipe_id: 2, notes: '2 pieces', ingredient_id: 6, instructions: null},
    {recipe_id: 3, notes: '2 pieces', ingredient_id: 1, instructions: "Can change to lime"},
    {recipe_id: 3, notes: '4 spoons', ingredient_id: 2, instructions: "Add brown sugar"},
    {recipe_id: 3, notes: '400 gramm', ingredient_id: 3, instructions: "Nothing special"}
  ]);
};
