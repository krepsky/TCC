var elementos = [];
var elementosBasicos = [];
var roles =[];
var roles2 = [];
var arias = [];
var imgs = [];
var labels;
var inputs;
var labelsAssociados = 0;

function getAttribute(element, attribute){
	return "(function(){ var result = document.querySelectorAll(\"" + element + "\"), aux = []; for(var i = 0; i < result.length; i++){ aux[i] = { att: result[i].getAttribute(\"" + attribute + "\") } } return aux;})"
}

function getAttributes(element, attribute){
	return "(function(){ var elements = document.querySelectorAll(\"" + element + "\"), result = []; for(var i = 0; i < elements.length; i++){ result[i] ={ attAlt: elements[i].getAttribute(\"" + attribute + "\")} } return result; })";
};

function countAlt(imgs){
	var count = 0;
	for(var i = 0; i < imgs.length; i++){
		if((imgs[i].attAlt.length > 0) && (imgs[i].attAlt !== "null") && (imgs[i].attAlt !== null) && (imgs[i].attAlt !== "undefined") && (imgs[i].attAlt !== undefined)){
			count ++;
		}
	}
	return	count;
}

function countAltAcesisvel(imgs){
	var countAltAcesisvel = 0;
	for(var i = 0; i < imgs.length; i++){
		if((imgs[i].attAlt !== "null") && (imgs[i].attAlt !== null) && (typeof imgs[i].attAlt !== 'undefined') && (imgs[i].attAlt !== "undefined") && (imgs[i].attAlt !== undefined)){
			countAltAcesisvel ++;
		}
	}
	return	countAltAcesisvel;
}

function getArias(){
	return "(function (){ var elements = document.querySelectorAll('*'), arias = []; for(var i = 0; i < elements.length; i++){ arias[i] = {tagName: elements[i].tagName, arialabel: elements[i].getAttribute('aria-label'), arialabelledby: elements[i].getAttribute('aria-labelledby'), ariadescribedby: elements[i].getAttribute('aria-describedby') } } return arias })";
}

function countArias(arias){
	var totalArias = {countLabelledby: 0, countLabel: 0, countDescribedby: 0};
	for(var i = 0; i < arias.length; i++){
		if((arias[i].arialabelledby.length > 0) && (arias[i].arialabelledby !== 'null') && (arias[i].arialabelledby !== null) && (typeof arias[i].arialabelledby !== 'undefined') && (arias[i].arialabelledby !== 'undefined')){
			totalArias.countLabelledby++;
		}
		if((arias[i].arialabel.length > 0) && (arias[i].arialabel !== 'null') && (arias[i].arialabel !== null) && (typeof arias[i].arialabel !== 'undefined') && (arias[i].arialabel !== 'undefined')){
			totalArias.countLabel++;
		}
		if((arias[i].ariadescribedby.length > 0) && (arias[i].ariadescribedby !== 'null') && (arias[i].ariadescribedby !== null) && (typeof arias[i].ariadescribedby !== 'undefined') && (arias[i].ariadescribedby !== 'undefined')){
			totalArias.countDescribedby++;
		}
	}
	return totalArias;
}

function getRoles(){
	return "(function(){ var elementos = document.querySelectorAll('*'), roles =[]; for(var i = 0; i < elementos.length; i++){ roles[i] = { role: elementos[i].getAttribute('role') } } return roles})";
}

function getRoleValue(roles){
	var roleValue = [];
	for(var i = 0; i < roles.length; i++){
		if((roles[i].role) && (roleValue[roles[i].role] > 0)){
			roleValue[roles[i].role]++;
		}else{
			roleValue[roles[i].role] = 1;
		}
	}
	return roleValue;
}

function countElements(seletor) {
	return "(function () { return document.querySelectorAll(\"" + seletor + "\"); })";
}

function getAllTag(){
	return "(function (){ var elements = document.querySelectorAll('*'), elementsName = []; for(var i = 0; i < elements.length; i++){ elementsName[i] = {tagName: elements[i].tagName.toLowerCase()} } return elementsName })";
}

var casper = require('casper').create();

casper.start('C:/Users/Krepsky/Documents/NetBeansProjects/ProgWeb/public_html/Atividades/AtividadeII.html');

casper.then(function(){
	imgs = this.evaluate(getAttributes("img","alt"));
	arias = this.evaluate(getArias());
	elementos = this.evaluate(getAllTag());
	roles = this.evaluate(getRoles());
	roles2 = getRoleValue(roles);
	for(var i = 0; i < elementos.length; i++){
		if((elementos[i].tagName) && elementosBasicos[elementos[i].tagName] > 0){
		}else{
			elementosBasicos[elementos[i].tagName] = this.evaluate(countElements(elementos[i].tagName)).length;
		}
	}
	labels = this.evaluate(getAttribute("label", "for"));
	inputs = this.evaluate(getAttribute("input", "id"));
	for(var i = 0; i < labels.length; i++){
		for(var j = 0; j < inputs.length; j++){
			if(labels[i].att === inputs[j].att){
				labelsAssociados ++;
				break;
			}
		}
	}
});

casper.run(function(){
	for(var elemento in elementosBasicos){
		this.echo(elemento + " - " + elementosBasicos[elemento]);
	}
	for(var role in roles2){
		this.echo("role[" + role + "] = " + roles2[role]);
	}
	this.echo("Total de tag(s) com aria-label: " + countArias(arias).countLabel);
	this.echo("Total de tag(s) com aria-labelledby: " + countArias(arias).countLabelledby);
	this.echo("Total de tag(s) com aria-describedby: " + countArias(arias).countDescribedby);
	this.echo("DESCONSIDERANDO VALORES VAZIO...");
	this.echo("Total de imgs : " + imgs.length);
	this.echo("Total de alts : " + countAlt(imgs));
	this.echo("Total de img com alt : " + countAlt(imgs));
	this.echo("Total de img sem alt : " + (imgs.length - countAlt(imgs)));
	//Considerando valores vazio.
	this.echo("CONSIDERANDO VALORES VAZIO...");
	this.echo("Total de imgs : " + imgs.length);
	this.echo("Total de alt acessivel(veis) : " + countAltAcesisvel(imgs));
	this.echo("Total de img com alt acessivel(veis) : " + countAltAcesisvel(imgs)); 
	this.echo("Total de img sem alt acessivel(veis) : " + (imgs.length - countAltAcesisvel(imgs)));
	this.echo("VALORES DOS ATRIBUTOS ALT");
	for(var i = 0 ; i < imgs.length; i++){
		this.echo("img[" + i + "] --> Alt[" + i + "] - " + imgs[i].attAlt);
	}
	this.echo("Quantidade total de inputs : " + inputs.length);
	this.echo("Quantidade total de labels : " + labels.length);
	this.echo("Total de labels associados : " + labelsAssociados);
	this.echo("Total de inputs associados : " + labelsAssociados);//a quantidade é a mesma de inputs e labels associados, por isso deixei a mesma variavel.
	this.echo("Total de labels nao associados : " + (labels.length - labelsAssociados));
	this.echo("Total de inputs nao associados : " + (inputs.length - labelsAssociados));
	this.exit();
});