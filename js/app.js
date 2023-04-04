//Clases
class Persona {
    //declaro las propiedades privadas
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;
    //armo el constructor
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNacimiento = anioNacimiento;
    }

    //Getters

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get dni() {
        return this.#dni;
    }
    get sexo() {
        return this.#sexo;
    }
    get peso() {
        return this.#peso;
    }
    get altura() {
        return this.#altura;
    }
    get anioNacimiento() {
        return this.#anioNacimiento;
    }

    //Setters

    set nombre(newNombre) {
        this.#nombre = newNombre;
    }

    set edad(newEdad) {
        this.#edad = newEdad;
    }
    set dni(newDni) {
        this.#dni = newDni;
    }
    set sexo(newSexo) {
        this.#sexo = newSexo;
    }
    set peso(newPeso) {
        this.#peso = newPeso;
    }
    set altura(newAltura) {
        this.#altura = newAltura;
    }
    set anioNacimiento(newAnioNacimiento) {
        this.#anioNacimiento = newAnioNacimiento;
    }

    //Metodos

    mostrarGeneracion() {

        if (this.anioNacimiento === '') {
            alert(`Debe completar el campo "Año de nacimiento"`);

        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            alert(`
                    Pertenece a la generacion: Silent Generation
                    Rasgo característico: Austeridad
                `);
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            alert(`
                    Pertenece a la generacion: Baby Boom
                    Rasgo característico: Ambición
                `)
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            alert(`
                    Pertenece a la generacion: Generacion X
                    Rasgo característico: Obsesión por el éxito
                `)
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            alert(`
                    Pertenece a la generacion: Generacion Y (Millenials)
                    Rasgo característico: Frustración
                `)
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            alert(`
                    Pertenece a la generacion: Generacion Z
                    Rasgo característico: Irreverencia
                `)
        } else {
            alert(`Todavía no pertenece a una generación`);
        }
    }

    esMayorDeEdad() {

        if (this.edad === '') {
            alert(`Debe completar el campo "Edad"`);
        } else if (this.edad >= 18) {
            alert(`Es mayor de edad`);
        } else {
            alert(`Es menor de edad`);
        }
    }

    mostrarDatos() {

        if (this.nombre === '') {
            alert(`Debe completar todo el formulario`);
        } else if (this.edad === '') {
            alert(`Debe completar todo el formulario`);
        } else if (this.dni === '') {
            alert(`Debe completar todo el formulario`);
        } else if (this.sexo === '') {
            alert(`Debe completar todo el formulario`);
        } else if (this.peso === '') {
            alert(`Debe completar todo el formulario`);
        } else if (this.altura === '') {
            alert(`Debe completar todo el formulario`);
        } else if (this.anioNacimiento === '') {
            alert(`Debe completar todo el formulario`);
        } else {
            alert(`
            
                Nombre: ${this.nombre}
                Edad: ${this.edad}
                Dni : ${this.dni}
                Sexo : ${this.sexo}
                Peso : ${this.peso}Kg
                Altura : ${this.altura}cm
                Año de nacimiento : ${this.anioNacimiento}
                
            `)
        }
    }
}

//Creo una sola vez un objeto persona para luego guardar ahi los datos ingredos
let datos = new Persona('', '', '', '', '', '', '');

//Funciones

//creo que esta no la necesito al final

//con esta funcion guardo los datos que llegan del input
function mostrarGen(e) {
    e.preventDefault();
    datos.anioNacimiento = document.getElementById('inputAnioNacimiento').value;
    console.log(datos.anioNacimiento);
    datos.mostrarGeneracion();
}

function mayEdad(e) {
    e.preventDefault();
    datos.edad = document.getElementById('inputEdad').value;
    console.log(datos.edad);
    datos.esMayorDeEdad();
}

function mostrarDat(e) {
    e.preventDefault();
    datos.nombre = document.getElementById('inputNombre').value;
    datos.edad = document.getElementById('inputEdad').value;
    datos.dni = document.getElementById('inputDni').value;
    datos.sexo = document.getElementById('inputSexo').value;
    datos.peso = document.getElementById('inputPeso').value;
    datos.altura = document.getElementById('inputAltura').value;
    datos.anioNacimiento = document.getElementById('inputAnioNacimiento').value;
    datos.mostrarDatos();

}

//=======Creo que en esta parte tengo el problema==============//
//tendria que poner como un boton que sea para comenzar y desaparezca guardando los datos
//despues que aparezcan los otros 2 mostrargen y mayoredad

//traigo datos del formulario a la variable llamada formulario 
let formulario = document.getElementById('btn-mostrarGeneracion');
formulario.addEventListener('click', mostrarGen);

let btnEdad = document.getElementById('btn-esMayorDeEdad');
btnEdad.addEventListener('click', mayEdad);

let btnDatos = document.getElementById('btn-mostrarDatos');
btnDatos.addEventListener('click', mostrarDat);
