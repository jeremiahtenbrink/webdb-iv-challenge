import { Request, Response } from "express";
import * as Recipes from './recipies-model';
import * as Ingredients from '../ingredients/ingredients-modal';
import * as Dishes from '../dishes/dishes-model';
import * as error from '../error/error';

import { IRecipie } from './IRecipie';
import { IIngredient } from "../ingredients/IIngredient";


const recipesRouter = require( 'express' ).Router();


/**
 * @api {get} /recipes/ Get all recipes
 * @apiVersion 1.0.0
 * @apiName GetRecipes
 * @apiGroup Recipes
 *
 * @apiExample Example get:
 * axios.get('/recipes');
 *
 * @apiUse Error
 *
 * @apiSuccess {String} name            Name of the recipe.
 * @apiSuccess {String} instructions    Instructions for preparing the recipe.
 * @apiSuccess {String} dish_name       Name of the dish.
 * @apiSuccessExample {json} Example:
 *[
 *  {
 *     "name": "Fish Tacos",
 *     "instructions": "Deep fry fish, place into tortilla.",
 *     "dish_name": "Tacos"
 *  },
 *  {
 *     "name": "BBQ Ribs",
 *     "instructions":  "Cover rack in bbq sauces and place in over at 400 till internal temperature is good.",
 *       "dish_name": "Ribs"
 *  }
 *]
 *
 */
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


/**
 * @api {get} /recipes/:id Get recipe
 * @apiVersion 1.0.0
 * @apiName GetRecipe
 * @apiGroup Recipes
 *
 * @apiExample Example get:
 * axios.get('/recipes/4');
 *
 * @apiUse Error
 *
 * @apiParam {Number} id    ID of the recipe.
 *
 * @apiSuccess {String} name            Name of the recipe.
 * @apiSuccess {String} instructions    Instructions for preparing the recipe.
 * @apiSuccess {String} dish_name       Name of the dish.
 * @apiSuccessExample {json} Example:
 *
 *  {
 *     "name": "Fish Tacos",
 *     "instructions": "Deep fry fish, place into tortilla.",
 *     "dish_name": "Tacos"
 *  }
 *
 *
 */
recipesRouter.get( '/:id', async ( req: Request, res: Response ) => {
    try {
        let id = req.params.id;
        if ( !id ) {
            error.sendError( error.error( 400, "Please include a id in your" +
                " request." ),
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
        error.sendError( e, res );
    }
    
} );

/**
 * @api {post} /recipes/ Create recipe.
 * @apiVersion 1.0.0
 * @apiName CreateRecipe
 * @apiGroup Recipes
 *
 * @apiUse Error
 * @apiSampleRequest off
 *
 * @apiParam {String} name              Name of the recipe.
 * @apiParam {String} instructions      Recipe instructions.
 * @apiParam {Number} id                ID of the dish the recipe is for.
 *
 * @apiExample Example post:
 * axios.post('/recipes',
 * {
 *     name: "Name of dish",
 *     instructions: "Instructions to prepare dish",
 *     dish_id: 4
 * })
 *
 * @apiSuccess {Number} id              ID of the new recipe.
 * @apiSuccess {String} name            Name of the recipe.
 * @apiSuccess {String} instructions    Instructions for preparing the recipe.
 * @apiSuccess {Number} dish_id         ID of the dish the recipe is for.
 * @apiSuccessExample {json} Success Example:
 *
 *  {
 *      "id":   30,
 *     "name": "Fish Tacos",
 *     "instructions": "Deep fry fish, place into tortilla.",
 *     "dis_id": "4"
 *  }
 *
 *
 */
recipesRouter.post( '/', async ( req: Request, res: Response ) => {
    try {
        if ( !req.body.name || !req.body.instructions || !req.body.dish_id ) {
            error.sendError( error.error( 400, "Please include in your body" +
                " the name," +
                " instructions, and dish_id" ), res );
            return;
        }
        
        const dish = await Dishes.getDish( req.body.dish_id );
        
        if ( !dish ) {
            error.sendError( error.error( 400, "Please include a valid dish" +
                " id" ), res );
            return;
        }
        
        const recipe = req.body;
        if ( recipe.ingredients ) {
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
        error.sendError( e, res );
    }
    
} );

module.exports = recipesRouter;
