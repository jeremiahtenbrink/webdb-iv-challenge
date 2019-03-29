exports.seed = function( knex, Promise ) {
    
    return knex( "dishes" ).insert( [
        { name: "Tacos" },
        { name: "Ribs" },
        { name: "Hamburger" },
        { name: "Burrito" },
    ] );
    
};
