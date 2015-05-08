//Declaração do objeto que contém todos os resultados das consultas.
var result = {};
var aux = "";
var sep = ",";
var fs = require('fs');

//getAllTagNameElements() realiza uma consulta na estrutura da página html e retorna um Array de objetos(elementsName) com o atributo tagName de todos os elementos especificados na página.
function getAllTagNameElements(){
    return "(function (){ var elements = document.querySelectorAll('*'), elementsName = []; for(var i = 0; i < elements.length; i++){ elementsName[i] = {tagName: elements[i].tagName.toLowerCase()} } return elementsName })";
}

//getAriaElements() realiza uma consulta na estrutura da página html e retorna um Array de objeto(arias) com os atributos: tagName, arialabel, arialabelledby e describedby de todos os elementos especificados na página.
function getAriaElements(){
    return "(function (){ var elements = document.querySelectorAll('*'), arias = []; for(var i = 0; i < elements.length; i++){ arias[i] = {tagName: elements[i].tagName, arialabel: elements[i].getAttribute('aria-label'), arialabelledby: elements[i].getAttribute('aria-labelledby'), ariadescribedby: elements[i].getAttribute('aria-describedby') } } return arias })";
}

//getAttributes(element, attribute) realiza uma consulta na estrutura da página html passando como parâmetros o nome do elemento e do atributo que será consultado, retornando um Array de objetos(result) com o atributo attribute do parâmetro element passado por parâmetro.
function getAttributes(element, attribute){
    return "(function(){ var elements = document.querySelectorAll(\"" + element + "\"), result = []; for(var i = 0; i < elements.length; i++){ result[i] ={ attribute: elements[i].getAttribute(\"" + attribute + "\")} } return result; })";
}

//getElements(element) realiza uma consulta na estrutura da página html e retorna um Array de objetos com todos os elementos passado no parâmetro element.
function getElements(element) {
    return "(function () { return document.querySelectorAll(\"" + element + "\"); })";
}

//countAlts(imgs) conta quantos atributos alt do parâmetro imgs estão acessíveis retornando o contador countAltAcesisvel.
function countAlts(imgs){
    var countAltAcesisvel = 0;
    for(var i = 0; i < imgs.length; i++){
        if((imgs[i].attribute !== "null") && (imgs[i].attribute !== null) && (typeof imgs[i].attribute !== 'undefined') && (imgs[i].attribute !== "undefined")){
            countAltAcesisvel ++;
        }
    }
    return  countAltAcesisvel;
}

//countAriaElements(arias) conta quantos atributos label, labelledby e describedby do parâmetro arias estão acessíveis retornando o objeto countArias com os atributos countLabel com o total de aria-label, countLabelledby com o total de aria-labelledby e countDescribedby com o total de aria-describedby acessíveis.
function countAriaElements(arias){
    var countArias = {countLabelledby: 0, countLabel: 0, countDescribedby: 0};
        for(var i = 0; i < arias.length; i++){
            if((arias[i].arialabelledby.length > 0) && (arias[i].arialabelledby !== 'null') && (arias[i].arialabelledby !== null) && (typeof arias[i].arialabelledby !== 'undefined') && (arias[i].arialabelledby !== 'undefined')){
                countArias.countLabelledby++;
            }
            if((arias[i].arialabel.length > 0) && (arias[i].arialabel !== 'null') && (arias[i].arialabel !== null) && (typeof arias[i].arialabel !== 'undefined') && (arias[i].arialabel !== 'undefined')){
                countArias.countLabel++;
            }
            if((arias[i].ariadescribedby.length > 0) && (arias[i].ariadescribedby !== 'null') && (arias[i].ariadescribedby !== null) && (typeof arias[i].ariadescribedby !== 'undefined') && (arias[i].ariadescribedby !== 'undefined')){
                countArias.countDescribedby++;
            }
        }
    return countArias;
}

function countLabels(labels, inputs){
    var labelsAssociados = 0;
    for(var i = 0; i < labels.length; i++){
        for(var j = 0; j < inputs.length; j++){
            if(labels[i].attribute === inputs[j].attribute){
                labelsAssociados ++;
                break;
            }
        }
    }
    return labelsAssociados;
}

