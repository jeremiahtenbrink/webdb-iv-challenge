import { IIngredient } from "../ingredients/IIngredient";

export interface IRecipie {
    id?: number,
    name: string,
    dish_id: number,
    instructions: string,
    ingredients?: IIngredient[]
}