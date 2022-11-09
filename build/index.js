"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tsc --init - will create a tsconfig.json and allow you to customise TS compiler settings
const Sorter_1 = require("./Sorter/Sorter");
const sorter = new Sorter_1.Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
