/*
TABLE USERS
---------------------------------------
id | username | password | department 
1  | silvo1616| *********| sales
----------------------------------------
*/
exports.up = function(knex) {

        return knex.schema.createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 128).notNullable().unique();
            tbl.string('password', 128).notNullable();
            tbl.string('department', 128).notNullable();
        })
};

exports.down = function(knex) {

        //drop table in the reverse order that you create them
        return knex.schema
        .dropTableIfExists('users')
    
};
