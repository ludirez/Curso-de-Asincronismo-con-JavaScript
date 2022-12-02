// fetchData() trabajando con apis en forma de promesas

// para poder seguir con las clases a partir de aca

//instalar en consola. npm i node-fetch
//  agregar en package.json. "type": "module"


// feat solo es para leer los datos

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi)
};
//Forma 1
  // fetchData(`${API}/products`)
  // .then(response => response.json())
  // .then(products => {console.log(products)} )
  // .then(()=>{console.log('hola')})
  // .catch(error => console.log(error));

// Forma 2
fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title)
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(algoPaso => console.log(algoPaso))
  .finally(()=>console.log('terminó la petición'));
