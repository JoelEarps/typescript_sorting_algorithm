"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tsc --init - will create a tsconfig.json and allow you to customise TS compiler settings
const Sorter_1 = require("./Sorter/Sorter");
const NumbersCollection_1 = require("./Collections/NumbersCollection");
const numCol = new NumbersCollection_1.NumbersCollection([5, 10, -3, 0]);
const sorter = new Sorter_1.Sorter(numCol);
sorter.sort();
console.log(numCol.data);
