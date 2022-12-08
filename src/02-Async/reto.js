import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//forma 1 para uso de async
async function fetchData(urlApi) {
	const response = await fetch(urlApi);
	const data = await response.json();
	return data;
	//ir por los datos, esperar por al transformación de los datos a json, retornar al usuario
}

//forma 2 para uso de async
const otraFunction = async (urlApi) =>{
	try {//aquí la lógica de lo queremos que suceda 'resuelve'
		const products = await fetchData(`${urlApi}/products`);
		const product = await fetchData(`${urlApi}/products/${products[0].id}`);
		const category = await fetchData(`${urlAPi}/categories/${product.category.id}`);

		console.log(products);
		console.log(product.title);
		console.log(category.name);
	} catch (error) {//acciones si hay reject
		console.error(error);
	}
}