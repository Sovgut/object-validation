"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const property = (key) => {
    const [name, type] = key.split(':');
    const closure = { name, type: type };
    return {
        onValidate(callback) {
            closure.onValidate = callback;
            return this;
        },
        min(length) {
            closure.minLength = length;
            return this;
        },
        max(length) {
            closure.maxLength = length;
            return this;
        },
        compareWith(key) {
            closure.compareWith = key;
            return this;
        },
        optional() {
            closure.optional = true;
            return this;
        },
        extract: () => closure,
    };
};
exports.default = property;
