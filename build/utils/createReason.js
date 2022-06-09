"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createReason = (propertyName, reason) => {
    return `${propertyName}.${reason}`;
};
exports.default = createReason;
