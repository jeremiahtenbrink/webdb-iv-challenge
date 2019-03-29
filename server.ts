import express, { Request, Response } from "express";
import helmet from 'helmet';

const Dishes = require( './dishes/dishes-router' );
const Recipes = require( './recipies/recipies-router' );

const server = express();

server.use( helmet() );
server.use( express.json() );

server.use( '/dishes', Dishes );
server.use( '/recipes', Recipes );
server.use( '/', ( req: Request, res: Response ) => {
    res.status( 200 ).json( { message: "yup it works." } );
} );

export default server;