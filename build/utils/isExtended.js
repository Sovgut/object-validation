"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isExtended = (schemeProperty) => {
    return typeof schemeProperty === 'object';
};
exports.default = isExtended;
