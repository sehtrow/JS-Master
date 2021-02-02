/**
 *  1.-
 */

const animales = {
    mascotas: ['perros', 'gatos', 'canarios', 'pez', 'serpiente'],
    eliminarMascota: function (tipo) {
        const index = this.mascotas.indexOf(tipo)
        if (index != -1) {
            this.mascotas.splice(index, 1);
            return this.mascotas
        }
    },
    eliminarUltimaMascota: function () {
        this.mascotas.pop()
        return this.mascotas
    },
    agregarMascota: function (nuevoTipo) {
        this.mascotas.push(nuevoTipo)
        return this.mascotas
    },
    contadorMascotas: function () {
        let contador = 0
        this.mascotas.forEach(function (mascota) {
            (mascota.endsWith('os')) ? contador++ : ''
        })
        return `En el arreglo hay ${contador} mascotas que terminan con 'os'`
    }
}

/**
 *  2.-
 */

const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
}

function fn1(trabajador) {
    const {
        nombre,
        empresa: {
            datos: {
                nombre: empresaNombre,
            },
            ubicación: {
                puesto,
            }
        },
        cargo,
        gustos,
        hijos,
    } = trabajador
    return `El trabajador ${nombre} trabaja en ${empresaNombre} con cargo ${cargo} y le gusta ${gustos[0]} y ${gustos[1]} ${gustos[2]} más, ${(hijos === null) ? 'no tiene hijos' : `${hijos} hijos`}`
}

function fn2(trabajador) {
    const {
        nombre,
        empresa: {
            ubicación: {
                comuna,
                puesto,
            },
            clientes,
        },
        cargo,
    } = trabajador
    return `El trabajador ${nombre} va a su trabajo en ${comuna}, es ${cargo} en el puesto ${puesto}, trabaja con ${clientes[0]} y ${clientes[1]}`
}