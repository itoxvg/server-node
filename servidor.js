var	servidor = require('http'); //Recibe una peticion y transorma en pag web
var url = require('url'); //permite interactuar la url 
var fs = require('fs');


function iniciar(enrutar, manejador){
	function arrancaServidor(requiere, respuesta){ //request, require

		var ruta = url.parse(requiere.url).pathname;

		if(ruta == "/"){
			ruta = "index.html";
		}

		console.log("Alguien se a conectado");

		// var contenido = enrutar(manejador,ruta,respuesta);

		var index = fs.readFileSync("www/"+ruta);

		var registro = fs.createWriteStream('registro.txt',{'flags':'a'}); 
		registro.write(ruta+'\n');

		respuesta.writeHead(200,{"Content-Type":"text/html"});
		respuesta.write(index); //regresa lo q la funcion retorna
		respuesta.end();
	}
	servidor.createServer(arrancaServidor).listen(8888);
}

exports.iniciar = iniciar;
