import { database } from "../data/dbConfig";
import { IIngredient } from "./IIngredient";

export const getIngredients = ( recipeID: number ) => {
    return database( 'ingredients' )
        .select( 'ingredients.name', 'recipes_ingredients_bridge.amount' )
        .innerJoin( 'recipes_ingredients_bridge',
            'recipes_ingredients_bridge.ingredient_id', 'ingredients.id' )
        .where( { 'recipes_ingredients_bridge.recipe_id': recipeID } );
};

export const addIngredients =(ingredients: IIngredient[]) => {

};

export const addIngredient = (ingredient: IIngredient) => {

};