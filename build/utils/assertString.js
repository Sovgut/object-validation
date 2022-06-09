"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertString = (value) => {
    if (typeof value !== 'string')
        return true;
    const regexPattern = new RegExp(/[<>\/\\]/g);
    return !regexPattern.test(value);
};
exports.default = assertString;
