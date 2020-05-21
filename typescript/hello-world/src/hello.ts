interface Address {
	street: string,
	number?: number,
	postalCode: number
}

interface Persona {
	name: string,
	age: number
}

interface Perro {
	name: string,
	ladrar():void
}

interface Programador extends Persona {
	lenguajePreferido: string
	tomarCafe():void
	// prepararCafe():void
}

function start():void{
	let mensaje:string = "Hola";
	console.log(mensaje);
}
function saluda(name:string):string{
	return `Hola ${name}`;
}

function mostrarDireccion():void {
	let midireccion:Address = {
		street: "Calle de la amargura",
		postalCode: 21001
	}
	console.log(midireccion)
}

function crearProgramador(){
	/*
	let me:Programador = {
		name: "Álex",
		age: 25,
		lenguajePreferido: "Cobol"
	}
	*/
	let me = new Cool();
	//me.prepararCafe()
	me.tomarCafe()
}

class Cool implements Programador{
	name: string
	age: number
	lenguajePreferido: string
	tomarCafe(){
		this.prepararCafe()
		console.log("Toma café con el dedo índice hacia arriba")
	}
	private prepararCafe(){
		console.log("Cafe preparado de forma privada")
	}
}

class Geek implements Programador{
	name:string
	age:number
	lenguajePreferido: string
	tomarCafe(){
		console.log("Tomando café solo")
	}
	prepararCafe(){}
}

class Chiguagua implements Perro {
	name: string
	ladrar(){
		console.log("Guau guau")
	}
}

function declararArrayNumeros(){
	let arrayOfNumbers: Array<number|string>
	arrayOfNumbers.push("5");
}


// var saludo:string = saluda("Alex");
// console.log(saludo)

crearProgramador();