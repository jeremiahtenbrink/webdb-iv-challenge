exports.seed = function( knex, Promise ) {
    
    return knex( "recipes" ).insert( [
        {
            name:         "Fish Tacos",
            dish_id:      1,
            instructions: "Deep fry fish, Place" +
                              " into tortilla."
        },
        {
            name:         "BBQ Ribs",
            dish_id:      2,
            instructions: "Cover rack in bbq sauces and place in over at 400" +
                              " till internal temperature is good."
        },
        {
            name:         "American Hamburger",
            dish_id:      3,
            instructions: "Cook beef patty on grill and place american cheese on top."
        },
        {
            name:         "California Burrito",
            dish_id:      4,
            instructions: "Deep fry bag of fries. Place carne asada fries" +
                              " and pico inside of tortilla and roll.",
        }
    ] );
};
