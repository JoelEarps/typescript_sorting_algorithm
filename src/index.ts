// tsc --init - will create a tsconfig.json and allow you to customise TS compiler settings
import { Sorter } from './Sorter/Sorter';
import { NumbersCollection } from './Collections/NumbersCollection';
import { CharactersCollection } from './Collections/CharactersCollection';
import { LinkedList } from './Collections/LinkedList';

// Have to create an instance of sorter to extend any method of collection - to get around this you can
// Use Inheritance - class extends
const numbersCollection = new NumbersCollection([3, -5, 0, 10]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charCollection = new CharactersCollection('YOur MuM');
charCollection.sort();
console.log(charCollection.data);
