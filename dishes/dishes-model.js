"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = require("../data/dbConfig");
exports.getDishes = () => {
    return dbConfig_1.database('dishes');
};
exports.getDish = (id) => {
    return dbConfig_1.database('dishes')
        .where({ 'dishes.id': id }).first();
};
exports.addDish = (dish) => {
    return dbConfig_1.database('dishes').insert(dish);
};
//# sourceMappingURL=dishes-model.js.map