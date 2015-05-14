//Declaração do objeto que contém todos os resultados das consultas.
var result = {};
var aux = "";
var sep = ",";
var fs = require('fs');
var urls = [ "https://web.archive.org/web/20050201182221/http://www.google.com",    "https://web.archive.org/web/20050730075405/http://www.google.com/", 
             "https://web.archive.org/web/20060131170714/http://www.google.com/",   "https://web.archive.org/web/20060731215816/http://www.google.com/",
             "https://web.archive.org/web/20070131220054/http://www.google.com/",   "https://web.archive.org/web/20070731162845/http://www9.google.com/", 
             "http://web.archive.org/web/20080131051219/http://www.google.com/",    "http://web.archive.org/web/20080730200402/http://www.google.com/",
             "http://web.archive.org/web/20090131094934/http://google.com/",        "http://web.archive.org/web/20090730202417/http://www.google.com/",
             "http://web.archive.org/web/20100131005725/http://www.google.com/",    "http://web.archive.org/web/20100731012926/http://www.google.com/",
             "http://web.archive.org/web/20110131012858/http://www.google.com/",    "http://web.archive.org/web/20110731003335/http://www.google.com/",
             "http://web.archive.org/web/20120131000058/http://www.google.com/",    "http://web.archive.org/web/20120731000321/http://www.google.com/",
             "http://web.archive.org/web/20130131000002/http://www.google.com/",    "http://web.archive.org/web/20130731000327/http://www.google.com/",
             "http://web.archive.org/web/20140110000030/https://www.google.com/",   "http://web.archive.org/web/20140731010335/http://www.google.com/",
             "http://web.archive.org/web/20150131005754/http://www.google.com/",    "http://web.archive.org/web/20150514000018/http://www.google.com/",
             //22 linhas no excel do google jan/2005 á maio/2015.
             "http://web.archive.org/web/20050806011211/http://facebook.com/",      "http://web.archive.org/web/20051231034823/http://www.facebook.com/",
             "http://web.archive.org/web/20060130101746/http://www.facebook.com/",  "http://web.archive.org/web/20060730085137/http://www.facebook.com/",
             "http://web.archive.org/web/20070129062108/http://www.facebook.com/",  "http://web.archive.org/web/20070712100506/http://www.facebook.com//",
             "http://web.archive.org/web/20080130203428/http://www.facebook.com/",  "http://web.archive.org/web/20080730182335/https://www.facebook.com/",
             "http://web.archive.org/web/20090130205521/http://www.facebook.com/",  "http://web.archive.org/web/20090731022014/http://www.facebook.com/",
             "http://web.archive.org/web/20100131025314/http://www.facebook.com/",  "http://web.archive.org/web/20100708190529/http://www.facebook.com/",
             "https://web.archive.org/web/20110226031043/http://www.facebook.com/",  "http://web.archive.org/web/20110731122611/http://www.facebook.com/",
             "http://web.archive.org/web/20120131014823/http://www.facebook.com/",  "https://web.archive.org/web/20120829023516/https://www.facebook.com/",
             "http://web.archive.org/web/20130130192234/https://www.facebook.com/", "http://web.archive.org/web/20130731001417/https://www.facebook.com/",
             "http://web.archive.org/web/20140131001428/https://www.facebook.com/", "http://web.archive.org/web/20140731011215/https://www.facebook.com/",
             "http://web.archive.org/web/20150131001300/https://www.facebook.com/", "http://web.archive.org/web/20150514120906/https://m.facebook.com/?_rdr&refsrc=https%3A%2F%2Fwww.facebook.com%2F",
             //22 linhas facebook ago/2005 á maio/2015
             "http://web.archive.org/web/20050428014715/http://www.youtube.com/", "http://web.archive.org/web/20051231053048/http://youtube.com/",
             "http://web.archive.org/web/20060131190006/http://www.youtube.com/", "http://web.archive.org/web/20060731142744/http://www.youtube.com/",
             "http://web.archive.org/web/20070131215857/http://www.youtube.com/", "http://web.archive.org/web/20070726004727/http://www.youtube.com/",
             "http://web.archive.org/web/20080130194043/http://it.youtube.com/", "http://web.archive.org/web/20080731235206/http://www.youtube.com/",
             "http://web.archive.org/web/20090131164021/http://www.youtube.com/", "http://web.archive.org/web/20090731071254/http://www.youtube.com/",
             "http://web.archive.org/web/20100131094838/http://www.youtube.com/", "http://web.archive.org/web/20100730025118/http://www.youtube.com/",
             "http://web.archive.org/web/20110131014430/http://youtube.com/", "http://web.archive.org/web/20110731000924/http://www.youtube.com/",
             "http://web.archive.org/web/20120131000842/http://www.youtube.com/", "http://web.archive.org/web/20120731000818/http://www.youtube.com/",
             "http://web.archive.org/web/20130131000241/https://www.youtube.com/", "http://web.archive.org/web/20130731000003/http://www.youtube.com/",
             "http://web.archive.org/web/20140131000224/http://www.youtube.com/", "http://web.archive.org/web/20140731004221/https://www.youtube.com/",
             "http://web.archive.org/web/20150131002322/https://www.youtube.com/", "http://web.archive.org/web/20150514011011/https://www.youtube.com/",
             //22 linhas de youtube desde abril/2005 á maio/2015
             "http://web.archive.org/web/20050130013612/http://yahoo.com", "http://web.archive.org/web/20050731091526/http://www.yahoo.com/",
             "http://web.archive.org/web/20060130145509/http://www.yahoo.com/", "http://web.archive.org/web/20060731192018/http://www.yahoo.com/",
             "http://web.archive.org/web/20070202002446/http://www.yahoo.com/", "http://web.archive.org/web/20070727100829/http://www.yahoo.com",
             "http://web.archive.org/web/20080131153709/http://www.yahoo.com/", "http://web.archive.org/web/20080731055839/http://www.yahoo.com/",
             "http://web.archive.org/web/20090131095939/http://www.yahoo.com/", "http://web.archive.org/web/20090730020649/http://www.yahoo.com/",
             "http://web.archive.org/web/20100131081810/http://m.www.yahoo.com/", "http://web.archive.org/web/20100731021431/http://www.yahoo.com/",
             "http://web.archive.org/web/20110131015219/http://www.yahoo.com/", "http://web.archive.org/web/20110731003221/http://www.yahoo.com/",
             "http://web.archive.org/web/20120131001728/http://www.yahoo.com/", "http://web.archive.org/web/20120731004630/http://www.yahoo.com/",
             "http://web.archive.org/web/20130131000718/http://www.yahoo.com/", "http://web.archive.org/web/20130731000155/http://www.yahoo.com/",
             "http://web.archive.org/web/20140131001246/https://www.yahoo.com/", "http://web.archive.org/web/20140731002623/https://www.yahoo.com/",
             "http://web.archive.org/web/20150131001752/http://www.yahoo.com/", "http://web.archive.org/web/20150513233212/https://www.yahoo.com/",
             //22 linhas de yahoo janeiro/2005 á maio/2015
             "https://web.archive.org/web/20050131005905/http://www.amazon.com/exec/obidos/subst/home/home.html", "https://web.archive.org/web/20050730232822/http://www.amazon.com/exec/obidos/subst/home/home.html",
             "https://web.archive.org/web/20060131000907/http://www.amazon.com/exec/obidos/subst/home/home.html", "https://web.archive.org/web/20060706055213/http://www.amazon.com/exec/obidos/subst/home/home.html",
             "https://web.archive.org/web/20070130004023/http://www.amazon.com/", "https://web.archive.org/web/20070731172336/http://www.amazon.com",
             "https://web.archive.org/web/20080131035227/http://www.amazon.com/", "https://web.archive.org/web/20080731142958/http://www.amazon.com/",
             "https://web.archive.org/web/20090131031644/http://www.amazon.com/", "https://web.archive.org/web/20090731123508/http://www.amazon.com/",
             "https://web.archive.org/web/20100131160212/http://www.amazon.com/", "https://web.archive.org/web/20100731014524/http://www.amazon.com/",
             "https://web.archive.org/web/20110131072923/http://www.amazon.com/", "https://web.archive.org/web/20110731004032/http://www.amazon.com/",
             "https://web.archive.org/web/20120131000749/http://www.amazon.com/", "https://web.archive.org/web/20120731042432/http://www.amazon.com/",
             "https://web.archive.org/web/20130131005336/http://www.amazon.com/", "https://web.archive.org/web/20130731010421/http://www.amazon.com/",
             "https://web.archive.org/web/20140131011830/http://www.amazon.com/", "https://web.archive.org/web/20140731014342/http://amazon.com/",
             "https://web.archive.org/web/20150131000952/http://www.amazon.com/", "https://web.archive.org/web/20150512234456/http://www.amazon.com/",
             // 22 linhas de amazon janeiro/2005 á maio/2015
             "https://web.archive.org/web/20050131093051/http://www.wikipedia.org/", "https://web.archive.org/web/20050731093015/http://www.wikipedia.org/",
             "https://web.archive.org/web/20060131091326/http://www.wikipedia.org/", "https://web.archive.org/web/20060731194034/http://www.wikipedia.org/",
             "https://web.archive.org/web/20070110025106/http://www.wikipedia.org/", "https://web.archive.org/web/20070727223135/http://wikipedia.org/",
             "https://web.archive.org/web/20080123082416/http://www.wikipedia.org/", "https://web.archive.org/web/20080729182305/http://wikipedia.org/",
             "https://web.archive.org/web/20090121021126/http://www.wikipedia.org/", "https://web.archive.org/web/20090730081838/http://www.wikipedia.org//",
             "https://web.archive.org/web/20100127185458/http://www.wikipedia.org/", "https://web.archive.org/web/20100730073448/http://www.wikipedia.org/",
             "https://web.archive.org/web/20110129004838/http://www.wikipedia.org/", "https://web.archive.org/web/20110731183919/http://www.wikipedia.org/",
             "https://web.archive.org/web/20120131001441/http://www.wikipedia.org/", "https://web.archive.org/web/20120731145321/http://www.wikipedia.org/",
             "https://web.archive.org/web/20130130220443/http://www.wikipedia.org/", "https://web.archive.org/web/20130730033042/http://www.wikipedia.org/",
             "https://web.archive.org/web/20140131052346/http://www.wikipedia.org/", "https://web.archive.org/web/20140731051921/http://www.wikipedia.org/",
             "https://web.archive.org/web/20150130232226/http://www.wikipedia.org/", "https://web.archive.org/web/20150513090030/http://www.wikipedia.org/",
             //22 linhas de wikipedia janeiro/2005 á maio/2015
             "https://web.archive.org/web/20050131094357/http://www.taobao.com/", "https://web.archive.org/web/20050731010120/http://www.taobao.com/",
             "https://web.archive.org/web/20060131094658/http://www.taobao.com/", "https://web.archive.org/web/20060718001603/http://www.taobao.com/",
             "https://web.archive.org/web/20070129085757/http://www.taobao.com/#Content", "https://web.archive.org/web/20070711172425/http://www.taobao.com/",
             "https://web.archive.org/web/20080222182953/http://www.taobao.com/", "https://web.archive.org/web/20080725103049/http://www.taobao.com/",
             "https://web.archive.org/web/20090130112627/http://www.taobao.com/", "https://web.archive.org/web/20090714082328/http://www.taobao.com/",
             "https://web.archive.org/web/20100122204433/http://www.taobao.com/", "https://web.archive.org/web/20100813112014/http://www.taobao.com/",
             "https://web.archive.org/web/20110131090536/http://www.taobao.com/index_global.php", "https://web.archive.org/web/20110731070754/http://www.taobao.com/index_global.php",
             "https://web.archive.org/web/20120131030057/http://www.taobao.com/", "https://web.archive.org/web/20120731073331/http://www.taobao.com/",
             "https://web.archive.org/web/20130130075849/http://www.taobao.com/", "https://web.archive.org/web/20130731014220/http://www.taobao.com/",
             "https://web.archive.org/web/20140125171025/http://www.taobao.com/market/global/index_new.php", "https://web.archive.org/web/20140730170834/http://www.taobao.com/market/global/index_new.php",
             "https://web.archive.org/web/20150131031116/http://www.taobao.com/market/global/index_new.php", "https://web.archive.org/web/20150512083029/http://www.taobao.com/market/global/index_new.php",
             //22 linhas de taobao janeiro/2005 á maio/2015
             "https://web.archive.org/web/20060930214639/http://twitter.com/", "https://web.archive.org/web/20061230202933/http://twitter.com/",
             "https://web.archive.org/web/20070129052251/http://twitter.com/", "https://web.archive.org/web/20070725182849/http://twitter.com/",
             "https://web.archive.org/web/20080131085850/http://twitter.com/", "https://web.archive.org/web/20080731045131/http://twitter.com/",
             "https://web.archive.org/web/20090130050425/https://twitter.com/", "https://web.archive.org/web/20090731184208/http://twitter.com/",
             "https://web.archive.org/web/20100128023221/http://twitter.com/", "https://web.archive.org/web/20100730054106/http://twitter.com/",
             "https://web.archive.org/web/20110131071116/http://twitter.com/", "https://web.archive.org/web/20110731003242/http://twitter.com/",
             "https://web.archive.org/web/20120131000050/http://twitter.com/", "https://web.archive.org/web/20120731000830/http://twitter.com/",
             "https://web.archive.org/web/20130131000554/http://twitter.com/", "https://web.archive.org/web/20130730003933/https://twitter.com/",
             "https://web.archive.org/web/20140131000621/https://twitter.com/", "https://web.archive.org/web/20140731005506/https://twitter.com/",
             "https://web.archive.org/web/20150131000652/https://twitter.com/", "https://web.archive.org/web/20150514024243/https://twitter.com",
             //20 linhas de twitter setembro/2006 á maio/2015
             "https://web.archive.org/web/20050131091652/http://www.qq.com/", "https://web.archive.org/web/20050730091503/http://www.qq.com/",
             "https://web.archive.org/web/20060131190243/http://www.qq.com/", "https://web.archive.org/web/20060720040430/http://www.qq.com/?",
             "https://web.archive.org/web/20070128105841/http://www.qq.com/?", "https://web.archive.org/web/20070711094126/http://www.qq.com/",
             "https://web.archive.org/web/20080110012559/http://www.qq.com/", "https://web.archive.org/web/20080818035239/http://www.qq.com/",
             "https://web.archive.org/web/20090126003457/http://www.qq.com/", "https://web.archive.org/web/20090722203527/http://www.qq.com/",
             "https://web.archive.org/web/20100119091652/http://www.qq.com/", "https://web.archive.org/web/20100710035003/http://www.qq.com/",
             "https://web.archive.org/web/20110129015111/http://www.qq.com/", "https://web.archive.org/web/20110731022323/http://www.qq.com/",
             "https://web.archive.org/web/20120126001633/http://www.qq.com/", "https://web.archive.org/web/20120731104606/http://www.qq.com/",
             "https://web.archive.org/web/20130131023957/http://www.qq.com/", "https://web.archive.org/web/20130730021627/http://qq.com/",
             "https://web.archive.org/web/20140131002025/http://www.qq.com/", "https://web.archive.org/web/20140731002624/http://www.qq.com/",
             "https://web.archive.org/web/20150131091846/http://qq.com/", "https://web.archive.org/web/20150514053839/http://www.qq.com/",
             //22 linhas de qq janeiro/2005 á maio/2015
             "https://web.archive.org/web/20050131093709/http://www.google.co.in/", "https://web.archive.org/web/20050731013640/http://www.google.co.in/",
             "https://web.archive.org/web/20060131090731/http://www.google.co.in/", "https://web.archive.org/web/20060721035716/http://www.google.co.in/",
             "https://web.archive.org/web/20070129115319/http://www.google.co.in/", "https://web.archive.org/web/20070714123744/http://www.google.co.in/#",
             "https://web.archive.org/web/20080126151402/http://www.google.co.in./", "https://web.archive.org/web/20080625025838/http://google.co.in/",
             "https://web.archive.org/web/20090115212328/http://www.google.co.in./", "https://web.archive.org/web/20090728062906/http://www.google.co.in/",
             "https://web.archive.org/web/20100131150937/http://www.google.co.in/", "https://web.archive.org/web/20100730103120/http://www.google.co.in/",
             "https://web.archive.org/web/20110131203826/http://www.google.co.in/", "https://web.archive.org/web/20110731014939/http://www.google.co.in/",
             "https://web.archive.org/web/20120131040222/http://www.google.co.in/", "https://web.archive.org/web/20120731012818/http://www.google.co.in/",
             "https://web.archive.org/web/20130131004854/http://www.google.co.in/", "https://web.archive.org/web/20130731001411/http://www.google.co.in/",
             "https://web.archive.org/web/20140131074026/http://www.google.co.in/", "https://web.archive.org/web/20140731000049/http://www.google.co.in/",
             "https://web.archive.org/web/20150131083825/http://www.google.co.in/", "https://web.archive.org/web/20150505001523/http://www.google.co.in/"];
             //22 linhas de google da india janeiro/2005 á maio/2015

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
//casper.start(casper.cli.get(0));

//Inicializando o casper com url fixa.
casper.start("", function(){
    this.echo(this.getTitle());
});

for(var i = 0; i < urls.length; i++){
    //Realizando as consultas.
    casper.thenOpen(urls[i], function(){
        result.div      = this.evaluate(getElements('div')).length;
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
        var texto = result.div             + "," + result.h1               + "," + result.h2                 + "," + result.h3                 + "," + result.h4                  + "," + result.h5                     + "," + result.h6                  + "," + 
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
    });
}

//Exibindo os resultados.
casper.run(function(){
    this.exit();
});     

                  
           