//countRoles(roles) conta quantos atributos role do parâmetro roles existem, retornando um Objecto(countRoles) com o total de cada tipo de role.
function countRoles(roles){
    var countRoles = { alert: 0, alertdialog: 0, application:0, article:0, banner: 0, button:0, checkbox:0, columnheader:0, combobox:0, complementary:0, contentinfo:0, definition:0, dialog:0, directory:0, document:0, empty: 0, form:0, grid:0, gridcell:0, group:0, heading:0, img:0, link:0, listbox:0, listitem:0, log:0, main:0, marquee:0, math:0, menu:0, menubar:0, menuitem:0, menuitemcheckbox:0, menuitemradio:0, navigation:0, note:0, option:0, presentation:0, progressbar:0, radio:0, radiogroup:0, region:0, row:0, rowgroup:0, rowheader:0, scrollbar:0, search:0, separator:0, slider:0, spinbutton:0, status:0, tab:0, tablist:0, tabpanel:0, textbox:0, timer:0, toolbar:0, tooltip:0, tree:0, treegrid:0, treeitem:0}; 
    
    for(var i = 0; i < roles.length; i++){
        switch(roles[i].attribute){
            case 'alert':
                countRoles.alert++;
                break;
            case 'alertdialog':
                countRoles.alertdialog++;
                break;              
            case 'application':
                countRoles.application++;
                break;
            case 'article':
                countRoles.article++;
                break;      
            case 'banner':
                countRoles.banner++;
                break;
            case 'button':
                countRoles.button++;
                break;
            case 'checkbox':
                countRoles.checkbox++;
                break;
            case 'columnheader':
                countRoles.columnheader++;
                break;
            case 'combobox':
                countRoles.combobox++;
                break;
            case 'complementary':
                countRoles.complementary++
                break;
            case 'contentinfo':
                countRoles.contentinfo++;
                break;
            case 'definition':
                countRoles.definition++;
                break;
            case 'dialog':
                countRoles.dialog++;
                break;
            case 'directory':
                countRoles.directory++;
                break;                        
            case 'document':
                countRoles.document++;
                break;
            case 'form':
                countRoles.form++;
                break;
            case 'grid':
                countRoles.grid++;
                break;
            case 'gridcell':
                countRoles.gridcell++;
                break;
            case 'group':
                countRoles.group++;
                break;
            case 'heading':
                countRoles.heading;
                break;
            case 'img':
                countRoles.img++;
                break;
            case 'link':
                countRoles.link++;
                break;
            case 'listbox':
                countRoles.listbox++;
                break;
            case 'listitem':
                countRoles.listitem++;
                break;
            case 'log':
                countRoles.log++;
                break;
            case 'main':
                countRoles.main++;
                break;
            case 'marquee':
                countRoles.marquee++;
                break;
            case 'math':
                countRoles.math++;
                break;
            case 'menu':
                countRoles.menu++;
                break;                     
            case 'menubar':
                countRoles.menubar++;
                break;
            case 'menuitem':
                countRoles.menuitem;
                break;
            case 'menuitemcheckbox':
                countRoles.menuitemcheckbox;
                break;
            case 'menuitemradio':
                countRoles.menuitemradio++;
                break;
            case 'navigation':
                countRoles.navigation++;
                break;
            case 'note':
                countRoles.note++;
                break;
            case 'option':
                countRoles.option++;
                break;
            case 'presentation':
                countRoles.presentation++;
                break;
            case 'progressbar':
                countRoles.progressbar++;
                break;          
            case 'radio':
                countRoles.radio++;
                break;
            case 'radiogroup':
                countRoles.radiogroup++;
                break;
            case 'region':
                countRoles.region++;
                break;
            case 'row':
                countRoles.row++;
                break;
            case 'rowgroup':
                countRoles.rowgroup++;
                break;
            case 'rowheader':
                countRoles.rowheader++;
                break;
            case 'scrollbar':
                countRoles.scrollbar++;
                break;
            case 'search':
                countRoles.search++;
                break;
            case 'separator':
                countRoles.separator++;
                break;
            case 'slider':
                countRoles.slider++;
                break;
            case 'spinbutton':
                countRoles.spinbutton++;
                break;
            case 'status':
                countRoles.status++;                
                break;
            case 'tab':
                countRoles.tab++;
                break;
            case 'tablist':
                countRoles.tablist++;
                break;
            case 'tabpanel':
                countRoles.tabpanel++;
                break;
            case 'textbox':
                countRoles.textbox++;
                break;
            case 'timer':
                countRoles.timer++;
                break;
            case 'toolbar':
                countRoles.toolbar++;
                break;
            case 'tooltip':
                countRoles.tooltip++;
                break;
            case 'tree':
                countRoles.tree++;
                break;
            case 'treegrid':
                countRoles.treegrid++;
                break;
            case 'treeitem':
                countRoles.treeitem++;
                break;
            default:
                countRoles.empty++;
                break;
        }
    }   
    return countRoles;
}

//Instânciando o objeto casper.
var casper = require('casper').create();

//inicializando o casper com a url sendo passada via linha de argumento.
casper.start(casper.cli.get(0));
//Inicializando o casper com url fixa.
//casper.start("http://www.google.com.br");

