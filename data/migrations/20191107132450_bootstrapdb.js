
exports.up = function(knex) {
  return knex.scheme

  .createTable('species', table=>{
      // the type of the Primary Key is: integer without negative values, also called unsigned
    table
    .increments();

    table
    .string('name', 255)
    .notNullable();
  })
  
  .createTable('animals', table=>{
    table
    .increments();

    table
    .string('name',255).notNullable();

      //define our Foreign Key
    table
    .integer('species_id')
    .unsigned()
    .references('id')
    .inTable('species') //species_id references id in species table
    .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be 'RESTRICT', 'NO ACTION', 'SET NULL'
    .onUpdate('CASCADE'); //about changing the value of the primary key 
    //we have bears and a few animals that are bears
  })
};

exports.down = function(knex) {
  
};

//knex .. command not found: knex -> npx knex