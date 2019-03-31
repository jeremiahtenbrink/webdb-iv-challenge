import { Request, Response } from "express";
import * as Dishes from './dishes-model';
import * as error from '../error/error';
import * as Recipies from '../recipies/recipies-model';

import { IDish } from './IDish';


const dishesRouter = require( 'express' ).Router();


/**
 * @api {get} /dishes Read data of all the dishes
 * @apiVersion 1.0.0
 * @apiName GetDishes
 * @apiGroup Dishes
 *
 * @apiExample Example usage:
 * axios.get('/dishes');
 *
 * @apiSuccess {Number}   id          ID of the dish.
 * @apiSuccess {String}   name        Dish name.
 * @apiSuccessExample {json} Example:
 *
 *  {
 *      "id": 1,
 *      "name": "Tacos"
 *  }
 *
 * @apiError (500) {Number} status: 500
 * @apiError (500) {String} message: "Server Error"
 *
 */
dishesRouter.get( '/', async ( req: Request, res: Response ) => {
    try {
        const dishes: IDish[] = await Dishes.getDishes();
        if ( dishes ) {
            res.status( 200 ).json( dishes );
            return;
        }
    } catch ( e ) {
        res.status( 500 ).json( e );
    }
    
    
} );



dishesRouter.get( '/:id', async ( req: Request, res: Response ) => {
    try {
        let id = req.params.id;
        if ( !id ) {
            error.sendError( error.error( 400, "Please include a id in your" +
                " request." ),
                res );
        }
        let dish: IDish = await Dishes.getDish( id );
        const recipes = await Recipies.getRecipiesForDish( id );
        if ( recipes ) {
            dish.recipes = recipes;
        }
        if ( dish ) {
            res.status( 200 ).json( dish );
            return;
        }
    } catch ( e ) {
        error.sendError( e, res );
    }
    
} );

dishesRouter.post( '/', async ( req: Request, res: Response ) => {
    try {
        
        if ( !req.body.name ) {
            error.sendError( error.error( 400, 'Please include a dish name in' +
                ' your request.' ), res );
            return;
        }
        
        const dish: IDish = req.body;
        
        const result = await Dishes.addDish( dish );
        if ( result ) {
            const newDish = await Dishes.getDish( result[ 0 ] );
            res.status( 201 ).json( newDish );
        }
        
    } catch ( e ) {
        error.sendError( e, res );
    }
    
} );

module.exports = dishesRouter;
