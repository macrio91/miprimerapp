$(document).on('click', '.link', function(){
	getContent($(this).attr('id'));
});


$(document).on('click', '#jsonp', function(){
	getJsonP()
});


/*

PLUGINS JQUERY:

json-server: Sirve para crear un servidor en base a un archivo json
faker: Sirve para generar datos random

node -v
npm 


e:
cd www
cd app
(cd www\app)
npm install json-server
ctrl+c

npm install -g json-server

JSON SERVER
json-server --watch db.json


GET:
$.ajax({
	url:'http://localhost:3000/alumnos',
	type:'get'
}).done(function(data){
console.log(data)
})



POST:
$.ajax({
	url:'http://localhost:3000/alumnos',
	type:'post',
	data:{id:5,nombre:'carlos'}
}).done(function(data){
console.log(data)
})

PUT:
$.ajax({
	url:'http://localhost:3000/alumnos/7',
	type:'put',
	data:{nombre:'carlos'}
}).done(function(data){
console.log(data)
})

DELETE:
$.ajax({
	url:'http://localhost:3000/alumnos/7',
	type:'delete',
}).done(function(data){
console.log(data)
})



FAKER:Generacion masiva de datos
npm install faker


*/


/*for (var i = 0; i < 100; i++) {
	var nombre = faker.name.findName();
	var email = faker.internet.email();
	var direccion = faker.address.country();
	var obj = {nombre:nombre, email: email, direccion:direccion}
	$.ajax({
		url:'http://localhost:3000/personas',
		type:'post',
		data: obj
	}).done(function(data){
		console.log(data)
	});
}*/

//jQuery es una funcion que contiene un objeto (fn) el cual a su vez contiene todos los metodos disponibles por lo que si queremos crear un plugin o funcionalidad nueva tenemos que extender el objeto que almacena todos los metodos

//https://learn.jquery.com/plugins/basic-plugin-creation/


$.fn.animacion=function(){
	//console.log(this);
	console.log('mi nuevo plugin');
	return this;
}

//Extensibilidad: Retornar la instancia del objeto jquery con el que vengo trabajando

//$('body').animacion().css('background','red');

//Compatibilidad de selectores
$.fn.animacion=function(){
	//console.log(this);
	/*
	this.each(function(index, el){
		el.codigo....
	});
	*/
	this.css('color', 'red');
	return this;
}




// Permitir configuraciones default
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
 
// Merge object2 into object1
//$.extend( object1, object2 );

/*var a = {};
window.a;*/

/*function animation(){$.fn.animacion=function(opciones){
	var defSet={
		"color":"red",
		"font-size":"24px"
	}
	var configuraciones = $.extend(true, {}, defSet, opciones);
	this.css({
		'color': configuraciones['color'],
		"font-size":configuraciones['font-size']
	});
	return this;
}}

animacion()*/

(function($){
	$.fn.animacion=function(opciones){
	var defSet={
		"color":"red",
		"font-size":"24px"
	}
	var configuraciones = $.extend(true, {}, defSet, opciones);
	this.css({
		'color': configuraciones['color'],
		"font-size":configuraciones['font-size']
	});
	return this;
	}
})(jQuery)



