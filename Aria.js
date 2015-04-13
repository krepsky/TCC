var arias = [];
var casper =  require('casper').create();

function getArias(){
	return "(function (){ var elements = document.querySelectorAll('*'), arias = []; for(var i = 0; i < elements.length; i++){ arias[i] = {tagName: elements[i].tagName, arialabel: elements[i].getAttribute('aria-label'), arialabelledby: elements[i].getAttribute('aria-labelledby'), ariadescribedby: elements[i].getAttribute('aria-describedby') } } return arias })";
}

function countArias(arias){
	var totalArias = {countLabelledby: 0, countLabel: 0, countDescribedby: 0};
	for(var i = 0; i < arias.length; i++){
		if((arias[i].arialabelledby.length > 0) && (arias[i].arialabelledby !== 'null') && (arias[i].arialabelledby !== null) && (arias[i].arialabelledby !== undefined) && (arias[i].arialabelledby !== 'undefined')){
			totalArias.countLabelledby++;
		}
		if((arias[i].arialabel.length > 0) && (arias[i].arialabel !== 'null') && ( arias[i].arialabel !== null) && (arias[i].arialabel !== undefined) && (arias[i].arialabel !== 'undefined')){
			totalArias.countLabel++;
		}
		if((arias[i].ariadescribedby.length > 0) && (arias[i].ariadescribedby !== 'null') && ( arias[i].ariadescribedby !== null) && (arias[i].ariadescribedby !== undefined) && (arias[i].ariadescribedby !== 'undefined')){
			totalArias.countDescribedby++;
		}
	}
	return totalArias;
}

casper.start('C:/Users/Krepsky/Documents/GitHub/gitHub/Aria.html');

casper.then(function(){
	arias = this.evaluate(getArias());
});

casper.run(function(){
	this.echo("...INFORMAÇÕES GERAIS...");
	this.echo("Total de elementos: " + arias.length);
	this.echo("Total de tag(s) com aria-label: " + countArias(arias).countLabel);
	this.echo("Total de tag(s) com aria-labelledby: " + countArias(arias).countLabelledby);
	this.echo("Total de tag(s) com aria-describedby: " + countArias(arias).countDescribedby);
	this.echo("...ARIAS-LABEL/LABELEDBY/DESCRIBEDBY...");
	for(var i = 0; i < arias.length; i++){
		if((arias[i].arialabelledby.length > 0) && (arias[i].arialabelledby !== 'null') && (arias[i].arialabelledby !== null) && (arias[i].arialabelledby !== undefined) && (arias[i].arialabelledby !== 'undefined')){
			this.echo("[aria-labelledby] - " + arias[i].arialabelledby);
		}
		if((arias[i].arialabel.length > 0) && (arias[i].arialabel !== 'null') && ( arias[i].arialabel !== null) && (arias[i].arialabel !== undefined) && (arias[i].arialabel !== 'undefined')){
			this.echo("[aria-label] - " + arias[i].arialabel);
		}
		if((arias[i].ariadescribedby.length > 0) && (arias[i].ariadescribedby !== 'null') && ( arias[i].ariadescribedby !== null) && (arias[i].ariadescribedby !== undefined) && (arias[i].ariadescribedby !== 'undefined')){
			this.echo("[aria-describedby] - " + arias[i].ariadescribedby);
		}
	}
	this.exit();
});