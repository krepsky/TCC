//Declaração do objeto que contém todos os resultados das consultas.
var result = {};
var aux = "";

//getAllTagNameElements() realiza uma consulta na estrutura da página html e retorna um Array de objetos(elementsName) com o atributo tagName de todos os elementos especificados na página.
function getAllTagNameElements(){
	return "(function (){ var elements = document.querySelectorAll('*'), elementsName = []; for(var i = 0; i < elements.length; i++){ elementsName[i] = {tagName: elements[i].tagName.toLowerCase()} } return elementsName })";
}

//getAriaElements() realiza uma consulta na estrutura da página html e retorna um Array de objeto(arias) com os atributos: tagName, arialabel, arialabelledby e describedby de todos os elementos especificados na página.
function getAriaElements(){
	return "(function (){ var elements = document.querySelectorAll('*'), arias = []; for(var i = 0; i < elements.length; i++){ arias[i] = {tagName: elements[i].tagName, arialabel: elements[i].getAttribute('aria-label'), arialabelledby: elements[i].getAttribute('aria-labelledby'), ariadescribedby: elements[i].getAttribute('aria-describedby') } } return arias })";
}

//getAttributes(element, attribute) realiza uma consulta na estrutura da página html passando como parâmetros o nome do elemento e do atributo que será consultado, retornando um Array de objetos(result) com o atributo attribute do parâmetro element passado por parâmetro.
function getAttributes(element, attribute){
	return "(function(){ var elements = document.querySelectorAll(\"" + element + "\"), result = []; for(var i = 0; i < elements.length; i++){ result[i] ={ attribute: elements[i].getAttribute(\"" + attribute + "\")} } return result; })";
}

//getElements(element) realiza uma consulta na estrutura da página html e retorna um Array de objetos com todos os elementos passado no parâmetro element.
function getElements(element) {
	return "(function () { return document.querySelectorAll(\"" + element + "\"); })";
}

//getRoles() realiza uma consulta na estrutura da página html e retorna uma Array de objetos(roles) com o atributo role de todos os elementos especificados na página.
function getRoles(){
	return "(function(){ var elementos = document.querySelectorAll('*'), roles =[]; for(var i = 0; i < elementos.length; i++){ roles[i] = { role: elementos[i].getAttribute('role') } } return roles})";
}

//countAlts(imgs) conta quantos atributos alt do parâmetro imgs estão acessíveis retornando o contador countAltAcesisvel.
function countAlts(imgs){
	var countAltAcesisvel = 0;
	for(var i = 0; i < imgs.length; i++){
		if((imgs[i].attribute !== "null") && (imgs[i].attribute !== null) && (typeof imgs[i].attribute !== 'undefined') && (imgs[i].attribute !== "undefined")){
			countAltAcesisvel ++;
		}
	}
	return	countAltAcesisvel;
}

//countAriaElements(arias) conta quantos atributos label, labelledby e describedby do parâmetro arias estão acessíveis retornando o objeto countArias com os atributos countLabel com o total de aria-label, countLabelledby com o total de aria-labelledby e countDescribedby com o total de aria-describedby acessíveis.
function countAriaElements(arias){
	var countArias = {countLabelledby: 0, countLabel: 0, countDescribedby: 0};
		for(var i = 0; i < arias.length; i++){
			if((arias[i].arialabelledby.length > 0) && (arias[i].arialabelledby !== 'null') && (arias[i].arialabelledby !== null) && (typeof arias[i].arialabelledby !== 'undefined') && (arias[i].arialabelledby !== 'undefined')){
				countArias.countLabelledby++;
			}
			if((arias[i].arialabel.length > 0) && (arias[i].arialabel !== 'null') && (arias[i].arialabel !== null) && (typeof arias[i].arialabel !== 'undefined') && (arias[i].arialabel !== 'undefined')){
				countArias.countLabel++;
			}
			if((arias[i].ariadescribedby.length > 0) && (arias[i].ariadescribedby !== 'null') && (arias[i].ariadescribedby !== null) && (typeof arias[i].ariadescribedby !== 'undefined') && (arias[i].ariadescribedby !== 'undefined')){
				countArias.countDescribedby++;
			}
		}
	return countArias;
}

function countLabels(labels, inputs){
	var labelsAssociados = 0;
	for(var i = 0; i < labels.length; i++){
		for(var j = 0; j < inputs.length; j++){
			if(labels[i].attribute === inputs[j].attribute){
				labelsAssociados ++;
				break;
			}
		}
	}
	return labelsAssociados;
}

