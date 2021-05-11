import { greetings, hwu as question } from './import_classic';
import dima from './import_default';
import fullname, { logObj } from './import_both';
import { dimon } from './import_inline'

/*---------------------------------------------------------------*/
/* From Classic export
-----------------------------------------------------------------*/
greetings()
console.log(question());

/*---------------------------------------------------------------*/
/* From Default export
-----------------------------------------------------------------*/
dima().getName()


/*---------------------------------------------------------------*/
/* From both Default and Classic export
-----------------------------------------------------------------*/
console.log(fullname);
logObj();

/*---------------------------------------------------------------*/
/* From Inline export
-----------------------------------------------------------------*/
dimon()