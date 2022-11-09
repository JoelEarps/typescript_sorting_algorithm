// tsc --init - will create a tsconfig.json and allow you to customise TS compiler settings
import { Sorter } from './Sorter/Sorter';
import { NumbersCollection } from './Collections/NumbersCollection';
import { CharactersCollection } from './Collections/CharactersCollection';
import { LinkedList } from './Collections/LinkedList';

// Have to create an instance of sorter to extend any method of collection - to get around this you can
// Use Inheritance - class extends
const numCol = new NumbersCollection([5, 100, -3, 46]);
const charCol = new CharactersCollection('test');
const sorter = new Sorter(numCol);
const charSorter = new Sorter(charCol);
charSorter.sort();
sorter.sort();
console.log(numCol.data);
console.log(charCol.data);

const LL = new LinkedList();
LL.add(500);
LL.add(-10), LL.add(0);
const LLSorter = new Sorter(LL);
LLSorter.sort();
LL.print();
