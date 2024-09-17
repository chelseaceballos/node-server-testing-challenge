
exports.up = async function(knex) {
  await knex.schema
  .createTable('friends', table  => {
    table.increments('friend_id')
    table.string('friend_name', 100).notNullable()
  })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('friends')
};
