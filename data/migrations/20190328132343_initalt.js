exports.up = function( knex, Promise ) {
    return knex.schema.createTable( "dishes", tblBuilder => {
        
        tblBuilder.increments( "id" );
        
        tblBuilder.string( "name", 255 ).notNullable().index().unique();
        
    } ).createTable( "recipes", tblBuilder => {
        
        tblBuilder.increments( "id" );
        
        tblBuilder.string( "name" ).index().notNullable().unique();
        
        tblBuilder.integer( "dish_id" ).
            notNullable().
            references( "id" ).
            inTable( "dishes" ).
            onUpdate( "CASCADE" ).
            onDelete( "RESTRICT" );
        
        tblBuilder.text('instructions');
        
    } ).createTable( "ingredients", tblBuilder => {
        
        tblBuilder.increments( "id" );
        tblBuilder.string( "name" ).index().notNullable().unique();
        
    } ).createTable( "recipes_ingredients_bridge", tblBuilder => {
        
        tblBuilder.increments( "id" );
        
        tblBuilder.integer( "recipe_id" ).
            index().
            notNullable().
            references( "id" ).
            inTable( "recipes" ).
            onUpdate( "CASCADE" ).
            onDelete( "RESTRICT" );
        
        tblBuilder.integer( "ingredient_id" ).
            index().
            notNullable().
            references( "id" ).
            inTable( "ingredients" ).
            onUpdate( "CASCADE" ).
            onDelete( "RESTRICT" );
        
        tblBuilder.string( "amount" ).notNullable();
    } );
};

exports.down = function( knex, Promise ) {
    return knex.schema.dropTableIfExists( "dishes" ).
        dropTableIfExists( "recipes" ).
        dropTableIfExists( "ingredients" ).
        dropTableIfExists( "recipes_ingredients_bridge" );
};
