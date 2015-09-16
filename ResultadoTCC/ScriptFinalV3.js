//Declaração do objeto que contém todos os resultados das consultas.
var result = {};
var fs = require('fs');
/*

*/
var urls = [//'https://web.archive.org/web/20050629105649/http://www.google.com/'
            //'https://web.archive.org/web/20051231125518/http://www.google.com/'
            //'https://web.archive.org/web/20060629044206/http://www.google.com/'
            //'https://web.archive.org/web/20061231074214/http://www.google.com/'
            //'https://web.archive.org/web/20070629074743/http://www.google.com/'
            //'https://web.archive.org/web/20071227140401/http://www.google.com/'
            //'https://web.archive.org/web/20080625142603/http://www.google.com/'
            //'https://web.archive.org/web/20081231015557/http://www.google.com/'
            //'https://web.archive.org/web/20090630021023/http://www.google.com/'
            //'https://web.archive.org/web/20091231063506/http://www.google.com/'
            //'https://web.archive.org/web/20100630153309/http://www.google.com/'
            //'https://web.archive.org/web/20101230033904/http://www.google.com/'
            //'https://web.archive.org/web/20110630013155/http://www.google.com/'
            //'https://web.archive.org/web/20111230000404/https://www.google.com/'
            //'https://web.archive.org/web/20120630000118/https://www.google.com/'
            //'https://web.archive.org/web/20121230001430/http://www.google.com/'
            //'https://web.archive.org/web/20130630002544/http://www.google.com/'
            //'https://web.archive.org/web/20130630002544/http://www.google.com/'
            //'https://web.archive.org/web/20131230000006/http://www.google.com/'
            //'https://web.archive.org/web/20140520000146/http://www.google.com/'
            //'https://web.archive.org/web/20141203135513/https://www.google.com'
            //'https://web.archive.org/web/20140520000146/http://www.google.com/'
            //'https://web.archive.org/web/20141203135513/https://www.google.com'
            //'https://web.archive.org/web/20150630110703/https://www.google.com/'
            //'https://web.archive.org/web/20150812000010/http://www.google.com/'

            //'https://web.archive.org/web/20050828205250/http://facebook.com/'
            //'https://web.archive.org/web/20051231034823/http://www.facebook.com/'
            //'https://web.archive.org/web/20060628200832/http://www.facebook.com/'
            //'https://web.archive.org/web/20061229172927/http://www.facebook.com/'
            //'https://web.archive.org/web/20070630042510/http://www.facebook.com/'
            //'https://web.archive.org/web/20071227060510/http://www.facebook.com/'
            //'https://web.archive.org/web/20080625145401/http://www.facebook.com/'
            //'https://web.archive.org/web/20081224065634/http://www.facebook.com/'
            //'https://web.archive.org/web/20090629022049/http://www.facebook.com//'
            //'https://web.archive.org/web/20091230085626/http://www.facebook.com/'
            //'https://web.archive.org/web/20100618211610/http://www.facebook.com/'
            //'https://web.archive.org/web/20100929171227/https://www.facebook.com/'
            //'https://web.archive.org/web/20110629013119/http://www.facebook.com/'
            //'https://web.archive.org/web/20111229003536/http://www.facebook.com/'
            //'https://web.archive.org/web/20120629023631/https://www.facebook.com/'
            //'https://web.archive.org/web/20121228025355/https://www.facebook.com/'
            //'https://web.archive.org/web/20130628000210/https://www.facebook.com/'
            //'https://web.archive.org/web/20131227003412/https://www.facebook.com/'
            //'https://web.archive.org/web/20140627233718/https://www.facebook.com/'
            //'https://web.archive.org/web/20141214221421/https://www.facebook.com/'
            //'https://web.archive.org/web/20150628004255/https://www.facebook.com/'
            
            //'https://web.archive.org/web/20050629030521/http://www.youtube.com/'
            //'https://web.archive.org/web/20051220073213/http://www.youtube.com/'
            //'https://web.archive.org/web/20060622215407/http://www.youtube.com/'
            //'https://web.archive.org/web/20061227222717/http://www.youtube.com/'
            //'https://web.archive.org/web/20070625121032/http://youtube.com/'
            //'https://web.archive.org/web/20071226194420/http://youtube.com/'
            //'https://web.archive.org/web/20080625193704/http://youtube.com/'
            //'https://web.archive.org/web/20081225045553/http://www.youtube.com/'
            //'https://web.archive.org/web/20090625012521/http://www.youtube.com/'
            //'https://web.archive.org/web/20091227095944/http://www.youtube.com/'
            //'https://web.archive.org/web/20100625130706/http://www.youtube.com/'
            //'https://web.archive.org/web/20101225045211/http://www.youtube.com//'
            //'https://web.archive.org/web/20110625121738/http://www.youtube.com/'
            //'https://web.archive.org/web/20111225014304/http://www.youtube.com/'
            //'https://web.archive.org/web/20120625013809/http://www.youtube.com/'
            //'https://web.archive.org/web/20121225002526/https://www.youtube.com/'
            //'https://web.archive.org/web/20130625001712/https://www.youtube.com/'
            //'https://web.archive.org/web/20131225002314/http://www.youtube.com/'
            //'https://web.archive.org/web/20140625001553/http://www.youtube.com/'
            //'https://web.archive.org/web/20141225001538/https://www.youtube.com/'
            //'https://web.archive.org/web/20150625001839/https://www.youtube.com/'

            //'https://web.archive.org/web/20050625053654/http://www.yahoo.com/'
            //'https://web.archive.org/web/20051225034351/http://www.yahoo.com/?'
            //'https://web.archive.org/web/20060626191741/http://www.yahoo.com/'
            //'https://web.archive.org/web/20061224175139/http://www.yahoo.com/'
            //'https://web.archive.org/web/20070625111152/http://www.yahoo.com/'
            //'https://web.archive.org/web/20071225113056/http://www.yahoo.com/'
            //'https://web.archive.org/web/20080625142604/http://www.yahoo.com/'
            //'https://web.archive.org/web/20081225073147/http://www.yahoo.com/'
            //'https://web.archive.org/web/20090624050702/http://www.yahoo.com/'
            //'https://web.archive.org/web/20091031173650/http://www.yahoo.com/'
            //'https://web.archive.org/web/20100625004834/http://www.yahoo.com//'
            //'https://web.archive.org/web/20101225135724/http://www.yahoo.com/'
            //'https://web.archive.org/web/20110625120839/http://www.yahoo.com/'
            //'https://web.archive.org/web/20111225001127/http://www.yahoo.com/'
            //'https://web.archive.org/web/20120625005416/http://www.yahoo.com/'
            //'https://web.archive.org/web/20121225001649/http://www.yahoo.com/'
            //'https://web.archive.org/web/20130625000012/http://www.yahoo.com/'
            //'https://web.archive.org/web/20131225000723/http://www.yahoo.com/'
            //'https://web.archive.org/web/20140625000029/https://www.yahoo.com/'
            //'https://web.archive.org/web/20141225000616/https://www.yahoo.com/'
            //'https://web.archive.org/web/20150624225602/https://www.yahoo.com/'

            //'https://web.archive.org/web/20061116082126/http://twitter.com/'
            //'https://web.archive.org/web/20061230202933/http://twitter.com/'
            //'https://web.archive.org/web/20070625105236/http://twitter.com/'
            //'https://web.archive.org/web/20071226141149/http://twitter.com/'
            //'https://web.archive.org/web/20080625170329/http://twitter.com/'
            //'https://web.archive.org/web/20081226122836/http://twitter.com/'
            //'https://web.archive.org/web/20090622090836/http://twitter.com/'
            //'https://web.archive.org/web/20091224145340/http://twitter.com/'
            //'https://web.archive.org/web/20100625230223/http://twitter.com/'
            //'https://web.archive.org/web/20101225083758/https://twitter.com/'
            //'https://web.archive.org/web/20110625022628/http://twitter.com/'
            //'https://web.archive.org/web/20111225000126/http://twitter.com/'
            //'https://web.archive.org/web/20120625005336/https://twitter.com/'
            //'https://web.archive.org/web/20121225001023/https://twitter.com/'
            //'https://web.archive.org/web/20130625001156/https://twitter.com/'
            //'https://web.archive.org/web/20131225000044/https://twitter.com/'
            //'https://web.archive.org/web/20140625000058/https://twitter.com/'
            //'https://web.archive.org/web/20141225001607/https://twitter.com/'
            //'https://web.archive.org/web/20150625003959/https://twitter.com/'

            //'https://web.archive.org/web/20050625083655/http://www.ebay.com/'
            //'https://web.archive.org/web/20051225084830/http://www.ebay.com/'
            //'https://web.archive.org/web/20060625211535/http://www.ebay.com/?'
            //'https://web.archive.org/web/20061225093652/http://www.ebay.com/'
            //'https://web.archive.org/web/20070625083002/http://www.ebay.com/'
            //'https://web.archive.org/web/20071215224300/http://www.ebay.com/'
            //'https://web.archive.org/web/20080619211514/http://www.ebay.com/'
            //'https://web.archive.org/web/20081225191116/http://www.ebay.com/'
            //'https://web.archive.org/web/20090624075951/http://www.ebay.com/'
            //'https://web.archive.org/web/20091224214205/http://www.ebay.com/'
            //'https://web.archive.org/web/20100625145811/http://www.ebay.com/'
            //'https://web.archive.org/web/20101225110427/http://www.ebay.com/'
            //'https://web.archive.org/web/20110624223208/http://www.ebay.com/'
            //'https://web.archive.org/web/20111225124300/http://www.ebay.com/'
            //'https://web.archive.org/web/20120625024423/http://www.ebay.com/'
            //'https://web.archive.org/web/20121225030528/http://www.ebay.com/'
            //'https://web.archive.org/web/20130625024816/http://www.ebay.com/'
            //'https://web.archive.org/web/20131225003001/http://www.ebay.com/'
            //'https://web.archive.org/web/20140625004724/http://www.ebay.com/'
            //'https://web.archive.org/web/20141225033456/http://www.ebay.com/'
            //'https://web.archive.org/web/20150625022207/http://www.ebay.com/'

            //'https://web.archive.org/web/20050625081306/http://www.msn.com/'
            //'https://web.archive.org/web/20051225084921/http://www.msn.com/'
            //'https://web.archive.org/web/20060627173526/http://www.msn.com/'
            //'https://web.archive.org/web/20061225154238/http://www.msn.com/'
            //'https://web.archive.org/web/20070624192315/http://www.msn.com/'
            //'https://web.archive.org/web/20071225141423/http://www.msn.com/'
            //'https://web.archive.org/web/20080626210301/http://www.msn.com/'
            //'https://web.archive.org/web/20081220055706/http://www.msn.com/'
            //'https://web.archive.org/web/20090625004116/http://www.msn.com/'
            //'https://web.archive.org/web/20091225130036/http://www.msn.com/'
            //'https://web.archive.org/web/20100625035839/http://www.msn.com/'
            //'https://web.archive.org/web/20101225044405/http://www.msn.com/'
            //'https://web.archive.org/web/20110625075849/http://www.msn.com/'
            //'https://web.archive.org/web/20111225000157/http://www.msn.com/'
            //'https://web.archive.org/web/20120625002911/http://www.msn.com/'
            //'https://web.archive.org/web/20121225005741/http://www.msn.com/'
            //'https://web.archive.org/web/20130625014921/http://www.msn.com/'
            //'https://web.archive.org/web/20131225002234/http://www.msn.com/'
            //'https://web.archive.org/web/20140625001635/http://www.msn.com/'
            //'https://web.archive.org/web/20141001022849/http://www.msn.com/'
            //'https://web.archive.org/web/20150628010223/http://www.msn.com/'

            //'https://web.archive.org/web/20050625010418/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20051224152149/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20060622221831/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20061213121700/http://en.wikipedia.org/wiki/Main_page'
            //'https://web.archive.org/web/20070702190405/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20071215161526/http://en.wikipedia.org/wiki/Main_Page#_note-35'
            //'https://web.archive.org/web/20080624183647/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20081209234307/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20090624212327/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20091227185322/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20100626083637/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20101224183805/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20110615014746/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20111222061854/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20120625023843/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20121225141117/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20130624211047/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20131225000516/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20140625033503/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20141225003911/http://en.wikipedia.org/wiki/Main_Page'
            //'https://web.archive.org/web/20150619151149/https://en.wikipedia.org/wiki/Main_Page'

            //'https://web.archive.org/web/20061229133401/http://www.live.com/'
            //'https://web.archive.org/web/20070629192126/http://www.live.com/'
            //'https://web.archive.org/web/20071212041614/http://www.live.com/'
            //'https://web.archive.org/web/20080618022559/http://www.live.com//'
            //'https://web.archive.org/web/20081226190049/http://www.live.com/'
            //'https://web.archive.org/web/20090622004052/http://www.bing.com/'
            //'https://web.archive.org/web/20091225155553/http://www.bing.com/?fdr=lc'
            //'https://web.archive.org/web/20100619135436/http://login.live.com/login.srf?wa=wsignin1.0&rpsnv=11&ct=1276946053&rver=5.5.4177.0&wp=MBI&wreply=http:%2F%2Fwww.live.com%2F&lc=1033&id=251248&mkt=en-US'
            //'https://web.archive.org/web/20100923232148/http://login.live.com/login.srf?wa=wsignin1.0&rpsnv=11&ct=1285274937&rver=6.1.6206.0&wp=MBI&wreply=http:%2F%2Fmail.live.com%2F%3Frru%3Dhome%26livecom%3D1&lc=1033&id=251248&cbcxt=hom&mkt=en-US'
            //'https://web.archive.org/web/20110623114057/https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=11&ct=1308829257&rver=6.1.6206.0&wp=MBI&wreply=http:%2F%2Fmail.live.com%2F%3Frru%3Dhome%26livecom%3D1&lc=1033&id=251248&cbcxt=hom&mkt=en-US'
            //'https://web.archive.org/web/20111222085406/https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=11&ct=1324544041&rver=6.1.6206.0&wp=MBI_SSL_SHARED&wreply=https:%2F%2Fwww.live.com%2F&lc=1033&id=251248&cbcxt=hom&mkt=en-US'
            //'https://web.archive.org/web/20120322011402/https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=11&ct=1332378841&rver=6.1.6206.0&wp=MBI_SSL_SHARED&wreply=https:%2F%2Fhome.live.com%2F&lc=1033&id=251248&cbcxt=hom&mkt=en-US'
            //'https://web.archive.org/web/20120918085458/https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=11&ct=1347958497&rver=6.1.6206.0&wp=MBI_SSL_SHARED&wreply=https:%2F%2Fmail.live.com%2Fdefault.aspx%3Frru%3Dhome%26livecom%3D1&lc=1033&id=64855&mkt=en-US&cbcxt=mai'
            //'https://web.archive.org/web/20130625032028/https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=11&ct=1372130424&rver=6.1.6206.0&wp=MBI_SSL_SHARED&wreply=https:%2F%2Fmail.live.com%2Fdefault.aspx%3Frru%3Dhome%26livecom%3D1&lc=1033&id=64855&mkt=en-US&cbcxt=mai'
            //'https://web.archive.org/web/20131225010050/https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1387933235&rver=6.4.6456.0&wp=MBI&wreply=http:%2F%2Fmail.live.com%2Fdefault.aspx&lc=1033&id=64855&mkt=en-US&cbcxt=mai&snsc=1'
            //'https://web.archive.org/web/20140625034742/https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1403668054&rver=6.4.6456.0&wp=MBI&wreply=http:%2F%2Fmail.live.com%2Fdefault.aspx&lc=1033&id=64855&mkt=en-US&cbcxt=mai&snsc=1'
            //'https://web.archive.org/web/20141225063750/https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1419484821&rver=6.4.6456.0&wp=MBI_SSL_SHARED&wreply=https:%2F%2Fmail.live.com%2Fdefault.aspx%3Frru%3Dinbox&lc=1033&id=64855&mkt=en-US&cbcxt=mai'
            //'https://web.archive.org/web/20150624092612/https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1435137971&rver=6.4.6456.0&wp=MBI_SSL_SHARED&wreply=https:%2F%2Fmail.live.com%2Fdefault.aspx%3Fshowunauth%3D1%26rru%3Dinbox&lc=1033&id=64855&mkt=en-US&cbcxt=mai'

            //'https://web.archive.org/web/20050625083635/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20051225015802/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20060623180749/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20061224085117/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20070624025143/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20071130010007/http://www.sina.com.cn/#http://pfp.sina.com.cn/sina3w_ent.html'
            //'https://web.archive.org/web/20080923142330/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20081216010641/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20090626081101/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20091227111329/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20100625193558/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20101224120523/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20110625222736/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20111225084102/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20120625161950/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20121225033605/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20130625032022/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20131225021155/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20140625013745/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20141225042056/http://www.sina.com.cn/'
            //'https://web.archive.org/web/20150624000508/http://www.sina.com.cn/'

            //'https://web.archive.org/web/20050625014521/http://www.yandex.ru/'
            //'https://web.archive.org/web/20051220083355/http://www.yandex.ru/'
            //'https://web.archive.org/web/20060620162627/http://www.yandex.ru/'
            //'https://web.archive.org/web/20061221034146/http://www.yandex.ru/'
            //'https://web.archive.org/web/20070622010520/http://www.yandex.ru/'
            //'https://web.archive.org/web/20071221224952/http://www.yandex.ru/'
            //'https://web.archive.org/web/20080620011912/http://www.yandex.ru/'
            //'https://web.archive.org/web/20081216001450/http://www.yandex.ru/'
            //'https://web.archive.org/web/20090625140324/http://www.yandex.ru/'
            //'https://web.archive.org/web/20091226020218/http://www.yandex.ru/'
            //'https://web.archive.org/web/20100624085230/http://www.yandex.ru/'
            //'https://web.archive.org/web/20101225004626/http://www.yandex.ru/'
            //'https://web.archive.org/web/20110623040642/http://www.yandex.ru/'
            //'https://web.archive.org/web/20111219163752/http://www.yandex.ru/#sk'
            //'https://web.archive.org/web/20120630041600/http://www.yandex.ru/'
            //'https://web.archive.org/web/20121223201646/http://www.yandex.ru/'
            //'https://web.archive.org/web/20130625020551/http://www.yandex.ru'
            //'https://web.archive.org/web/20131225001631/http://www.yandex.ru/'
            //'https://web.archive.org/web/20140625024059/http://www.yandex.ru/'
            //'https://web.archive.org/web/20141225045353/http://www.yandex.ru/'
            //'https://web.archive.org/web/20150625025226/https://www.yandex.ru/'

            //'https://web.archive.org/web/20090630025925/http://www.bing.com/'
            //'https://web.archive.org/web/20091228143601/http://www.bing.com/'
            //'https://web.archive.org/web/20100630111245/http://www.bing.com/'
            //'https://web.archive.org/web/20101221161841/http://www.bing.com/'
            //'https://web.archive.org/web/20110625120730/http://www.bing.com/'
            //'https://web.archive.org/web/20111225001927/http://br.bing.com/'
            //'https://web.archive.org/web/20120625023256/http://www.bing.com/'
            //'https://web.archive.org/web/20121225010055/http://www.bing.com/'
            //'https://web.archive.org/web/20130625003116/http://www.bing.com/'
            //'https://web.archive.org/web/20131225000056/http://www.bing.com/'
            //'https://web.archive.org/web/20140625000341/http://www.bing.com/'
            //'https://web.archive.org/web/20141225000713/http://www.bing.com/'
            //'https://web.archive.org/web/20150625003000/http://www.bing.com/'

            //'https://web.archive.org/web/20100624022729/http://www.aliexpress.com/'
            //'https://web.archive.org/web/20101224192907/http://www.aliexpress.com/'
            //'https://web.archive.org/web/20110625030024/http://www.aliexpress.com/'
            //'https://web.archive.org/web/20111225114959/http://www.aliexpress.com/'
            //'https://web.archive.org/web/20120626120925/http://www.aliexpress.com/'
            //'https://web.archive.org/web/20121223001716/http://www.aliexpress.com/'
            //'https://web.archive.org/web/20130326174755/http://www.aliexpress.com/'
            //'https://web.archive.org/web/20130812145728/http://www.aliexpress.com'
            //'https://web.archive.org/web/20140625014444/http://www.aliexpress.com/'
            //'https://web.archive.org/web/20141225165857/http://www.aliexpress.com/'
            //'https://web.archive.org/web/20150624141547/http://id.aliexpress.com/id_home.htm'


            //'https://web.archive.org/web/20110626102045/http://instagram.com/'
            //'https://web.archive.org/web/20111224064949/http://instagram.com/'
            //'https://web.archive.org/web/20120625200800/http://instagram.com/'
            //'https://web.archive.org/web/20121225021328/http://instagram.com/'
            //'https://web.archive.org/web/20130625075320/http://instagram.com/'
            //'https://web.archive.org/web/20131225002527/http://instagram.com/'
            //'https://web.archive.org/web/20140625001316/http://instagram.com/'
            //'https://web.archive.org/web/20141225011920/http://instagram.com/'
            'https://web.archive.org/web/20150625080418/http://instagram.com/'

            ];

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
//casper.start("", function(){
//});

casper.start().each(urls, function(casper, link) {
    casper.thenOpen(link, function() {
        this.echo(this.getCurrentUrl());
        this.capture('20150625instagram.jpg');
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
        fs.write('resultadoTCC.csv',   texto, 'a');

    });
});

//Exibindo os resultados.
casper.run(function(){
    this.exit();
});     

                  
           