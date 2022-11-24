//Es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción

function sum(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, cualquierNombreParaElCallback) {
    return cualquierNombreParaElCallback(num1, num2)
}

console.log(calc(2, 2, sum));

//Set Time out

setTimeout(function () {
    console.log('hola JavaScript');
}, 2000)

//ejemplo de setTimeout
function greeting(name) {
    console.log(`hola ${name}`);
}

setTimeout(greeting, 2000, 'Res')//otra manera
//es una función que recibe otra y un tiempo d espera

setTimeout(() => greeting('Dias'), 2000)//otra manera

setTimeout(() => {      //otra manera
    return greeting('luis');
}, 2000);