// tsc --init - will create a tsconfig.json and allow you to customise TS compiler settings
import { Sorter } from './Sorter/Sorter';
import { NumbersCollection } from './Collections/NumbersCollection';

const numCol = new NumbersCollection([5, 10, -3, 0]);
const sorter = new Sorter(numCol);
sorter.sort();
console.log(numCol.data);
