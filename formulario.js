var labels;
var inputs;
var labelsAssociados = 0;
var casper = require('casper').create();


function getAttribute(element, attribute){
	return "(function(){ var result = document.querySelectorAll(\"" + element + "\"), aux = []; for(var i = 0; i < result.length; i++){ aux[i] = { att: result[i].getAttribute(\"" + attribute + "\") } } return aux;})"
}

casper.start('C:/Users/Krepsky/Documents/NetBeansProjects/ProgWeb/public_html/Atividades/formulario.html');

casper.then(function(){
	labels = this.evaluate(getAttribute("label", "for"));
	inputs = this.evaluate(getAttribute("input", "id"));
	if(labels.length === inputs.length){
		for(var i = 0; i < labels.length; i++){
			for(var j = 0; j < inputs.length; j++){
				if(labels[i].att === inputs[j].att){
					labelsAssociados ++;
					break;
				}
			}
		}
	}else if(labels.length > inputs.length){
		for(var i = 0; i < labels.length; i++){
			for(var j = 0; j < inputs.length; j++){
				if(labels[i].att === inputs[j].att){
					labelsAssociados ++;
					break;
				}
			}

		}
	}else{
		for(var i = 0; i < inputs.length; i++){
			for(var j = 0; j < labels.length; j++){
				if(inputs[i].att === labels[j].att){
					labelsAssociados++;
					break;
				}
			}
		}
	}
});

casper.run(function(){
	this.echo("Quantidade total de inputs : " + inputs.length);
	this.echo("Quantidade total de labels : " + labels.length);
	this.echo("Total de labels associados : " + labelsAssociados);
	this.echo("Total de inputs associados : " + labelsAssociados);//a quantidade é a mesma de inputs e labels associados, por isso deixei a mesma variavel.
	this.echo("Total de labels nao associados : " + (labels.length - labelsAssociados));
	this.echo("Total de inputs nao associados : " + (inputs.length - labelsAssociados));
	this.exit();
});