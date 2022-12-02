//una función que regresa 2 funciones dentro. resolve y reject

const promise = new Promise(function (resolve, reject) {
    resolve('hey')
})
//ejemplo. contador de bacas
const cows = 9;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`tenemos ${cows} en la granja`)
    } else {
        reject('no contamos con esa cantidad en la granja')
    }
});

//then para encadenar ejecuciones de instrucciones.
//catch para capturar el error al suceder el reject. es obligatorio
countCows.then((result) => console.log(result)).catch((error)=>console.log(error)).finally(()=>console.log('FIN'));


//ejercicio
//se recibe 1 tiempo y un message. se debe desarrollar ocn una promesa.

const time = 3000
const message = 'sucedió tras 2 segundos'

function delay(time, message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, time)
    })
  }
  

console.log(`empezó a contar`);

delay(time, message).catch(err => console.log(err));

