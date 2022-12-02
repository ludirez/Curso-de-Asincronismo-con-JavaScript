//para guardar los datos a la API

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data) {
    const response = fetch( urlAPI, { //a continuación un objeto
    method: 'POST',//tipo de método: GET para obtener, POST para enviar , PUT para actualizar, DELETE para eliminar
    mode: 'cors',//modo: permisos que va a tener. defecto 'cors'
    credentials: 'same-origin',//credenciales de necesitarlas
    headers:{ //cabeceras que se envía ne la solicitud por consola. es un objeto
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)//como se construye y se envía el cuerpo
    })
    return response;
}

const data = {
    'title': 'Pan con jamón',
    'price': 15,
    'description': 'Delicioso pan relleno con jamón de pollo',
    'categoryId': 1,
    'images': ['https://placeimg.com/640/480/any']
}

postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));

