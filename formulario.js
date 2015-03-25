var labels;
var inputs;
var contadorAssociados = 0;
var contadorNaoAssociados = 0;
var casper = require('casper').create();


function getAttribute(element, attribute){
	return "(function(){ var result = document.querySelectorAll(\"" + element + "\"), aux = []; for(var i = 0; i < result.length; i++){ aux[i] = { att: result[i].getAttribute(\"" + attribute + "\") } } return aux;})"
}

casper.start('C:/Users/Krepsky/Documents/NetBeansProjects/ProgWeb/public_html/Atividades/formulario.html');

casper.then(function(){
	labels = this.evaluate(getAttribute("label", "for"));
	inputs = this.evaluate(getAttribute("input", "id"));
	if(labels.length === inputs.length){
		for(var i = 0; i < inputs.length; i++){
			if(labels[i].att === inputs[i].att){
				contadorAssociados = contadorAssociados + 1;
			}else{
				contadorNaoAssociados = contadorNaoAssociados + 1;
			}
		}
	}
});

casper.run(function(){
	this.echo("Quantidade total de inputs : " + inputs.length);
	this.echo("Quantidade total de labels : " + labels.length);
	for(var i = 0; i < labels.length; i++){
		this.echo("label[" + i + "] : " + labels[i].att + " \t-->\t input[" + i + "] : " + inputs[i].att);
	}
	this.echo("Total de labels e inputs associados : " + contadorAssociados);
	this.echo("Total de labels e inputs nao associados : " + contadorNaoAssociados);
});