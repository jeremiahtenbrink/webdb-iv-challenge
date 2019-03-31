import express, { Request, Response } from "express";
import helmet from 'helmet';

const path = require( 'path' );
const cors = require( 'cors' );
const apiDocsPath = path.join( __dirname, './apidoc' );

const Dishes = require( './src/dishes/dishes-router' );
const Recipes = require( './src/recipies/recipies-router' );

const server = express();

server.use( helmet() );
server.use( cors() );
server.use( express.json() );

server.use( '/dishes', Dishes );
server.use( '/recipes', Recipes );
server.use( '/', express.static( apiDocsPath ) );

export default server;