import { greetings, hwu as question } from './import_classic';
import dima from './import_default';
import fullname, { logObj } from './import_both';
import { dimon } from './import_inline'


greetings()

console.log(question());

dima().getName()

console.log(fullname);
logObj();


dimon()