//el enrutador es el archivo que detecta lo que hay en la url y toma desiciones,
// ej. pag1 una devuelve una cosa, pag2 otra cosa
function enrutar(manejador,ruta, respuesta){
	console.log("Voy a rutear para "+ruta);
	if(typeof manejador[ruta] === 'function'){
		manejador[ruta](respuesta);
	}else{
		console.log("No existe una funcion para la ruta "+ruta); 
		//podemos ofrecer 404 
	}
}

exports.enrutar = enrutar;