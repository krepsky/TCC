var arias = [];
var countLabelledby = 0;
var countLabel = 0;
var countDescribedby = 0;
var casper =  require('casper').create();

function getArias(){
	return "(function (){ var elements = document.querySelectorAll('*'), arias = []; for(var i = 0; i < elements.length; i++){ arias[i] = {tagName: elements[i].tagName, arialabel: elements[i].getAttribute('aria-label'), arialabelledby: elements[i].getAttribute('aria-labelledby'), ariadescribedby: elements[i].getAttribute('aria-describedby') } } return arias })";
}

casper.start('C:/Users/Krepsky/Documents/GitHub/gitHub/Aria.html');

casper.then(function(){
	arias = this.evaluate(getArias());
});

casper.run(function(){
	this.echo("tamanho do arias: " + arias.length);
	for(var i = 0; i < arias.length; i++){
		if(arias[i].arialabelledby !== ""){
			this.echo("tagName: " + arias[i].tagName.toLowerCase() + "[aria-labelledby] = " + arias[i].arialabelledby);
			countLabelledby ++;
		}
		if(arias[i].arialabel !== ""){
			this.echo("tagName: " + arias[i].tagName.toLowerCase() + "[aria-label] = " + arias[i].arialabel);
			countLabel++;
		}
		if(arias[i].ariadescribedby !== ""){
			this.echo("tagName: " + arias[i].tagName.toLowerCase() + "[aria-describedby] = " + arias[i].ariadescribedby);
			countDescribedby++;
		}	
	}
	this.echo("Total de aria-label: " + countLabel);
	this.echo("Total de aria-labelledby: " + countLabelledby);
	this.echo("Total de aria-describedby: " + countDescribedby);
	this.exit();
});