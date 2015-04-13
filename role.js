var roles =[];

var casper = require('casper').create();

function getRoles(){
	return "(function(){ var elementos = document.querySelectorAll('*'), roles =[]; for(var i = 0; i < elementos.length; i++){ roles[i] = { role: elementos[i].getAttribute('role') } } return roles})";
}

function countRoles(roles){
	var countRole = 0;
	for(var i = 0; i < roles.length; i++){
		if((roles[i].role.length > 0) && (roles[i].role !== "null") && (roles[i].role !== "undefined")){
			countRole ++;
		}
	}
	return countRole;
}

function getRoleValue(roles){
	var roleValue = {banner: 0, complementary: 0, contentinfo: 0, form: 0, main: 0, navigation: 0, search: 0, heading: 0};
	for(var i = 0; i < roles.length; i++){
		if((roles[i].role.length > 0) && (roles[i].role !== "null") && (roles[i].role !== "undefined")){
			switch(roles[i].role){
				case 'banner':
					roleValue.banner++;
					break;
				case 'complementary':
					roleValue.complementary++;
					break;
				case 'contentinfo':
					roleValue.contentinfo++;
					break;
				case 'form':
					roleValue.form++;
					break
				case 'main':
					roleValue.main++;
					break;
				case 'navigation':
					roleValue.navigation++;
					break;
				case 'search':
					roleValue.search++;
					break;
				case 'heading':
					roleValue.heading++;
					break;
				default:
					break;
			}
		}
	}
	return roleValue;
}

casper.start('C:/Users/Krepsky/Documents/GitHub/gitHub/role.html');

casper.then(function(){
	roles = this.evaluate(getRoles());
});

casper.run(function(){
	this.echo("...INFORMAÇÕES GERAIS...");
	this.echo("Total de elementos : " + roles.length);
	this.echo("Total de roles : " + countRoles(roles));
	this.echo("Total de roles associadas a um elemento : " + countRoles(roles));
	this.echo("Total de elementos sem role associado : " + (roles.length - countRoles(roles)));
	this.echo("...INFORMAÇÕES ESPECIFICAS...");
	this.echo("Total de role com valor banner: " + getRoleValue(roles).banner);
	this.echo("Total de role com valor complementary: " + getRoleValue(roles).complementary);
	this.echo("Total de role com valor contentinfo: " + getRoleValue(roles).contentinfo);
	this.echo("Total de role com valor form: " + getRoleValue(roles).form);
	this.echo("Total de role com valor main: " + getRoleValue(roles).main);
	this.echo("Total de role com valor navigation: " + getRoleValue(roles).navigation);
	this.echo("Total de role com valor search: " + getRoleValue(roles).search);
	this.echo("Total de role com valor heading: " + getRoleValue(roles).heading);
	this.echo("...ROLES...");
		for(var i = 0; i < roles.length; i++){
		this.echo("Role[" + i + "] - " + roles[i].role);
	}
	this.exit();
});