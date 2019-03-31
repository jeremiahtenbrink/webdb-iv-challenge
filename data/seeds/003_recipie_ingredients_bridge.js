exports.seed = function( knex, Promise ) {
    
    return knex( "recipes_ingredients_bridge" ).insert( [
        { recipe_id: 1, ingredient_id: 3, amount: "24" },
        { recipe_id: 2, ingredient_id: 2, amount: "Full Rack" },
        { recipe_id: 3, ingredient_id: 4, amount: "12 pack" },
        { recipe_id: 4, ingredient_id: 1, amount: "1 large bag" },
        { recipe_id: 4, ingredient_id: 3, amount: "24" },
    
    ] );
};
