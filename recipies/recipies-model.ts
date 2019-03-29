import { database } from '../data/dbConfig';
import { IRecipie } from "./IRecipie";


export const getRecipes = () => {
    return database( 'recipes' )
        .select( 'recipes.name', 'recipes.instructions',
            { dish_name: 'dishes.name' } )
        .innerJoin( 'dishes', 'recipes.dish_id', 'dishes.id' );
};

export const getRecipe = ( id: number ) => {
    return database( 'recipes' )
        .select( 'recipes.name', 'recipes.instructions')
        .where( { 'recipes.id': id } ).first();
};

export const addRecipe = ( recipe: IRecipie ) => {
    return database( 'recipes' ).insert( recipe );
};

export const getRecipiesForDish = (dishID: number) => {
    return database('recipes')
        .where({dish_id: dishID});
};
