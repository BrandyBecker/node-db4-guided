
exports.up = function(knex) {
  return knex.scheme
  .createTable('Zoos', table=>{
      table
      .increment();

      table
      .string('name', 255)
      .notNullable();

      table
      .string('Address', 255)
      .notNullable();

  })

  .createTable('Animal_Zoos', table => {
      table
      increment();

      table
      .integer('zoo_id')
      .unsigned()
      .references('id')
      .inTable('Zoos') 
      

      table
      .integer('animal_id')
      .unsigned()
      .references('id')
      .inTable('Animals') 
  })
  
};

exports.down = function(knex) {
  
};
