
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('ingredient_name', 255).notNullable();
    })
    .createTable('shoppingList', tbl => {
      tbl.increments();

      tbl.text('notes');
      tbl.text('instructions');

      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl.unique(['recipe_id', 'ingredient_id']);
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('shoppingList')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
