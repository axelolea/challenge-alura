"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypted = exports.encrypted = void 0;
const dictionary_1 = require("./dictionary");
function encrypted(value) {
    let newString = value;
    Object.keys(dictionary_1.dictionary).forEach(letter => {
        newString = newString.replace(letter, dictionary_1.dictionary[letter]);
    });
    return newString;
}
exports.encrypted = encrypted;
function decrypted(value) {
    let newString = value;
    Object.keys(dictionary_1.dictionary).forEach(letter => {
        newString = newString.replace(letter, dictionary_1.dictionary[letter]);
    });
    return newString;
}
exports.decrypted = decrypted;
