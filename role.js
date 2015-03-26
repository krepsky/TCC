var roles =[];
var roleAssociados = 0;
var casper = require('casper').create();

function getRoles(){
	return "(function(){ var elementos = document.querySelectorAll('*'), roles =[]; for(var i = 0; i < elementos.length; i++){ roles[i] = { role: elementos[i].getAttribute('role') } } return roles})";
}

casper.start('C:/Users/Krepsky/Documents/GitHub/gitHub/role.html');

casper.then(function(){
	roles = this.evaluate(getRoles());
});

casper.run(function(){
	this.echo("role : " + roles.length);
	for(var i = 0; i < roles.length; i++){
		this.echo("role[" + i + "] = " + roles[i].role);
		if(roles[i].role !== ""){
			roleAssociados ++;
		}
	}
	this.echo("Total de elementos : " + roles.length);
	this.echo("Total de roles : " + roleAssociados);
	this.echo("Total de roles associadas a um elemento : " + roleAssociados);
	this.echo("Total de elementos sem role associado : " + (roles.length - roleAssociados));
	this.exit();
});