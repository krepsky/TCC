var divs =[];
var h1 = [];
var h2 = [];
var h3 = [];
var h4 = [];
var h5 = [];
var h6 = [];
var img = [];
var form = [];
var fieldset = [];
var legend = [];
var input = [];
var labels = [];
var script = [];
var aticle = [];
var section = [];
var nav = [];
var header = [];
var footer = [];
var video = [];
var audio = [];
var object = [];
var applet = [];
var table = [];
var tr = [];
var th = [];
var td = [];
var caption = [];
var style = [];
var links = [];
var li = [];

var casper = require('casper').create();

casper.start('C:/Users/Krepsky/Documents/NetBeansProjects/ProgWeb/public_html/Atividades/AtividadeV.html', function(){
  //Print the title
  this.echo(this.getTitle());
});

function gerar_funcoes (seletor) {
	return "(function () { return document.querySelectorAll(\"" + seletor + "\"); })";
}

//function gerar_funcoes (seletor, atributte){
//	return "(function () { retrun document.querySelectorAll(\"" + seletor + "\");})";
//}

//modo errado de fazer a
//function gerar_funcoes (seletor) {
	//return function () {
	//	return document.querySelectorAll(seletor);
//	};
//}



casper.then(function() {
    //Get array to links
    divs = this.evaluate(gerar_funcoes("div"));
    li = this.evaluate(gerar_funcoes("li"));
    h1 = this.evaluate(gerar_funcoes("h1"));
    h2 = this.evaluate(gerar_funcoes("h2"));
    h3 = this.evaluate(gerar_funcoes("h3"));
    h4 = this.evaluate(gerar_funcoes("h4"));
    h5 = this.evaluate(gerar_funcoes("h5"));
    h6 = this.evaluate(gerar_funcoes("h6"));
    img = this.evaluate(gerar_funcoes("img"));
    form = this.evaluate(gerar_funcoes("form"));
    fieldset = this.evaluate(gerar_funcoes("fieldset"));
    legend = this.evaluate(gerar_funcoes("legend"));
    input = this.evaluate(gerar_funcoes("input"));
    script = this.evaluate(gerar_funcoes("script"));
    article = this.evaluate(gerar_funcoes("article"));
    section = this.evaluate(gerar_funcoes("section"));
    nav = this.evaluate(gerar_funcoes("nav"));
    header = this.evaluate(gerar_funcoes("header"));
    footer = this.evaluate(gerar_funcoes("footer"));
    video = this.evaluate(gerar_funcoes("video"));
    audio = this.evaluate(gerar_funcoes("audio"));
    object = this.evaluate(gerar_funcoes("object"));
    applet = this.evaluate(gerar_funcoes("applet"));
    table = this.evaluate(gerar_funcoes("table"));
    tr = this.evaluate(gerar_funcoes("tr"));
    th = this.evaluate(gerar_funcoes("th"));
    td = this.evaluate(gerar_funcoes("td"));
    caption =this.evaluate(gerar_funcoes("caption"));
    style = this.evaluate(gerar_funcoes("style"));
    links = this.evaluate(gerar_funcoes("link"));

});

casper.run(function(){
  //Print links 
  this.echo(divs.length + ' - divs');
  this.echo(typeof divs + ' - tipo');
  for(var propriedade in divs){
  	this.echo(propriedade + " - " + divs[propriedade]);
  }
  this.echo(h1.length + ' - h1');
  this.echo(li.length + ' - li');
  this.echo(h2.length + ' - h2');
  this.echo(h3.length + ' - h3');
  this.echo(h4.length + ' - h4');
  this.echo(h5.length + ' - h5');
  this.echo(h6.length + ' - h6');
  this.echo(img.length + ' - img');
  this.echo(form.length + ' - form');
  this.echo(legend.length + ' - legend');
  this.echo(input.length + ' - input');
  this.echo(script.length + ' - script');
  this.echo(article.length + ' - article');
  this.echo(section.length + ' - section');
  this.echo(nav.length + ' - nav');
  this.echo(header.length + ' - header');
  this.echo(footer.length + ' - footer');
  this.echo(video.length + ' - video');
  this.echo(audio.length + ' - audio');
  this.echo(object.length + ' - object');
  this.echo(applet.length + ' - applet');
  this.echo(table.length + ' - table');
  this.echo(tr.length + ' - tr');
  this.echo(th.length + ' - th');
  this.echo(td.length + ' - td');
  this.echo(caption.length + ' - caption');
  this.echo(style.length + ' - style');
  this.echo(links.length + ' - links');
  this.exit();
});