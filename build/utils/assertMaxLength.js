"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertMaxLength = (value, maxLength) => {
    if (typeof value !== 'string')
        return true;
    if (!maxLength)
        return true;
    return value.length <= maxLength;
};
exports.default = assertMaxLength;
