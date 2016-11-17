function getContent(data){
	var buffer_url = data;
	$.ajax({url:buffer_url+'.html'}).done(function(data){
		renderHTML(data);
	}).fail('Hubo un problema');
}

function renderHTML(data){
	$('main').empty().css({'opacity':0}).append(data).css('opacity',1);
}


function getJsonP(){
	var script = document.createElement('script');
	script.src='http://hage.com.ar?alumnos=getAll';
	document.body.appendChild(script);
}


function parseJson(obj){
	//nodo.remove(node);
	var buff_texto = JSON.stringify(obj);
	for(x in obj){
		console.log(obj[x].id);
		var texto = document.createTextNode(x);
		var div = document.createElement('div');
		div.appendChild(texto);
		document.querySelector('main').appendChild(div);
	}
	
}