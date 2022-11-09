"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./Collections/NumbersCollection");
const CharactersCollection_1 = require("./Collections/CharactersCollection");
// Have to create an instance of sorter to extend any method of collection - to get around this you can
// Use Inheritance - class extends
const numbersCollection = new NumbersCollection_1.NumbersCollection([3, -5, 0, 10]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charCollection = new CharactersCollection_1.CharactersCollection('YOur MuM');
charCollection.sort();
console.log(charCollection.data);
