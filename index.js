"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.property = void 0;
const constants_1 = require("./constants");
const assertEqual_1 = __importDefault(require("./utils/assertEqual"));
const assertMaxLength_1 = __importDefault(require("./utils/assertMaxLength"));
const assertMinLength_1 = __importDefault(require("./utils/assertMinLength"));
const assertString_1 = __importDefault(require("./utils/assertString"));
const assertType_1 = __importDefault(require("./utils/assertType"));
const assertValue_1 = __importDefault(require("./utils/assertValue"));
const createReason_1 = __importDefault(require("./utils/createReason"));
const onValidate_1 = __importDefault(require("./utils/onValidate"));
const validateObject = (values, scheme) => {
    if (!scheme)
        return { success: true };
    if (!values)
        return { success: false };
    for (const property of scheme) {
        let lengths = {
            maxLength: undefined,
            minLength: undefined,
        };
        if (property.type === 'string') {
            lengths = {
                maxLength: Number.MAX_SAFE_INTEGER,
                minLength: Number.MIN_SAFE_INTEGER,
            };
        }
        const { name, type, optional, minLength, maxLength, compareWith, onValidate: callback, } = Object.assign(Object.assign(Object.assign({}, constants_1.INITIAL_OPTIONS), lengths), property);
        if (optional && !(0, assertValue_1.default)(values[name])) {
            continue;
        }
        if (!(0, assertValue_1.default)(values[name])) {
            return {
                success: false,
                reason: (0, createReason_1.default)(name, 'undefined-or-empty-value'),
            };
        }
        if (!(0, assertType_1.default)(values[name], type)) {
            return {
                success: false,
                reason: (0, createReason_1.default)(name, 'invalid-type'),
            };
        }
        if (!(0, assertString_1.default)(values[name])) {
            return {
                success: false,
                reason: (0, createReason_1.default)(name, 'invalid-string'),
            };
        }
        if (minLength && !(0, assertMinLength_1.default)(values[name], minLength)) {
            return {
                success: false,
                reason: (0, createReason_1.default)(name, 'out-of-range'),
            };
        }
        if (maxLength && !(0, assertMaxLength_1.default)(values[name], maxLength)) {
            return {
                success: false,
                reason: (0, createReason_1.default)(name, 'out-of-range'),
            };
        }
        if (compareWith && !(0, assertEqual_1.default)(values[name], name, compareWith)) {
            return {
                success: false,
                reason: (0, createReason_1.default)(name, 'is-not-comparable'),
            };
        }
        const onValidateState = (0, onValidate_1.default)(values[name], callback);
        if (onValidateState) {
            return {
                success: false,
                reason: (0, createReason_1.default)(name, onValidateState),
            };
        }
    }
    return { success: true };
};
exports.default = validateObject;
var property_1 = require("./utils/property");
Object.defineProperty(exports, "property", { enumerable: true, get: function () { return __importDefault(property_1).default; } });