//countRoles(roles) conta quantos atributos role do parâmetro roles existem, retornando um Array(roleValue) com o total de cada role.
function countRoles(roles){
	var roleValue = [];
	for(var i = 0; i < roles.length; i++){
		if((roles[i].attribute) && (roleValue[roles[i].attribute] > 0)){
			roleValue[roles[i].attribute]++;
		}else{
			roleValue[roles[i].attribute] = 1;
		}
	}
	return roleValue;
}

//Instânciando o objeto casper.
var casper = require('casper').create();

//inicializando o casper com o site passado via linha de argumento.
//casper.start(casper.cli.get(0));
casper.start(casper.cli.get(0));

//Realizando as consultas.
casper.then(function(){
	result.div     	 = this.evaluate(getElements('div')).length;
	result.h1       = this.evaluate(getElements('h1')).length;
	result.h2       = this.evaluate(getElements('h2')).length;
	result.h3       = this.evaluate(getElements('h3')).length;
	result.h4       = this.evaluate(getElements('h4')).length;
	result.h5       = this.evaluate(getElements('h5')).length;
	result.h6       = this.evaluate(getElements('h6')).length;
	result.img      = this.evaluate(getElements('img')).length;
	result.form     = this.evaluate(getElements('form')).length;
	result.fieldset = this.evaluate(getElements('fieldset')).length;
	result.legend   = this.evaluate(getElements('legend')).length;
	result.label 	= this.evaluate(getElements('label')).length;
	result.input    = this.evaluate(getElements('input')).length;
	result.labelsAssociados = countLabels(this.evaluate(getAttributes("label", "for")), this.evaluate(getAttributes("input", "id")));
	result.script   = this.evaluate(getElements('script')).length;
	result.article  = this.evaluate(getElements('article')).length;
	result.section  = this.evaluate(getElements('section')).length;
	result.nav 	    = this.evaluate(getElements('nav')).length;
	result.footer 	= this.evaluate(getElements('footer')).length;
	result.video    = this.evaluate(getElements('video')).length;
	result.audio    = this.evaluate(getElements('audio')).length;
	result.object   = this.evaluate(getElements('object')).length;
	result.applet   = this.evaluate(getElements('applet')).length;
	result.table    = this.evaluate(getElements('table')).length;
	result.tr    	= this.evaluate(getElements('tr')).length;
	result.th    	= this.evaluate(getElements('th')).length;
	result.td    	= this.evaluate(getElements('td')).length;
	result.caption  = this.evaluate(getElements('caption')).length;
	result.style    = this.evaluate(getElements('style')).length;
	result.links    = this.evaluate(getElements('links')).length;
	result.ul    	= this.evaluate(getElements('ul')).length;
	result.ol    	= this.evaluate(getElements('ol')).length;
	result.li    	= this.evaluate(getElements('li')).length;
	result.dl    	= this.evaluate(getElements('dl')).length;
	result.dt    	= this.evaluate(getElements('dt')).length;
	result.dd    	= this.evaluate(getElements('dd')).length;
	result.alt 		= countAlts(this.evaluate(getAttributes('img', 'alt')));
	result.roles 	= countRoles(this.evaluate(getAttributes('*','role')));
	for(var role in result.roles){
		aux = aux + result.roles[role] + ",";
	}
	result.arias    = this.evaluate(getAriaElements());
	result.arialabel = countAriaElements(result.arias).countLabel;
	result.arialabelledby = countAriaElements(result.arias).countLabelledby;
	result.ariadescribedby = countAriaElements(result.arias).countDescribedby;
});
var texto = "";

//Exibindo os resultados.
casper.run(function(){
	this.echo(result.div    + "," + result.h1      + "," + result.h2       + "," + result.h3     + "," + result.h4     		   + "," + result.h5    + "," + result.h6 				+ "," + 
			  result.img    + "," + result.form    + "," + result.fieldset + "," + result.legend + "," + result.label  		   + "," + result.input + "," + result.labelsAssociados + "," + 
			  result.script + "," + result.article + "," + result.section  + "," + result.nav    + "," + result.footer 		   + "," + result.video + "," + result.audio 			+ "," + 
			  result.object + "," + result.applet  + "," + result.table    + "," + result.tr     + "," + result.th             + "," + result.td    + "," + result.caption			+ "," + 
			  result.style  + "," + result.links   + "," + result.ul  	   + "," + result.ol     + "," + result.li      	   + "," + result.dl    + "," + result.dt 				+ "," + 
			  result.dd 	+ "," + result.alt 	   + "," + aux 			   + result.arialabel    + "," + result.arialabelledby + "," + result.ariadescribedby);
			  
	this.exit();
}); 	