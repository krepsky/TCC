var input;
var label;
var testee;
var casper = require('casper').create();

function teste(){
	return "var b = (function () {
				var elementos_alvo = document.querySelectorAll(\""div"\"),
				retorno = [];
	
			for (var i = 0; i < elementos_alvo.length; i++){
				retorno[i] = {
					id: elementos_alvo[i].id,
					className: elementos_alvo[i].getAttribute(\""class"\"),
					alt: elementos_alvo[i].getAttribute(\""alt"\"),
					ariaLabelledBy: elementos_alvo[i].getAttribute(\""aria-labelledby"\")
			};
		}		
	return retorno;

	}());"
}

function gerar_funcoes (seletor) {
	return "(function () { return a = document.querySelectorAll(\"" + seletor + "\"); })";
}

function gerar_funcoes2 (seletor, atributo) {
	return "(function () { return document.getElementsByTagName(\"" + seletor + "\")[0].getAttribute(\"" + atributo + "\"); })";
}

casper.start('C:/Users/Krepsky/Documents/NetBeansProjects/ProgWeb/public_html/Atividades/AtividadeII.html', function(){
	console.log(this.getTitle());
});

casper.then(function (){
	testee = this.evaluate(teste);

	if(this.exists('label') && this.exists('input')){
		input = this.evaluate(gerar_funcoes2("input", "id"));
		label = this.evaluate(gerar_funcoes2("label","for"));
		if(input === label){
			this.echo("O label esta vinculado ao input");
		}else{
			this.echo("Elemento nao esta vinculado");
		}
	}else{
		this.echo("Elemento nao existe");
	}
});

casper.run(function(){
	this.echo("label: " + label);
	this.echo("input: " + input);
	this.exit();
});