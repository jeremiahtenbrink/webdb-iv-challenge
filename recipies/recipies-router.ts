import { Request, Response } from "express";
import * as Recipes from './recipies-model';
import * as Ingredients from '../ingredients/ingredients-modal';
import * as Dishes from '../dishes/dishes-model';

import { IRecipie } from './IRecipie';
import { IIngredient } from "../ingredients/IIngredient";


const recipesRouter = require( 'express' ).Router();

interface error {
    status: number,
    message: string,
}

const error = ( status: number, message: string ): error => {
    return {
        status,
        message
    }
};

const sendError = ( error: error, res: Response ): void => {
    res.status( error.status || 500 ).json( {
        status: error.status || 500, message: error.message || "Server error"
    } );
};

recipesRouter.get( '/', async ( req: Request, res: Response ) => {
    try {
        const dishes: IRecipie[] = await Recipes.getRecipes();
        if ( dishes ) {
            res.status( 200 ).json( dishes );
            return;
        }
    } catch ( e ) {
        res.status( 500 ).json( e );
    }
    
    
} );

recipesRouter.get( '/:id', async ( req: Request, res: Response ) => {
    try {
        let id = req.params.id;
        if ( !id ) {
            sendError( error( 400, "Please include a id in your request." ),
                res );
        }
        const dish: IRecipie = await Recipes.getRecipe( id );
        const ingredients: IIngredient[] = await Ingredients.getIngredients(
            id );
        if ( dish ) {
            if ( ingredients ) {
                dish.ingredients = ingredients;
            }
            res.status( 200 ).json( dish );
            return;
        }
    } catch ( e ) {
        sendError( e, res );
    }
    
} );

recipesRouter.post( '/', async ( req: Request, res: Response ) => {
    try {
        if ( !req.body.name || !req.body.instructions || !req.body.dish_id ) {
            sendError( error( 400, "Please include in your body the name," +
                " instructions, and dish_id" ), res );
            return;
        }
        
        const dish = await Dishes.getDish( req.body.dish_id );
        
        if ( !dish ) {
            sendError( error( 400, "Please include a valid dish id" ), res );
            return;
        }
        
        const recipe = req.body;
        if(recipe.ingredients){
            recipe.ingredients = undefined;
        }
        
        const result = await Recipes.addRecipe( recipe );
        
        if ( result ) {
            const newRecipe = await Recipes.getRecipe( result[ 0 ] );
            if ( newRecipe ) {
                res.status( 200 ).json( newRecipe );
            }
        }
        
    } catch ( e ) {
        sendError( e, res );
    }
    
} );

module.exports = recipesRouter;
