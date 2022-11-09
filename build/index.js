"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tsc --init - will create a tsconfig.json and allow you to customise TS compiler settings
const Sorter_1 = require("./Sorter/Sorter");
const NumbersCollection_1 = require("./Collections/NumbersCollection");
const CharactersCollection_1 = require("./Collections/CharactersCollection");
const numCol = new NumbersCollection_1.NumbersCollection([5, 100, -3, 46]);
const charCol = new CharactersCollection_1.CharactersCollection('test');
const sorter = new Sorter_1.Sorter(numCol);
const charSorter = new Sorter_1.Sorter(charCol);
charSorter.sort();
sorter.sort();
console.log(numCol.data);
console.log(charCol.data);
