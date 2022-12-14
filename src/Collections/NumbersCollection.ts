import { Sorter } from '../Sorter/Sorter';
import { Sortable } from '../Sortable/Sortable';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // Accessor for length - using get

  get length(): number {
    return this.data.length;
  }

  // Goal of overal method is to decide whether to swap bth elements of a pair
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
