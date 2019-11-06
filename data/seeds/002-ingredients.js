
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: 'Lemon'},
    {ingredient_name: 'Sugar'},
    {ingredient_name: 'Water'},
    {ingredient_name: 'Bread'},
    {ingredient_name: 'Meat'},
    {ingredient_name: 'Tomato'},
    {ingredient_name: 'Cucumber'},
    {ingredient_name: 'Carrot'},
    {ingredient_name: 'Cabbage'},
    {ingredient_name: 'Cheese'}
  ]);
};
