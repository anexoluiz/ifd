function FindProxyForURL(url, host)
{
// variable strings to return


//PROXY PRODUCAO - LINK VIVO
var proxy_alphaview = "PROXY 10.172.102.30:3128";
//var proxy_alphaview = "PROXY 10.172.128.41:80";
var proxy_alphaview3 = "PROXY 10.172.102.32:3128";
var proxy_alphaview4 = "PROXY 10.172.128.36:80";
var proxy_alphaview5 = "PROXY 10.172.128.41:80";


//PROXY BACKUP - LINK EMBRATEL
//var proxy_alphaview = "PROXY 10.172.128.48:3128";

//PROXY BACKUP - AS
var proxy_alphaview2 = "PROXY 10.172.128.42:80";

//PROXY RECIFE

var proxy_rec2 = "PROXY 10.184.129.30:80";

var rede = "DIRECT";

//Exchange-corporate

//-------------------------------analytics-----------------------------

//Workspace CSU
if (shExpMatch(url, "https://workspaceapp.csu.com.br*")) { return rede; }
if (shExpMatch(url, "http://workspaceapp.csu.com.br*")) { return rede; }
if (shExpMatch(url, "wss://workspaceapp.csu.com.br*")) { return rede; }

if (shExpMatch(url, "https://workspaceapp-hml.csu.com.br*")) { return rede; }
if (shExpMatch(url, "http://workspaceapp-hml.csu.com.br*")) { return rede; }
if (shExpMatch(url, "wss://workspaceapp-hml.csu.com.br*")) { return rede; }

if (shExpMatch(url, "https://workspaceapp-dev.csu.com.br*")) { return rede; }
if (shExpMatch(url, "http://workspaceapp-dev.csu.com.br*")) { return rede; }
if (shExpMatch(url, "wss://workspaceapp-dev.csu.com.br*")) { return rede; }

//Webmail
if (shExpMatch(url, "https://webmail.csu.com.br*")) { return rede; }
if (shExpMatch(url, "http://webmail.csu.com.br*")) { return rede; }

//Console Antivirus
if (shExpMatch(url, "https://awccvmav.contact.grupocsu.local*")) { return rede; }
if (shExpMatch(url, "http://awccvmav.contact.grupocsu.local*")) { return rede; }

if (shExpMatch(url, "https://awccvmsapp10*")) { return rede; }
if (shExpMatch(url, "http://awccvmsapp10*")) { return rede; }
if (shExpMatch(url, "https://sva5nexidia2*")) { return rede; }
if (shExpMatch(url, "http://sva5nexidia2*")) { return rede; }
if (shExpMatch(url, "https://10.25.4.2*")) { return rede; }
if (shExpMatch(url, "http://10.25.4.2*")) { return rede; }

if (shExpMatch(url, "http://maestro.csu.com.br/*")) { return rede; }
if (shExpMatch(url, "https://maestro.csu.com.br/*")) { return rede; }

if (shExpMatch(url, "https://*preprod1.csu.com.br*")) { return rede; }
if (shExpMatch(url, "http://*preprod1.csu.com.br*")) { return rede; }

//------------------------------------FIM-------------------------------------

//----------------------Workspace-----------------------------------

if (shExpMatch(url, "https://*frontend.csu.com.br*")) { return rede; }
if (shExpMatch(url, "http://*frontend.csu.com.br*")) { return rede; }

if (shExpMatch(url, "https://*workspace.csu.com.br*")) { return rede; }
if (shExpMatch(url, "http://*workspace.csu.com.br*")) { return rede; }

if (shExpMatch(url, "https://*gtavaya.csu.com.br*")) { return rede; }
if (shExpMatch(url, "http://*gtavaya.csu.com.br*")) { return rede; }
if (shExpMatch(url, "wss://*gtavaya.csu.com.br*")) { return rede; }

//----------------------Fim----------------------------------------

//-------------------------------UNIDAS - TREINAMENTO-----------------------------
if (shExpMatch(url, "http://hmlprojetos.unidas.com.br*")) { return proxy_alphaview5; }
if (shExpMatch(url, "https://hmlprojetos.unidas.com.br*")) { return proxy_alphaview5; }

//------------------------------------FIM------------------------------------------

if (shExpMatch(url, "https://autodiscover.csu.com.br*")) { return rede; }
if (shExpMatch(url, "http://autodiscover.csu.com.br*")) { return rede; }
if (shExpMatch(url, "https://csu.com.br*")) { return rede; }
if (shExpMatch(url, "http://csu.com.br*")) { return rede; }

if (shExpMatch(url, "http://simplescsu*")) { return rede; }
if (shExpMatch(url, "https://simplescsu*")) { return rede; }

if (shExpMatch(url, "http://*lansweeper*")) { return rede; }
if (shExpMatch(url, "https://*lansweeper*")) { return rede; }

if (shExpMatch(url, "http://wfm-portal.csu.com.br/*")) { return rede; }
if (shExpMatch(url, "https://wfm-portal.csu.com.br/*")) { return rede; }

if (shExpMatch(url, "http://wfm.csu.com.br/*")) { return rede; }
if (shExpMatch(url, "https://wfm.csu.com.br/*")) { return rede; }

if (shExpMatch(url, "https://mind.net.com.br")) { proxy_alphaview2; }
if (shExpMatch(url, "http://mind.net.com.br")) { proxy_alphaview2; }

if (shExpMatch(url, "http://csucontact.br.grupocsu.corp.br/*")) { return rede; }
if (shExpMatch(url, "https://csucontact.br.grupocsu.corp.br/*")) { return rede; }

if (shExpMatch(url, "http://csucontact/*")) { return rede; }
if (shExpMatch(url, "https://csucontact/*")) { return rede; }

if (shExpMatch(url, "http://10.171.130.200/*")) { return rede; }
if (shExpMatch(url, "https://10.171.130.200/*")) { return rede; }

if (shExpMatch(url, "http://help.csu.com.br/*")) { return rede; }
if (shExpMatch(url, "https://help.csu.com.br/*")) { return rede; }

if (shExpMatch(url, "http://awccvmsapp10*")) { return rede; }
if (shExpMatch(url, "https://awccvmsapp10*")) { return rede; }

if (shExpMatch(url, "http://sistema.superdigital.com.br/*")) { return rede; }
if (shExpMatch(url, "https://sistema.superdigital.com.br/*")) { return rede; }

if (shExpMatch(url, "http://servicedesk.portocred.com.br/*")) { return proxy_alphaview; }
if (shExpMatch(url, "http://servicedesk.portocred.com.br:8843/*")) { return proxy_alphaview; }
if (shExpMatch(url, "http://servicedesk.portocred.com.br:81/*")) { return proxy_alphaview; }
if (shExpMatch(url, "https://servicedesk.portocred.com.br/*")) { return proxy_alphaview; }
if (shExpMatch(url, "http://csup12-prd-protheus.totvscloud.com.br*")) { return proxy_alphaview; }
if (shExpMatch(url, "https://csup12-prd-protheus.totvscloud.com.br*")) { return proxy_alphaview; }

if (shExpMatch(url, "http://ifood.my.salesforce.com*")) { return proxy_alphaview2; }
if (shExpMatch(url, "https://ifood.my.salesforce.com*")) { return proxy_alphaview2; }

if (shExpMatch(url, "http://186.250.124.168*")) { return proxy_alphaview; }
if (shExpMatch(url, "https://186.250.124.168*")) { return proxy_alphaview; }


if (shExpMatch(url, "http://*.scupmail.com/*")) {  return proxy_alphaview2; }

if (shExpMatch(url, "http://conhecimento.csu.com.br/*")) { return rede; }
if (shExpMatch(url, "https://conhecimento.csu.com.br/*")) { return rede; }
if (shExpMatch(url, "http://cgclsev01/EnterpriseVault/*")) { return rede; }
if (shExpMatch(url, "https://cgclsev01/EnterpriseVault/*")) { return rede; }
if (shExpMatch(url, "http://www.encontrodeliderescontact.com.br/*")) {  return proxy_alphaview3; }
if (shExpMatch(url, "http://evault.comgas.*")) { return rede; }
if (shExpMatch(url, "http://brwindex/*")) { return rede; }
if (shExpMatch(url, "\\brwindex\*")) { return rede; }
if (shExpMatch(url, "file://brwindex/*")) { return rede; }
if (shExpMatch(url, "http://relacionamento.natura.net/*")) { return rede; }
if (shExpMatch(url, "https://ctx-s.tribanco.*")) { return rede; }
if (shExpMatch(url, "ftp://5.16.8.158/*")) { return rede; }
if (shExpMatch(url, "http://permissao.netservicos.corp/*")) { return rede; }
if (shExpMatch(url, "https://permissao.netservicos.corp/*")) { return rede; }
if (shExpMatch(url, "http://*.netservicos.corp/*")) { return rede; }
if (shExpMatch(url, "http://pa.netservicos.corp/*")) { return rede; }
if (shExpMatch(url, "https://pa/*")) { return rede; }
if (shExpMatch(url, "http://pa/*")) { return rede; }
if (shExpMatch(url, "https://pa.netservicos.corp/*")) { return rede; }
if (shExpMatch(url, "https://netonline/*")) { return rede; }
if (shExpMatch(url, "http://netonline/*")) { return rede; }
if (shExpMatch(url, "https://netonline.netservicos.com.br/*")) { return rede; }
if (shExpMatch(url, "http://netonline.netservicos.com.br/*")) { return rede; }
if (shExpMatch(url, "https://10.29.177.4/*")) { return rede; }
if (shExpMatch(url, "http://10.29.177.4/*")) { return rede; }
if (shExpMatch(url, "http://view3.nexidia.com/*")) { return rede; }
if (shExpMatch(url, "https://view3.nexidia.com/*")) { return rede; }
if (shExpMatch(url, "http://csucontact.br.grupocsu.corp.br/*")) { return rede; }
if (shExpMatch(url, "http://csucontact/*")) { return rede; }
if (shExpMatch(url, "http://10.171.130.200/*")) { return rede; }

if (shExpMatch(url, "https://awitvmvcmn01.its.grupocsu.local:9443/*")) { return rede; }
if (shExpMatch(url, "https://awitvmvcrs01.its.grupocsu.local:9443/*")) { return rede; }
if (shExpMatch(url, "https://awitvmvcmn01.its.grupocsu.local/*")) { return rede; }
if (shExpMatch(url, "https://awitvmvcmn01.its.grupocsu.local/*")) { return rede; }
if (shExpMatch(url, "http://awitvmsvws02/*")) { return rede; }
if (shExpMatch(url, "https://awitvmvcmn01.its.grupocsu.local:9443/*")) { return rede; }
if (shExpMatch(url, "https://awitvmvcrs01.its.grupocsu.local:9443/*")) { return rede; }
if (shExpMatch(url, "https://awitvmvrors01.its.grupocsu.local:8281/*")) { return rede; }
if (shExpMatch(url, "https://awitvmvromrs01.its.grupocsu.local/*")) { return rede; }
if (shExpMatch(url, "https://awitvmvdprs01.its.grupocsu.local:8543/*")) { return rede; }
if (shExpMatch(url, "http://awitvmvdprs01.its.grupocsu.local:8543/*")) { return rede; }
if (shExpMatch(url, "https://10.179.1.46:8443/*")) { return rede; }
if (shExpMatch(url, "https://10.179.1.46:8443/*")) { return rede; }
if (shExpMatch(url, "https://10.179.1.7:9090/*")) { return rede; }
if (shExpMatch(url, "https://10.179.1.7:9090/*")) { return rede; }
if (shExpMatch(url, "https://portal.csuits.com.br/*")) { return rede; }
if (shExpMatch(url, "https://monitor.csuits.com.br/*")) { return rede; }
if (shExpMatch(url, "http://portal.csuits.com.br/*")) { return rede; }
if (shExpMatch(url, "http://monitor.csuits.com.br/*")) { return rede; }
if (shExpMatch(url, "https://dns.csuits.com.br/*")) { return rede; }
if (shExpMatch(url, "http://dns.csuits.com.br/*")) { return rede; }
if (shExpMatch(url, "https://csubrpro027.br.grupocsu.corp.br/*")) { return rede; }
if (shExpMatch(url, "http://csubrpro027.br.grupocsu.corp.br/*")) { return rede; }
if (shExpMatch(url, "https://dyn.web.whatsapp.com/*")) {  return proxy_alphaview; }
if (shExpMatch(url, "https://web.whatsapp.com/*")) {  return proxy_alphaview; }
if (shExpMatch(url, "https://w6.web.whatsapp.com/*")) {  return proxy_alphaview; }

if (shExpMatch(url, "http://10.171.102.101:8080/opencrm-csu-tribanco/*")) { return rede; }
if (shExpMatch(url, "http://192.168.7.207/GCW/")) { return proxy_alphaview2; }
if (shExpMatch(url, "https://callcenter.cnchama.com.br/*")) { return proxy_alphaview; }
if (shExpMatch(url, "http://netaptrn1*")) { return rede; }
if (shExpMatch(url, "http://netaptrn2*")) { return rede; }
if (shExpMatch(url, "http://netaptrn3*")) { return rede; }
if (shExpMatch(url, "http://netcrm*")) { return rede; }
if (shExpMatch(url, "http://sigmacgm*")) { return rede; }
if (shExpMatch(url, "https://idpinterno.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://gevenue-collections*")) { return rede; }
if (shExpMatch(url, "http://servicedesknet/*")) { return rede; }
if (shExpMatch(url, "https://callcenter.embratel.com.br/*")) { return rede; }
if (shExpMatch(url, "http://callcenter.embratel.com.br/*")) { return rede; }
if (shExpMatch(url, "http://201.6.6.114/*")) { return proxy_alphaview2; }
if (shExpMatch(url, "http://pkgcicrp.natura.com.br:8056/*")) { return rede; }
if (shExpMatch(url, "http://totem/*")) { return rede; }
if (shExpMatch(url, "https://ged.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://intranetdeatendimento.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://172.25.0.72:8080/*")) { return rede; }
if (shExpMatch(url, "http://cemi/*")) { return rede; }
if (shExpMatch(url, "http://claroclube/*")) { return rede; }
if (shExpMatch(url, "http://auto-controle/*")) { return rede; }
if (shExpMatch(url, "https://intranetdeatendimento.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://claromensagemb.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://intranetdeatendimento.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://consultafaturas/*")) { return rede; }
if (shExpMatch(url, "http://contaonlinepf2.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://intranetdeatendimento.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://lmsclaro/*")) { return rede; }
if (shExpMatch(url, "http://edoc.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://extratogsm/*")) { return rede; }
if (shExpMatch(url, "http://feu.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://idm.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://intranetdeatendimento.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://mtaweb:20010/*")) { return rede; }
if (shExpMatch(url, "http://pit/ora/*")) { return rede; }
if (shExpMatch(url, "http://clarounifica/*")) { return rede; }
if (shExpMatch(url, "http://ps8web:8080/*")) { return rede; }
if (shExpMatch(url, "https://sarweb.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://intranetdeatendimento.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://macacu:7106/*")) { return rede; }
if (shExpMatch(url, "https://migracaob.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://wppnacional.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://portalservicosdeti/*")) { return rede; }

if (shExpMatch(url, "http://bi.netservicos.corp/*")) { return rede; }
if (shExpMatch(url, "http://email.cosan.com.br/*")) { return rede; }
if (shExpMatch(url, "https://email.cosan.com.br/*")) { return rede; }
if (shExpMatch(url, "http://177.67.63.115:443/*")) { return rede; }
if (shExpMatch(url, "https://177.67.63.115:443/*")) { return rede; }
if (shExpMatch(url, "http://177.67.63.115/*")) { return rede; }
if (shExpMatch(url, "https://177.67.63.115/*")) { return rede; }
if (shExpMatch(url, "https://trabalhandocomacomgas.cosan.com/*")) { return rede; }
if (shExpMatch(url, "http://trabalhandocomacomgas.cosan.com/*")) { return rede; }
if (shExpMatch(url, "http://autodiscover.trabalhandocomacomgas.cosan.com/*")) { return rede; }
if (shExpMatch(url, "https://autodiscover.trabalhandocomacomgas.cosan.com/*")) { return rede; }


if (shExpMatch(url, "http://ebookcsu/*")) { return rede; }

if (shExpMatch(url, "http://intranet.etna.com.br/*")) { return rede; }
//if (shExpMatch(url, "http://imagens.etna.com.br/*")) { return rede; }
//if (shExpMatch(url, "http://images.etna.com.br/*")) { return rede; }
//if (shExpMatch(url, "https://images.etna.com.br/*")) { return rede; }
if (shExpMatch(url, "http://172.17.20.3/*")) { return rede; }
if (shExpMatch(url, "https://172.17.20.3/*")) { return rede; }
if (shExpMatch(url, "http://sistemas.pdg.com.br:90*")) { return rede; }
if (shExpMatch(url, "http://sistemas.pdg.com.*")) { return rede; }
if (shExpMatch(url, "https://sistemas.pdg.com.*")) { return rede; }
if (shExpMatch(url, "https://sistemas.pdg.com.br:443/*")) { return rede; }
if (shExpMatch(url, "http://aztronic.pdg.com.br/*")) { return rede; }
if (shExpMatch(url, "https://aztronic.pdg.com.br/*")) { return rede; }
if (shExpMatch(url, "http://portosegrecuperatst.portoseguro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://portosegrecuperahml.portoseguro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://portosegrecupera.portoseguro.com.br/*")) { return rede; }

if (shExpMatch(url, "http://*.gvt.net.br/*")) { return rede; }
if (shExpMatch(url, "https://*.gvt.net.br/*")) { return rede; }

if (shExpMatch(url, "https://172.20.1.99*")) { return rede; }
if (shExpMatch(url, "https://172.20.1.99:443/*")) { return rede; }
if (shExpMatch(url, "http://172.20.1.99/*")) { return rede; }
if (shExpMatch(url, "http://portaldeinformacoes2.vivo.com.br/*")) { return rede; }
if (shExpMatch(url, "http://portaldeinformacoes2.vivo.com.br:8080/*")) { return rede; }
if (shExpMatch(url, "https://portaldeinformacoes2.vivo.com.br/*")) { return rede; }

if (shExpMatch(url, "http://comgas.mysuite2.com.br/*")) { return proxy_alphaview; }
if (shExpMatch(url, "http://comgas*")) { return rede; }
if (shExpMatch(url, "https://comgas*")) { return rede; }
if (shExpMatch(url, "https://atendimento.netservicos.com.br/*")) { return rede; }
if (shExpMatch(url, "http://atendimento.netservicos.com.br/*")) { return rede; }
if (shExpMatch(url, "http://autoatendimentoti.minhati.*")) { return rede; }

if (shExpMatch(url, "http://201.6.6.114:9980/*")) { return rede; }
if (shExpMatch(url, "https://201.6.6.114:9980/*")) { return rede; }

if (shExpMatch(url, "http://*.comgas.local*")) { return rede; }
if (shExpMatch(url, "http://sww.comgas.*")) { return rede; }
if (shExpMatch(url, "http://evault.comgas.local/*")) { return rede; }
if (shExpMatch(url, "http://www.intranet.comgas/*")) { return rede; }
if (shExpMatch(url, "http://www.contratosvenda.comgas/*")) { return rede; }
if (shExpMatch(url, "https://*.comgas.local*")) { return rede; }
if (shExpMatch(url, "https://*tabuladornet/*")) { return rede; }

if (shExpMatch(url, "http://*gestaoservicosti.redecorp.br:7001/*")) { return rede; }
if (shExpMatch(url, "https://prd.etna.com.br/*")) { return rede; }
if (shExpMatch(url, "http://send.scupmail.com*")) {  return proxy_alphaview2; }
if (shExpMatch(url, "http://monitor.scupmail.com*")) {  return proxy_alphaview2; }
if (shExpMatch(url, "http://www.tricard.com.br/Tricard.ERP.WebUI/*")) { return proxy_alphaview; }
if (shExpMatch(url, "https://www.tricard.com.br/Tricard.ERP.WebUI/*")) { return proxy_alphaview; }
if (shExpMatch(url, "http://paineltricard.tricard.com.br:8080*")) { return rede; }
if (shExpMatch(url, "http://painelderegras.tricard.com.br:8080*")) { return rede; }
if (shExpMatch(url, "http://paineltricardhml.tricard.com.br:8080*")) { return rede; }
if (shExpMatch(url, "http://mc.claro.com.br/*")) { return rede; }

if (shExpMatch(url, "http://trbintranet.tribanco.com.br/*")) { return rede; }
if (shExpMatch(url, "http://ctx-s.tribanco.com.br/*")) { return rede; }
if (shExpMatch(url, "https://200.251.129.43/*")) { return rede; }
if (shExpMatch(url, "https://200.251.129.43")) { return rede; }
if (shExpMatch(url, "http://186.237.193.34")) { return rede; }
if (shExpMatch(url, "https://186.237.193.34")) { return rede; }
if (shExpMatch(url, "https://trbintranetweb.tribanco.com.br:4433/*")) { return rede; }
if (shExpMatch(url, "https://recupera.tribanco.com.br:4433/*")) { return rede; } 
if (shExpMatch(url, "http://srvtgsapweb.*")) { return rede; }
if (shExpMatch(url, "http://portaldeinformacoes.vivo.com.br/*")) { return rede; }
if (shExpMatch(url, "http://oim.vivo.com.br/*")) { return rede; }
if (shExpMatch(url, "http://seuportal.vivo.com.br/*")) { return rede; }
if (shExpMatch(url, "http://atiscrm.telefonica.br:10000/*")) { return rede; }
if (shExpMatch(url, "http://www.empresas/*")) { return rede; }
if (shExpMatch(url, "http://smap.telespcelular.com.br/*")) { return rede; }
if (shExpMatch(url, "http://slp.vivo.com.br/*")) { return rede; }
if (shExpMatch(url, "http://itg.vivo*")) { return rede; }

if (shExpMatch(url, "http://portaliptx.vivo.com.br/*")) { return rede; }
if (shExpMatch(url, "http://segurancacorporativa.telefonica.com.br/*")) { return rede; }
if (shExpMatch(url, "http://vivo360.vivo.com.br*")) { return rede; }
if (shExpMatch(url, "https://vivo360.vivo.com.br*")) { return rede; }
if (shExpMatch(url, "http://lnxtelgenapl01/*")) { return rede; }
if (shExpMatch(url, "http://wlpprd-soa.redecorp.br/*")) { return rede; }
if (shExpMatch(url, "http://sgosbd-web.redecorp.br/*")) { return rede; }



if (shExpMatch(url, "https://200.204.49.30:8443/*")) { return rede; }

if (shExpMatch(url, "http://200.204.49.30:8080/*")) { return rede; }

if (shExpMatch(url, "http://wxp*")) { return rede; }

if (shExpMatch(url, "http://svr_gmk1/*")) { return rede; }

if (shExpMatch(url, "http://buran*")) { return rede; }

if (shExpMatch(url, "http://191.*")) { return rede; }
if (shExpMatch(url, "https://191.*")) { return rede; }

if (shExpMatch(url, "http://10.*")) { return rede; }
if (shExpMatch(url, "https://10.*")) { return rede; }

if (shExpMatch(url, "http://192.*")) { return rede; }
if (shExpMatch(url, "https://192.*")) { return rede; }

if (shExpMatch(url, "http://172.*")) { return rede; }
if (shExpMatch(url, "http://172.22.2.126*")) { return rede; }

if (shExpMatch(url, "https://5.*")) { return rede; }
if (shExpMatch(url, "http://5.*")) { return rede; }

if (shExpMatch(url, "https://127.*")) { return rede; }
if (shExpMatch(url, "http://127.*")) { return rede; }
if (shExpMatch(url, "http://intranetcsu/CMD/Login/")) { return rede; }

if (shExpMatch(url, "http://csunet/*")) { return rede; }

if (shExpMatch(url, "http://intranetcsu/*")) { return rede; }

if (shExpMatch(url, "https://remoteapp.br.grupocsu.corp.br/*")) { return rede; }

if (shExpMatch(url, "http://csubh*")) { return rede; }

if (shExpMatch(url, "http://csubr*")) { return rede; }

if (shExpMatch(url, "http://csusp*")) { return rede; }
if (shExpMatch(url, "http://sflimaiii021*")) { return rede; }
if (shExpMatch(url, "http://intranetgp*")) { return rede; }

if (shExpMatch(url, "http://csubrgrv*")) { return rede; }
if (shExpMatch(url, "http://csucrystal.*")) { return rede; }

if (shExpMatch(url, "http://localhost*")) { return rede; }
if (shExpMatch(url, "https://localhost*")) { return rede; }

if (shExpMatch(url, "http://rjux0105.claro.com.br:8080/*")) { return rede; }
if (shExpMatch(url, "http://helpdesk.*")) { return rede; }
if (shExpMatch(url, "http://infradesk.*")) { return rede; }
if (shExpMatch(url, "http://servicedesk/*")) { return rede; }
if (shExpMatch(url, "https://servicedesk/*")) { return rede; }
if (shExpMatch(url, "https://ww715058031712/*")) { return rede; }
if (shExpMatch(url, "https://10.171.104.131/*")) { return rede; }
if (shExpMatch(url, "http://portalcsu/*")) { return rede; }
if (shExpMatch(url, "http://impact360:7001/*")) { return rede; }
if (shExpMatch(url, "http://pesquisaoperacional/*")) { return rede; }
if (shExpMatch(url, "http://citrixlink.*")) { return rede; }
if (shExpMatch(url, "https://citrixlink.*")) { return rede; }
if (shExpMatch(url, "http://edoc11g.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://atlas.netservicos.com.br/*")) { return rede; }
if (shExpMatch(url, "http://qualinet.netservicos.corp/*")) { return rede; }
if (shExpMatch(url, "http://portaldepartamental.netservicos.corp/*")) { return rede; }
if (shExpMatch(url, "http://solicadm.netservicos.corp/*")) { return rede; }
if (shExpMatch(url, "http://nsaosv*.*")) { return rede; }
if (shExpMatch(url, "https://nsaosv*.*")) { return rede; }
if (shExpMatch(url, "http://fiqueligado.*")) { return rede; }
if (shExpMatch(url, "http://ecrmfiqueligado*")) { return rede; }
if (shExpMatch(url, "http://ecrmnetonline*")) { return rede; }
if (shExpMatch(url, "http://processos*")) { return rede; }
if (shExpMatch(url, "http://permissao*")) { return rede; }
if (shExpMatch(url, "http://permissao.*")) { return rede; }
if (shExpMatch(url, "http://permissao.netservicos.corp/*")) { return rede; }
if (shExpMatch(url, "http://netsms*")) { return rede; }
if (shExpMatch(url, "https://netsms*")) { return rede; }
if (shExpMatch(url, "http://netonline/*")) { return rede; }
if (shExpMatch(url, "http://netonline.netservicos.com.br/*")) { return rede; }
if (shExpMatch(url, "http://nsaosv*")) { return rede; }
if (shExpMatch(url, "http://onlretrv*")) { return rede; }
if (shExpMatch(url, "https://onlretrv*")) { return rede; }
if (shExpMatch(url, "http://spovd-hyp02*")) { return rede; }
if (shExpMatch(url, "http://cad.nettv.*")) { return rede; }
if (shExpMatch(url, "http://portalrh.netservicos.com.br/*")) { return rede; }
if (shExpMatch(url, "http://novofiqueligado*")) { return rede; }
if (shExpMatch(url, "https://novofiqueligado*")) { return rede; }
if (shExpMatch(url, "http://asnet01.globocabo.*")) { return rede; }
if (shExpMatch(url, "http://servbus*")) { return rede; }
if (shExpMatch(url, "http://trbintranet*")) { return rede; }
if (shExpMatch(url, "http://admin.netcombo*")) { return rede; }
if (shExpMatch(url, "https://admin.netcombo*")) { return rede; }
if (shExpMatch(url, "http://oms.netservicos*")) { return rede; }
if (shExpMatch(url, "https://oms.netservicos*")) { return rede; }
if (shExpMatch(url, "http://idp.netservicos*")) { return rede; }
if (shExpMatch(url, "https://idp.netservicos*")) { return rede; }
if (shExpMatch(url, "http://in.netservicos*")) { return rede; }
if (shExpMatch(url, "https://in.netservicos*")) { return rede; }
if (shExpMatch(url, "http://venda.netservicos*")) { return rede; }
if (shExpMatch(url, "https://venda.netservicos*")) { return rede; }
if (shExpMatch(url, "https://servbus*")) { return rede; }
if (shExpMatch(url, "https://frontend-v6.*")) { return rede; }

if (shExpMatch(url, "https://sigab.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://am.claro.com.br:20443/*")) { return rede; }
if (shExpMatch(url, "https://am.claro.com.br:10443/*")) { return rede; }
if (shExpMatch(url, "https://intranetdeatendimento.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://migracaob.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "https://ativacaob.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://clarounifica.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://claro-helpdesk.claro.com.br:30000/*")) { return rede; }
if (shExpMatch(url, "https://websan.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://cemi/*")) { return rede; }
if (shExpMatch(url, "http://extratogsm/*")) { return rede; }
if (shExpMatch(url, "https://idm.claro.com.br/*")) { return rede; }
if (shExpMatch(url, "http://idm.claro.com.br/*")) { return rede; }

if (shExpMatch(url, "http://*.pdg.corp*")) { return rede; }

if (shExpMatch(url, "https://lynx-2g*")) { return rede; }
if (shExpMatch(url, "http://lynx-2g*")) { return rede; }
if (shExpMatch(url, "http://lynx*")) { return rede; }
if (shExpMatch(url, "https://lynx*")) { return rede; }

if (shExpMatch(url, "http://band86.edinfor.net.br*")) { return rede; }

if (shExpMatch(url, "http://faxbr.chartisinsurance.net/*")) { return rede; }
if (shExpMatch(url, "https://faxbr.chartisinsurance.net/*")) { return rede; }

if (shExpMatch(url, "http://ebook.telefonica.com.br/*")) { return rede; }
if (shExpMatch(url, "http://intranetgp/*")) { return rede; }

if (shExpMatch(url, "http://smig03/*")) { return rede; }
if (shExpMatch(url, "https://smig03/*")) { return rede; }

if (shExpMatch(url, "https://200.204.49.30:8443/*")) { return rede; }
if (shExpMatch(url, "https://esaj.tjsp.jus.br:443/*")) { return rede; }

if (shExpMatch(url, "http://*.edinfor.net.br*")) { return rede; }
if (shExpMatch(url, "http://stt/*")) { return rede; }
if (shExpMatch(url, "http://stt/gatlinkrelnet/login.aspx/*")) { return rede; }

if (shExpMatch(url, "https://mantis.sicredi.net/*")) { return rede; }
if (shExpMatch(url, "https://svn.sicredi.net/*")) { return rede; }
if (shExpMatch(url, "https://usd.sicredi.net/CAisd/pdmweb.exe/*")) { return rede; }
if (shExpMatch(url, "http://usd.sicredi.net/*")) { return rede; }

if (shExpMatch(url, "https://190.206.128.253/*")) { return rede; }
if (shExpMatch(url, "http://190.206.128.253/*")) { return rede; }
if (shExpMatch(url, "https://190.206.128.254/*")) { return rede; }
if (shExpMatch(url, "http://190.206.128.254/*")) { return rede; }

if (shExpMatch(url, "http://*")) { return proxy_alphaview; }
if (shExpMatch(url, "https://*")) { return proxy_alphaview; }
if (shExpMatch(url, "ftp://*")) { return proxy_alphaview; }
if (shExpMatch(url, "wss://*")) { return proxy_alphaview; }


// Proxy anything else
return rede;
}
