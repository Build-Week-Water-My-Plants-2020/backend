
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', tbl=>{
      tbl.increments('id');
      tbl.integer('user_id').notNullable().references('id').inTable('users');
      tbl.string('nickname').notNullable();
      tbl.string('h2oFrequency', 10).notNullable();
      tbl.date('last_water');
      tbl.string('image', 256);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('plants');
};
