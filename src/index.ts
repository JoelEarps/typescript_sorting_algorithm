// tsc --init - will create a tsconfig.json and allow you to customise TS compiler settings
import { Sorter } from './Sorter/Sorter';
import { NumbersCollection } from './Collections/NumbersCollection';
import { CharactersCollection } from './Collections/CharactersCollection';

const numCol = new NumbersCollection([5, 100, -3, 46]);
const charCol = new CharactersCollection('test');
const sorter = new Sorter(numCol);
const charSorter = new Sorter(charCol);
charSorter.sort();
sorter.sort();
console.log(numCol.data);
console.log(charCol.data);
