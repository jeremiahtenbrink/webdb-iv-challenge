import { IRecipie } from "../recipies/IRecipie";

export interface IDish {
    id?: number,
    name: string,
    recipes?: IRecipie[],
}