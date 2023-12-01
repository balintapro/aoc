"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('input.txt', 'utf8');
var matches = [];
for (var _i = 0, _a = input.split('\n'); _i < _a.length; _i++) {
    var line = _a[_i];
    var match_1 = line.match(/\d/g);
    if (match_1) {
        var first = match_1[0];
        var last = match_1[match_1.length - 1];
        matches.push("".concat(first, " + ").concat(last));
    }
}
console.log(matches);
