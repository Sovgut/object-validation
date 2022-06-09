"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertMinLength = (value, minLength) => {
    if (typeof value !== 'string')
        return true;
    if (!minLength)
        return true;
    return value.length >= minLength;
};
exports.default = assertMinLength;
