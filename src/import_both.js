/*---------------------------------------------------------------*/
/* Default and Classic exports together
-----------------------------------------------------------------*/

const obj = {
    name: 'Dmytro',
    surname: 'Anikin'
}

function logObj() {
    console.log(obj);
}

export { obj as default, logObj }