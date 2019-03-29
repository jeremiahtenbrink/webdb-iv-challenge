import { database } from '../data/dbConfig';
import { IDish } from "./IDish";


export const getDishes = () => {
    return database( 'dishes' );
};

export const getDish = ( id: number ) => {
    return database( 'dishes' )
        .where( { 'dishes.id': id } ).first();
};

export const addDish = ( dish: IDish ) => {
    return database( 'dishes' ).insert( dish );
};
