"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function linear_search(arr, needle) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == needle) {
            return true;
        }
    }
    return false;
}
exports.default = linear_search;
var arrayToSearch = [1, 2, 3, 4, 5];
var searchTerm = 3;
var result = linear_search(arrayToSearch, searchTerm);
console.log("".concat(result));
