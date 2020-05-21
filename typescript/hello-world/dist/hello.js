function start() {
    let mensaje = "Hola";
    console.log(mensaje);
}
function saluda(name) {
    return `Hola ${name}`;
}
function mostrarDireccion() {
    let midireccion = {
        street: "Calle de la amargura",
        postalCode: 21001
    };
    console.log(midireccion);
}
function crearProgramador() {
    /*
    let me:Programador = {
        name: "Álex",
        age: 25,
        lenguajePreferido: "Cobol"
    }
    */
    let me = new Cool();
    //me.prepararCafe()
    me.tomarCafe();
}
class Cool {
    tomarCafe() {
        this.prepararCafe();
        console.log("Toma café con el dedo índice hacia arriba");
    }
    prepararCafe() {
        console.log("Cafe preparado de forma privada");
    }
}
class Geek {
    tomarCafe() {
        console.log("Tomando café solo");
    }
    prepararCafe() { }
}
class Chiguagua {
    ladrar() {
        console.log("Guau guau");
    }
}
function declararArrayNumeros() {
    let arrayOfNumbers;
    arrayOfNumbers.push("5");
}
// var saludo:string = saluda("Alex");
// console.log(saludo)
crearProgramador();
