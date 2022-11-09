// tsc --init - will create a tsconfig.json and allow you to customise TS compiler settings
import { Sorter } from './Sorter/Sorter';

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
