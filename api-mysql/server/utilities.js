/* '.png,.jpg,.svg' */
var utilities = {}

utilities.validarExtension = (ruta, extensionesValidas) => {
	let extension = ruta.substring(ruta.lastIndexOf('.') + 1).toLowerCase();
	let extensionValida = extensionesValidas.indexOf(extension);
    return extensionValida >= 0;
}

module.exports = utilities