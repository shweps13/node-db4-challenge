
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'Salad'},
        {name: 'Burger'},
        {name: 'Lemonade'}
      ]);
};
