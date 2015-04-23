var roles =[];
var roles2 = [];

var casper = require('casper').create();

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

casper.start('C:/Users/Krepsky/Documents/GitHub/gitHub/role.html');

casper.then(function(){
	roles = this.evaluate(getRoles());
	roles2 = getRoleValue(roles);
});

casper.run(function(){
	for(var role in roles2){
		this.echo("role[" + role + "] = " + roles2[role]);
	}
	this.exit();
});