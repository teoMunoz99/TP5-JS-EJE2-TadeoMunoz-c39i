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
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            alert(`
                    <p>Pertenece a la generacion: Silent Generation</p>
                    <p>Rasgo característico: Austeridad</p>
                `);
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            alert(`
                    <p>Pertenece a la generacion: Baby Boom</p>
                    <p>Rasgo característico: Ambición</p>
                `)
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            alert(`
                    <p>Pertenece a la generacion: Generacion X</p>
                    <p>Rasgo característico: Obsesión por el éxito</p>
                `)
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            alert(`
                    <p>Pertenece a la generacion: Generacion Y (Millenials)</p>
                    <p>Rasgo característico: Frustración</p>
                `)
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            alert(`
                    <p>Pertenece a la generacion: Generacion Z</p>
                    <p>Rasgo característico: Irreverencia</p>
                `)
        }else {
            alert(`Todavía no pertenece a una generación`);
        } 
    }

    esMayorDeEdad() {

        if (this.edad >= 18) {
            alert(`Es mayor de edad`);
        } else {
            alert(`Es menor de edad`);
        }
    }

    mostrarDatos(){
        console.log(`
        <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Edad: ${this.edad}</li>
            <li>Dni : ${this.dni}</li>
            <li>Sexo : ${this.sexo}</li>
            <li>Peso : ${this.peso}</li>
            <li>Altura : ${this.altura}</li>
            <li>Año de nacimiento : ${this.anioNacimiento}</li>
        </ul>`)
    }
}

//Creo una sola vez un objeto persona para luego guardar o reemplazar ahi los datos ingredos
let datos = new Persona('nombre','edad','dni','sexo','peso','altura','año de nacimiento');

//Funciones

//creo que esta no la necesito al final
function asignarGeneracion(anio) {

    if (anio >= 1930 && anio <= 1948) {
        alert(`
                <p>Pertenece a la generacion: Silent Generation</p>
                <p>Rasgo característico: Austeridad</p>
            `);
    } else if (anio >= 1949 && anio <= 1968) {
        alert(`
                <p>Pertenece a la generacion: Baby Boom</p>
                <p>Rasgo característico: Ambición</p>
            `)
    } else if (anio >= 1969 && anio <= 1980) {
        alert(`
                <p>Pertenece a la generacion: Generacion X</p>
                <p>Rasgo característico: Obsesión por el éxito</p>
            `)
    } else if (anio >= 1981 && anio <= 1993) {
        alert(`
                <p>Pertenece a la generacion: Generacion Y (Millenials)</p>
                <p>Rasgo característico: Frustración</p>
            `)
    } else if (anio >= 1994 && anio <= 2010) {
        alert(`
                <p>Pertenece a la generacion: Generacion Z</p>
                <p>Rasgo característico: Irreverencia</p>
            `)
    }else {
        alert(`Todavía no pertenece a una generación`);
    } 
    
}

//con esta funcion guardo los datos que llegan del input
function guardarDatos(e){
    e.preventDefault();
    datos.nombre = document.getElementById('inputNombre').value;
    console.log(datos.nombre);
    datos.edad = document.getElementById('inputEdad').value;
    console.log(datos.edad);
    datos.dni = document.getElementById('inputDni').value;
    console.log(datos.dni);
    datos.sexo = document.getElementById('inputSexo').value;
    console.log(datos.sexo);
    datos.peso = document.getElementById('inputPeso').value;
    console.log(datos.peso);
    datos.altura = document.getElementById('inputAltura').value;
    console.log(datos.altura);
    datos.anioNacimiento = document.getElementById('inputAnioNacimiento').value;
    console.log(datos.anioNacimiento);
}

function mostrarGen(){
    alert(datos.mostrarGeneracion());
}

function mayorEdad(){
    alert(datos.esMayorDeEdad());
}

//=======Creo que en esta parte tengo el problema==============//
//tendria que poner como un boton que sea para comenzar y desaparezca guardando los datos
//despues que aparezcan los otros 2 mostrargen y mayoredad

//traigo datos del formulario a la variable llamada formulario 
let formulario = document.getElementById('formulario');

//Agrego manejador de eventos
formulario.addEventListener('submit', guardarDatos);

let btnGeneracion = document.getElementById('btn-cargarDatos');
btnGeneracion.addEventListener('click', mostrarGen);

let btnEdad = document.getElementById('btn-cargarDatos');
btnEdad.addEventListener('click', mayorEdad);