//Realizando as consultas.
casper.then(function(){
    result.div      = this.evaluate(getElements('div')).length + "";
    result.h1       = this.evaluate(getElements('h1')).length;
    result.h2       = this.evaluate(getElements('h2')).length;
    result.h3       = this.evaluate(getElements('h3')).length;
    result.h4       = this.evaluate(getElements('h4')).length;
    result.h5       = this.evaluate(getElements('h5')).length;
    result.h6       = this.evaluate(getElements('h6')).length;
    result.img      = this.evaluate(getElements('img')).length;
    result.form     = this.evaluate(getElements('form')).length;
    result.fieldset = this.evaluate(getElements('fieldset')).length;
    result.legend   = this.evaluate(getElements('legend')).length;
    result.label    = this.evaluate(getElements('label')).length;
    result.input    = this.evaluate(getElements('input')).length;
    result.labelsAssociados = countLabels(this.evaluate(getAttributes("label", "for")), this.evaluate(getAttributes("input", "id")));
    result.script   = this.evaluate(getElements('script')).length;
    result.article  = this.evaluate(getElements('article')).length;
    result.section  = this.evaluate(getElements('section')).length;
    result.nav      = this.evaluate(getElements('nav')).length;
    result.footer   = this.evaluate(getElements('footer')).length;
    result.video    = this.evaluate(getElements('video')).length;
    result.audio    = this.evaluate(getElements('audio')).length;
    result.object   = this.evaluate(getElements('object')).length;
    result.applet   = this.evaluate(getElements('applet')).length;
    result.table    = this.evaluate(getElements('table')).length;
    result.tr       = this.evaluate(getElements('tr')).length;
    result.th       = this.evaluate(getElements('th')).length;
    result.td       = this.evaluate(getElements('td')).length;
    result.caption  = this.evaluate(getElements('caption')).length;
    result.style    = this.evaluate(getElements('style')).length;
    result.links    = this.evaluate(getElements('links')).length;
    result.ul       = this.evaluate(getElements('ul')).length;
    result.ol       = this.evaluate(getElements('ol')).length;
    result.li       = this.evaluate(getElements('li')).length;
    result.dl       = this.evaluate(getElements('dl')).length;
    result.dt       = this.evaluate(getElements('dt')).length;
    result.dd       = this.evaluate(getElements('dd')).length;
    result.alt      = countAlts(this.evaluate(getAttributes('img', 'alt')));
    result.roles    = countRoles(this.evaluate(getAttributes('*','role')));
    result.arias    = this.evaluate(getAriaElements());
    result.arialabel = countAriaElements(result.arias).countLabel;
    result.arialabelledby = countAriaElements(result.arias).countLabelledby;
    result.ariadescribedby = countAriaElements(result.arias).countDescribedby;
});

//Exibindo os resultados.
casper.run(function(){
   var texto = result.div              + "," + result.h1               + "," + result.h2                 + "," + result.h3                 + "," + result.h4                  + "," + result.h5                     + "," + result.h6                  + "," + 
               result.img              + "," + result.form             + "," + result.fieldset           + "," + result.legend             + "," + result.label               + "," + result.input                  + "," + result.labelsAssociados    + "," + 
               result.script           + "," + result.article          + "," + result.section            + "," + result.nav                + "," + result.footer              + "," + result.video                  + "," + result.audio               + "," + 
               result.object           + "," + result.applet           + "," + result.table              + "," + result.tr                 + "," + result.th                  + "," + result.td                     + "," + result.caption             + "," + 
               result.style            + "," + result.links            + "," + result.ul                 + "," + result.ol                 + "," + result.li                  + "," + result.dl                     + "," + result.dt                  + "," + 
               result.dd               + "," + result.alt              + "," + result.roles.alert        + "," + result.roles.alertdialog  + "," + result.roles.application   + "," + result.roles.article          + "," + result.roles.banner        + "," +
               result.roles.button     + "," + result.roles.checkbox   + "," + result.roles.columnheader + "," + result.roles.combobox     + "," + result.roles.complementary + "," + result.roles.contentinfo      + "," + result.roles.definition    + "," + 
               result.roles.dialog     + "," + result.roles.directory  + "," + result.roles.document     + "," + result.roles.form         + "," + result.roles.grid          + "," + result.roles.gridcell         + "," + result.roles.group         + "," + 
               result.roles.heading    + "," + result.roles.img        + "," + result.roles.link         + "," + result.roles.listbox      + "," + result.roles.listitem      + "," + result.roles.log              + "," + result.roles.main          + "," + 
               result.roles.marquee    + "," + result.roles.math       + "," + result.roles.menu         + "," + result.roles.menubar      + "," + result.roles.menuitem      + "," + result.roles.menuitemcheckbox + "," + result.roles.menuitemradio + "," + 
               result.roles.navigation + "," + result.roles.note       + "," + result.roles.option       + "," + result.roles.presentation + "," + result.roles.progressbar   + "," + result.roles.radio            + "," +  result.roles.radiogroup   + "," + 
               result.roles.region     + "," + result.roles.row        + "," + result.roles.rowgroup     + "," + result.roles.rowheader    + "," + result.roles.scrollbar     + "," + result.roles. search          + "," + result.roles.separator     + "," + 
               result.roles.slider     + "," + result.roles.spinbutton + "," + result.roles.status       + "," + result.roles.tab          + "," +  result.roles.tablist      + "," + result.roles.tabpanel         + "," + result.roles.textbox       + "," + 
               result.roles.timer      + "," + result.roles.toolbar    + "," + result.roles.tooltip      + "," + result.roles.tree         + "," +  result.roles.treegrid     + "," + result.roles.treeitem         + "," + result.arialabel           + "," + 
               result.arialabelledby   + "," + result.ariadescribedby + "\n";   
    this.echo(texto);
    fs.write('teste.csv',   texto, 'a');
    this.exit();
});     

                  
           