"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertEqual = (values, current, target) => {
    if (!target)
        return true;
    return values[current] === values[target];
};
exports.default = assertEqual;
