/* Tarea 1 */

function tarea1(numero) {
    return (numero % 2 == 0) ? "par" : "impar";
}

/* Tarea 2 */

function tarea2(cadena) {
    return cadena.indexOf('e');
}

/* Tarea 3 */

function tarea3(valorSinIva) {
    var impuesto = 0.19;
    valorSinIva = valorSinIva + (impuesto * valorSinIva);
    return "El precio con impuesto es de $" + valorSinIva;
}

/* Tarea 4 */

function nuevoDado(nombrePersona) {
    return function () {
        return nombrePersona + " tiró un dado y salio " + (Math.floor(Math.random() * (7 - 1)) + 1);
    }
}

/* Tarea 5 */

function Persona(nombreCompleto, edad) {
    this.nombreCompleto = nombreCompleto;
    this.edad = edad;
}

Persona.prototype.guardarEnLocalStorage = function () {
    localStorage.setItem('nombreCompleto', this.nombreCompleto);
    localStorage.setItem('edad', this.edad);
    console.log(this.nombreCompleto + " sus datos han sido almacenado correctamente en localStorage");
}

Persona.prototype.guardarEnSessionStorage = function () {
    sessionStorage.setItem('nombreCompleto', this.nombreCompleto);
    sessionStorage.setItem('edad', this.edad);
    console.log(this.nombreCompleto + " sus datos han sido almacenado correctamente en sessionStorage");
}
