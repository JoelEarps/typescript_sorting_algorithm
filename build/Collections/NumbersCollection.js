"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("../Sorter/Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    // Accessor for length - using get
    get length() {
        return this.data.length;
    }
    // Goal of overal method is to decide whether to swap bth elements of a pair
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
