//para guardar los datos a la API

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data) {
    const response = fetch( urlAPI, { //a continuación un objeto
    method: 'PUT',//tipo de método: GET para obtener, POST para enviar , PUT para actualizar, DELETE para eliminar
    mode: 'cors',//modo: permisos que va a tener. defecto 'cors'
    credentials: 'same-origin',//credenciales de necesitarlas
    headers:{ //cabeceras que se envía ne la solicitud por consola. es un objeto
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)//como se construye y se envía el cuerpo
    })
    return response;
}


//--------ENVIANDO con method POST
// const data = {//#219
//     'title': 'Pan con jamón',
//     'price': 155,
//     'description': 'Delicioso pan relleno con jamón de pollo',
//     'categoryId': 1,
//     'images': ['https://placeimg.com/640/480/any']
// }

// postData(`${API}/products`, data)
// .then(response => response.json())
// .then(data => console.log(data));

//--------EDITANDO EL RECIÉN ENVIADO con method PUT
const data = {//HAY QUE SABER la posición del producto en el array #219
    'title': 'Pan con jamón y queso',
    'price': 200
}
postData(`${API}/products/219`, data)//e ingresarle aquí su posición
.then(response => response.json())
.then(data => console.log(data));