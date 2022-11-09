// For TDD - start with a simple example and build from there - so starting with a collection of numbers
export class Sorter {
  // Remember this is a shortcut to assignment and member initilisation
  constructor(public collection: number[]) {}

  sort() {
    // First Implementation of Sort
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - (i - 1); j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}
