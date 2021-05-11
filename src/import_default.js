/*---------------------------------------------------------------*/
/* Default export
-----------------------------------------------------------------*/
// Default exports are useful to export only a single object, function, variable.

function me() {
    const dimianni = 'Dmytro Anikin'

    return {
        getName: function () {
            console.log(dimianni);
        }
    }
}

export default me;