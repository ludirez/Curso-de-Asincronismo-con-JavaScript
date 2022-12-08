
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function
//La declaración de función async define una función asíncrona, la cual devuelve un objeto
//

const fnAsync = () => {
    return new Promise((resuelve, noResuelve)=>{
        //if ternario
        (true)
        ?setTimeout(() => {
            resuelve('Async')
        }, 3000)
        : noResuelve(new Error('Algo salio mal'))
    })
}

const otraFunction = async () => {
    const esperaPor = await fnAsync()
    console.log(esperaPor);
    console.log('saludo');
}

console.log('empieza el llamado');
otraFunction()
console.log('termina el llamado');

// empieza el llamado
// termina el llamado
// Async
// saludo