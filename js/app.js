//Funciones
function asignarGeneracion(anio) {

    if (anio >= 1930 && anio <= 1948) {
        document.write(`
                <p>Pertenece a la generacion: Silent Generation</p>
                <p>Rasgo característico: Austeridad</p>
            `)
    } else if (anio >= 1949 && anio <= 1968) {
        document.write(`
                <p>Pertenece a la generacion: Baby Boom</p>
                <p>Rasgo característico: Ambición</p>
            `)
    } else if (anio >= 1969 && anio <= 1980) {
        document.write(`
                <p>Pertenece a la generacion: Generacion X</p>
                <p>Rasgo característico: Obsesión por el éxito</p>
            `)
    } else if (anio >= 1981 && anio <= 1993) {
        document.write(`
                <p>Pertenece a la generacion: Generacion Y (Millenials)</p>
                <p>Rasgo característico: Frustración</p>
            `)
    } else if (anio >= 1994 && anio <= 2010) {
        document.write(`
                <p>Pertenece a la generacion: Generacion Z</p>
                <p>Rasgo característico: Irreverencia</p>
            `)
    }else {
        document.write(`Todavía no pertenece a una generación`);
    } 
    
}

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
        return asignarGeneracion(this.anioNacimiento);
    }

    esMayorDeEdad() {

        if (this.edad >= 18) {
            document.write(`Es mayor de edad`);
        } else {
            document.write(`Es menor de edad`);
        }
    }

    mostrarDatos(){
        document.write(`
        <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Edad: ${this.edad}</li>
            <li>Dni : ${this.dni}</li>
            <li>Sexo : ${this.sexo}</li>
            <li>Peso : ${this.peso}</li>
            <li>Altura : ${this.altura}</li>
            <li>Año de nacimiento : ${this.anioNacimiento}</li>
        </ul>
        `)
    }
}

