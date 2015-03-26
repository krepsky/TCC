var imgs = [];
var casper = require('casper').create();

function getAttributes(element, attribute){
	return "(function(){ var elements = document.querySelectorAll(\"" + element + "\"), result = []; for(var i = 0; i < elements.length; i++){ result[i] ={ attAlt: elements[i].getAttribute(\"" + attribute + "\")} } return result; })";
};

function countAlt(imgs){
	var count = 0;
	for(var i = 0; i < imgs.length; i++){
		if(imgs[i].attAlt !== ""){
			count ++;
		}
	}
	return	count;
}

casper.start('C:/Users/Krepsky/Documents/GitHub/gitHub/AtividadeII.html');

casper.then(function(){
	imgs = this.evaluate(getAttributes("img","alt"));
});

casper.run(function(){
	this.echo("Total de imgs : " + imgs.length);
	this.echo("Total de alts : " + countAlt(imgs));
	this.echo("Total de img com alt : " + countAlt(imgs));
	this.echo("Total de img sem alt : " + (imgs.length - countAlt(imgs)));
	for(var i = 0 ; i < imgs.length; i++){
		this.echo("img[" + i + "] --> Alt[" + i + "] - " + imgs[i].attAlt);
	}
	this.exit();
});
