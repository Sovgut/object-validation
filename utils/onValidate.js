"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onValidate = (value, callback) => {
    if (!callback)
        return;
    return callback(value);
};
exports.default = onValidate;
