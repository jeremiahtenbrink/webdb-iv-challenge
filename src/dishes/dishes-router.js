"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dishes = __importStar(require("./dishes-model"));
const error = __importStar(require("../error/error"));
const Recipies = __importStar(require("../recipies/recipies-model"));
const dishesRouter = require('express').Router();
/**
 * @api {get} /dishes/:id Gets dish and recipes
 * @apiVersion 1.0.0
 * @apiName GetDishWithID
 * @apiGroup Dishes
 *
 * @apiParam {Number} id Dish ID
 * @apiExample Example get:
 * axios.get('/dishes/4');
 *
 * @apiUse Error
 *
 * @apiSuccess {Number}   id          ID of the dish.
 * @apiSuccess {String}   name        Dish name.
 * @apiSuccess {Object[]}  recipes     Array of recipes.
 * @apiSuccessExample {json} Example:
 *
 *  {
    "id": 1,
    "name": "Tacos",
    "recipes": [
        {
            "id": 1,
            "name": "Fish Tacos",
            "dish_id": 1,
            "instructions": "Deep fry fish, Place into tortilla."
        },
        {
            "id": 6,
            "name": "Beef Tacos",
            "dish_id": 1,
            "instructions": "Cook beef add to tacos"
        }
    ]
}
 */
dishesRouter.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        if (!id) {
            error.sendError(error.error(400, "Please include a id in your" +
                " request."), res);
        }
        let dish = await Dishes.getDish(id);
        const recipes = await Recipies.getRecipiesForDish(id);
        if (recipes) {
            dish.recipes = recipes;
        }
        if (dish) {
            res.status(200).json(dish);
            return;
        }
    }
    catch (e) {
        error.sendError(e, res);
    }
});
/**
 * @api {get} /dishes Gets all dishes
 * @apiVersion 1.0.0
 * @apiName GetDishes
 * @apiGroup Dishes
 *
 * @apiExample Example get:
 * axios.get('/dishes');
 *
 * @apiUse Error
 *
 * @apiSuccess {Number}   id          ID of the dish.
 * @apiSuccess {String}   name        Dish name.
 * @apiSuccessExample {json} Success Example:
 *  [
 *      {
 *          "id": 1,
 *          "name": "Tacos"
 *      },
 *      {
 *          "id": 2,
 *          "name": "Ribs"
 *      }
 *  ]
 */
dishesRouter.get('/', async (req, res) => {
    try {
        const dishes = await Dishes.getDishes();
        if (dishes) {
            res.status(200).json(dishes);
            return;
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
/**
 * @api {post} /dishes Create a new dish
 * @apiVersion 1.0.0
 * @apiName CreateDish
 * @apiGroup Dishes
 *
 * @apiParam {String} name Name of the dish.
 * @apiExample Example Post:
 * axios.post('/dishes/',
 * {
 *      name: "String"
 * });
 *
 * @apiUse Error
 * @apiSampleRequest off
 *
 * @apiSuccess {Number}   id          ID of the dish.
 * @apiSuccess {String}   name        Dish name.
 * @apiSuccessExample {json} Success Example:
 *
 *  {
 *      "id": 1,
 *      "name": "Dish Name"
 *  }
 */
dishesRouter.post('/', async (req, res) => {
    try {
        if (!req.body.name) {
            error.sendError(error.error(400, 'Please include a dish name in' +
                ' your request.'), res);
            return;
        }
        const dish = req.body;
        const result = await Dishes.addDish(dish);
        if (result) {
            const newDish = await Dishes.getDish(result[0]);
            res.status(201).json(newDish);
        }
    }
    catch (e) {
        error.sendError(e, res);
    }
});
module.exports = dishesRouter;
//# sourceMappingURL=dishes-router.js.map