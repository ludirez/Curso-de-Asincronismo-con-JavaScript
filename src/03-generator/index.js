//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
//https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-es

function* generadora () {
    yield 1;
    yield 2;
    yield 3;
}

const generador = generadora(); //se debe de crear una referencia a el mismo apra poder iterar

console.log(generador.next().value);
console.log(generador.next().value);
console.log(generadora().next().value);
console.log(generadora().next().value);

//ejercicio

function* iterar(unArreglo) {
    for (const value of unArreglo) {
        yield value
    }
}

const it = iterar(['Oscar', 'Luis', 'Maria']);
console.log(it.next().value);
console.log(it.next());
console.log(it.next());
console.log(it.next());