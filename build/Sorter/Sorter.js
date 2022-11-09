"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    // Remember this is a shortcut to assignment and member initilisation
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        // First Implementation of Sort
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - (i - 1); j++) {
                //If an array of numbers
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
// Bad solution - allow for checking for an array of numbers or strings - then if statements for if string or if number
// A union operator will show you the common methods and members available to both types
// Need to convince TS by using type guars
// This means if we need type guards for all types of solutions
// Better solution - comparing helper function and then a swapping function
// Wrap custom solution for array of numbers, strings, linked list
