//require('xmlhttprequest').XMLHttpRequest; 
const XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';


//urlApi ->Argumento
//callback ->la data o error que regresa.

function fetchData(urlApi, callback) {

  //usando el xmlhttprequest. método 1 para solicitar info a una API
  let xhttp = new XMLHttprequest(); //llamando/referenciando la const que definimos al principio

    //.open ->para abrir conexión con la API
  xhttp.open('GET', urlApi, true);

//1er Argumento -> GET -> Tipo de petición: obtener
//2do Argumento -> urlApi -> url que va utilizar
//3er Argumento -> true -> para habilitarlo

//.onreadystatechange ->parte de los métodos de xmlhttprequest
//Escuchando estados (0:4) de la solicitud para saber disponibilidad de la misma
  xhttp.onreadystatechange = function (event) { //el evento se llama 'readyState'
    if (xhttp.readyState === 4) {
            // estado UNSENT 0: no init. CLIENTE HA SIDO CREADO (.open) no ha sido llamado aun
            // estado OPENED 1: open() has been called
            // estado HEADERS_RECEIVED 2: send() ha sido llamado, y cabecera y estado están disponibles.
            // estado LOADING3: descargando: responseText contiene datos parciales.
            // estado DONE 4: completada la llamada
      if(xhttp.status === 200) { //200 es el tipo de solicitud al servidor 
                                  //https://developer.mozilla.org/es/docs/Web/HTTP/Status
          callback (null, JSON.parse(xhttp.responseText));
          //el primer argumento sera nulo
          //el seguNdo es una transformación de lo que recibimos que sera en texto (responseText)
          //a un objeto que es el JSON
        } else { //lógica de manejo de la info si hay error
          const err = new Error ('Nombre del error' + urlApi); //error en un elemento de la api
          return callback(err, null);
        }
      }
    }
  xhttp.send(); //esto para que se ejecute todo lo de arriba. Se envía la petición
}



fetchData(`${API}/products`, function (error1, data1){
	if (error1) return console.error(error1, data1);
	
	fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
		if (error2) return console.error(error2);

		fetchData(`${API}/categories/${data2.category?.id}`, function (error3, data3){
			if (error3) return console.error(error3);
			console.log(data1[0]);
			console.log(data2.title);
			console.log(data3.name);
		});
	});
});

// node clase-01/00-Callback/reto.js //en consola.