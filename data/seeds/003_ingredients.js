exports.seed = function( knex, Promise ) {
    
    return knex( "ingredients" ).insert( [
        { name: "fries" },
        { name: "beef ribs" },
        { name: "tortillas" },
        { name: "buns" },
    ] );
};
