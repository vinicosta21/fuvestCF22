var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var nGlobalAnoFuvMin = 1980;
var nGlobalAnoFuvMax = 2017;
var nGlobalAnoTransMin = 2001;
var nGlobalAnoOutrosMin = 2004;
var nVestAno = '';
var nTransfAno = '';
var nGlobalStopNews = 0;
    
var nListaManuaisMinS = 0;
var nListaManuaisMaxS = 0;
var nListaManuaisOver = 0;
var nListaManuaisMinAno = 1980;
var nListaManuaisMaxAno = 2013;
 
var nGlobalAnoTrans = 0;
var nGlobalAnoFuv = 0;
var nGlobalAnoOutros = 0;

var nGlobalAnoExamePag = 0;
var nGlobalTipoExamePag = 0;
var cGlobalDirExamePag = 0;
var nUltimoManualFUVEST = 0;
var cGlobalBody = 'body';
var cGlobalErrorColor = "rgb(255,230,230)";
var cGlobalWhite = "white";

var cGlobalFUVURL = "/";
if (window.location.href.indexOf("bin.fuvest.br")>=0) {
  cGlobalFUVURL = "https://web.archive.org/web/20170702002901/http://www.fuvest.br/";
}
else if (window.location.href.indexOf("192.")>=0) {
  cGlobalFUVURL = "https://web.archive.org/web/20170702002901/http://www.fuvest.br/";
}
var cGlobalBINURL = "https://web.archive.org/web/20170702002901/https://bin.fuvest.br/";

var lgIsMobile = (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i)  || navigator.userAgent.match(/iPhone/i)  || navigator.userAgent.match(/iPad/i)  || navigator.userAgent.match(/iPod/i)  || navigator.userAgent.match(/BlackBerry/i)  || navigator.userAgent.match(/Windows Phone/i));

if (lgIsMobile) {
  document.write('<meta name="viewport" content="width=900">');
}


var aGlobalAnoInfo = [
 [1980,127220,36410,9932,"19790906","19791209","19800106","19800125"],
 [1981,125705,27362,7633,"19800831","19801207","19810104","19810127"],
 [1986,94768,24135,7507,"19850925","19851208","19860105","19860128"],
 [1987,104716,21326,6505,"19860920","19861207","19870104","19870127"],
 [1988,95361,21870,6499,"19870919","19871213","19880110","19880203"],
 [1989,94507,22678,6814,"19880917","19881211","19890108","19890201"],
 [1990,99058,37823,6997,"19891001","19891210","19900107","19900207"],
 [1991,116677,39105,8099,"19901007","19901209","19910106","19910205"],
 [1992,109036,39341,7948,"19911006","19911208","19920105","19920207"]
];

function gup( name ) {
  // Substitui todos os "&amp;" por "&" na url da janela
  // Os validadores de HTML exigem que se use "&amp;" ao invés de "&"
  var cURL = window.location.href.replace(/&amp;/gi,"&");
  //name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec(cURL);
  if (results===null) {
    return("");
  }
  else {
    return(results[1]);
  }
}

function jsGlobalUppercaseInput(cId) {
  var S = $("#"+cId).val();
  S = S.toUpperCase();
  $("#"+cId).val(S);
}

// Força com que as três colunas na página principal tenham o mesmo tamanho
function jsMainColResize() {
  var nHMax = $('#idMainCol1').height();
  var i = $('#idMainCol2').height();
  if (i>nHMax) {
    nHMax = i;
  }
  i = $('#idMainCol3').height();
  if (i>nHMax) {
    nHMax = i;
  }    
  $('#idMainCol1').height(nHMax);
  $('#idMainCol2').height(nHMax);
  $('#idMainCol3').height(nHMax);
}

// Verifica se determinada variável está definida no escopo da página
function jsIsDefined(x) {
  if (window[x]===undefined) {
    return(false);
  }
  else {
    return(true);
  }
}

function jsGlobalShowHide(cId) {
  if ($("#"+cId).is(':visible')) {
    $("#"+cId).hide();
    $("#"+cId+"A").html("+");
  }
  else {
    $("#"+cId).show();
    $("#"+cId+"A").html("-");
  }
  return false;
}  

function jsGlobalOpenNewWindow(cURL,cTitle,cFlags) {
  window.open(cURL,cTitle,cFlags);
}


function jsGExameAtual() {
  var oDate = new Date();
  
  nGlobalAnoTrans = oDate.getFullYear();
  nGlobalAnoFuv = oDate.getFullYear();
  nGlobalAnoOutros = 2018;
  nGlobalAnoFuv = 2018;

  //if ((oDate.getMonth()+1)>=6) {
  //  ++nGlobalAnoFuv;
  //}
  
  if ((oDate.getMonth()+1)>=3) {
    ++nGlobalAnoTrans;
  }
  
  //if ((oDate.getMonth()+1)>=7) {
  //  ++nGlobalAnoOutros;
 // }
    
  nVestAno = 'vest'+nGlobalAnoFuv;
  nTransfAno = 'tran'+nGlobalAnoTrans;

  nUltimoManualFUVEST = nGlobalAnoFuv;
  nListaManuaisMaxAno = nGlobalAnoFuv;

  // Normalmente, o manual só sai em agosto
  //if ((oDate.getMonth()+1)<8) {
  //  --nUltimoManualFUVEST; 
  //}  
}


function jsDecodePageYear()  {
  var cAux = ""+window.location;
  var nPos = cAux.indexOf("/vest");
  var nAno;
  var cVest;
  
  if (nPos>=0) {
    nGlobalAnoExamePag = cAux.substr(nPos+5, 4);
    nGlobalTipoExamePag = 1;
    cGlobalDirExamePag = "/vest"+nGlobalAnoExamePag+"/";
  }
  else {
    nPos = cAux.indexOf("/tran");
    var nPos1 = cAux.indexOf("/tran.php?");
    if ((nPos>=0)&&(nPos1<0)) {
      nGlobalAnoExamePag = cAux.substr(nPos+5, 4);
      nGlobalTipoExamePag = 2;
      cGlobalDirExamePag = "/tran"+nGlobalAnoExamePag+"/";
    }
    else {
      nAno = parseFloat(gup("anofuv"));
      cVest = gup("v");
      if (nAno>=1977) {
        if (cVest=='1') {
          nGlobalAnoExamePag = nAno;
          nGlobalTipoExamePag = 2;
          cGlobalDirExamePag = "/trans"+nGlobalAnoExamePag+"/";        
        }
        else {
          nGlobalAnoExamePag = nAno;
          nGlobalTipoExamePag = 1;
          cGlobalDirExamePag = "/vest"+nGlobalAnoExamePag+"/";
        }
      }
      else {
        if (cVest=='1') {
          nGlobalAnoExamePag = nGlobalAnoFuv;
          nGlobalTipoExamePag = 2;
          cGlobalDirExamePag = "/tran"+nGlobalAnoExamePag+"/";        
        }
        else {
          nGlobalAnoExamePag = nGlobalAnoFuv;
          nGlobalTipoExamePag = 1;
          cGlobalDirExamePag = "/vest"+nGlobalAnoExamePag+"/";
        }
      }
    }
  }
    
  nPos = cAux.indexOf("/outros/");
  if (nPos>=0) {
    nGlobalTipoExamePag = 3; // Outros exames
    nPos = cAux.indexOf("/outros/outros");
    if (nPos>=0) {
      // Página principal do ano
      nGlobalAnoExamePag = cAux.substr(nPos+14, 4);
    }
    else {
      nPos = cAux.indexOf("/outros/univesp");
      if (nPos>=0) {
        nGlobalAnoExamePag = cAux.substr(nPos+15, 4);
      }
      else {
        nPos = cAux.indexOf("/outros/fdrp");
        if (nPos>=0) {
          nGlobalAnoExamePag = cAux.substr(nPos+12, 4);
        }
        else {
          nPos = cAux.indexOf("/outros/fsp");
          if (nPos>=0) {
            nGlobalAnoExamePag = cAux.substr(nPos+11, 4);
          }
          else {
            nPos = cAux.indexOf("/outros/conc");
            if (nPos>=0) {
              nGlobalAnoExamePag = cAux.substr(nPos+12, 4);
            }
            else {
              nPos = cAux.indexOf("/outros/ppgep");
              if (nPos>=0) {
                nGlobalAnoExamePag = cAux.substr(nPos+13, 4);
              }
              else {
                nPos = cAux.indexOf("/outros/nace");
                if (nPos>=0) {
                  nGlobalAnoExamePag = parseInt(cAux.substr(nPos+12, 4))+1;
                }
                else {
                  nPos = cAux.indexOf("/outros/licenciatura");
                  if (nPos>=0) {
                    nGlobalAnoExamePag = parseInt(cAux.substr(nPos+20, 4));
                  }
                  else {
                    nPos = cAux.indexOf("/outros/fd");
                    if (nPos>=0) {
                      nGlobalAnoExamePag = parseInt(cAux.substr(nPos+10, 4));
                    }
                    else {
                      nPos = cAux.indexOf("/outros/ee");
                      if (nPos>=0) {
                        nGlobalAnoExamePag = parseInt(cAux.substr(nPos+10, 4));
                      }
                      else {
                        nGlobalAnoExamePag = 0;
                      }
                    }
                  }
                }
              }
            }
          }          
        }
      }
    }
    cGlobalDirExamePag = "/outros/outros"+nGlobalAnoExamePag+".stm";
  }
  nGlobalAnoExamePag = parseInt(nGlobalAnoExamePag);
  
  if (nGlobalTipoExamePag==0) {
    if (gup("v")==0) {
      nGlobalTipoExamePag = 1;
    }
    else if (gup("v")==1) {
      nGlobalTipoExamePag = 2;
    }
  }
} 
     

function jsGSendMessage(cUser) {
  var cMagic = "@";
  window.location = "mailto:"+cUser+cMagic+"fuvest.br";
}    

function jsGFormatDate(D) {
  var dow = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  var oDate = new Date(D.substr(0, 4), D.substr(4, 2)-1, D.substr(6, 2));
  return(dow[oDate.getDay()]+", "+D.substr(6, 2)+"/"+D.substr(4, 2)+"/"+D.substr(0, 4));
}  
  
function jsGlobalMesAno(cDate) {
  var aMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  var nMes = parseFloat(cDate.substr(0, 2));
  var nAno = parseFloat(cDate.substr(3, 4));
  return(aMes[nMes-1]+" de "+nAno);
}
  
function jsGlobalLeapYear(intYear) {
  if (intYear % 100 === 0) {
    if (intYear % 400 === 0) { 
      return true; 
    }
  }
  else {
    if ((intYear % 4) === 0) {  
      return true; 
    }
  }
  return false;
}
  
function jsGCalend(D,U) {
  var C = "<div style='margin:auto;width:146px;height:160px;background-image:url("+cGlobalFUVURL+"img/backcalend.png)'>";
  var aDate = new Array(100);
  var nDia = parseFloat(D.substr(0, 2));
  var nMes = parseFloat(D.substr(3, 2));
  var nAno = parseFloat(D.substr(6, 4));
  var oFirstDay = new Date();
  var nMax = 31;
  var i;
  var W;
  if (nMes==2) {
    nMax = 28;
    if (jsGlobalLeapYear(nAno)) {
      nMax = 29;
    }
  }
  else if ((nMes==4)||(nMes==6)||(nMes==9)||(nMes==11)) {
    nMax = 30;
  }            
  oFirstDay.setFullYear(nAno,nMes-1,1);
  var nStart = oFirstDay.getDay();
  for (i=0;i<100;i++) {
    aDate[i] = 0;
  }
  for (i=0;i<nMax;i++) {
    aDate[i+nStart] = i+1;
  }
  
  C += "<div style='height:16px;font-family:arial;font-size:9pt;padding:2px;padding-top:6px;font-weight:bold;text-align:center'>"+jsGlobalMesAno(D.substr(3,7))+"<\/div>";
  C += "<table border=0 cellpadding=2 cellspacing=0 style='margin:auto;font-family:helvetica;font-size:9pt;text-align:center;'>";                       
  C += "<tr style='font-weight:bold;'><td style='color:red'>D<\/td><td>S<\/td><td>T<\/td><td>Q<\/td><td>Q<\/td><td>S<\/td><td style='color:blue'>S<\/td><\/tr>";
  for (W=0;W<6;W++) {
    if ((W===0)||(aDate[W*7]!==0)) {
      C += "<tr>";
      for (var nDay=0;nDay<7;nDay++) {
        C += "<td style='"+((U[aDate[W*7+nDay]]==1)?'font-weight:bold;':'')+((nDay===0)?'color:red;':'')+((nDay==7)?'color:blue;':'')+"'>";
        if (aDate[W*7+nDay]===0) {
          C += "&nbsp;";
        }
        else {
          C += aDate[W*7+nDay];
        }
        C += "<\/td>";
     }
     C += "<\/tr>";
    }
  }
  C += "<\/table>";
  C += "<\/div>";
  return(C);
}
          
          
function jsGWNews(D,S) {
  var C = "";
  var L = "";
  var i;
  var j;
  if (S===null) {
    S = false;
  }
  for (i=1;i<=D.items.length;i++) {
    if (L.substr(3,7)!=D.items[i-1].data.substr(3,7)) {
      if (L!="") {
        C += "<\/td>";
        C += "<\/tr>";
      }
      L = D.items[i-1].data;
      var U = new Array(33);
      for (j=0;j<=32;j++) {
        U[j] = 0;
      }
      for (j=1;j<=D.items.length;j++) {
        if (L.substr(3,7)==D.items[j-1].data.substr(3,7)) {
          U[parseFloat(D.items[j-1].data.substr(0,2))] = 1;
        }
      }
      C += "<table style='font-family:helvetica;background-image:url("+cGlobalFUVURL+"img/greendiv.gif);background-repeat:no-repeat'>";
      C += "<tr style='vertical-align:top;'>";
      C += "<td style='width:160px;'>";
      C += jsGCalend(L,U);
      C += "<\/td>";
      C += "<td style='padding-top:20px;'>";
    }
    C += "<div style='font-family:arial;font-size:10pt;margin-bottom:5px;margin-top:5px;padding:5px;border:solid 1px gray;background-color:rgb(230,230,230);'>";
    C += "<div style='float:right;margin:0px;font-size:9pt;font-weight:bold;color:maroon;letter-spacing:1px;'>"+D.items[i-1].data+"<\/div>";
    C += "<p style='margin:0px;font-weight:bold;font-size:14pt;letter-spacing:-1px;'>"+(S?(D.items[i-1].exame+": "):"")+"<span style='color:red'>"+D.items[i-1].subtipo+"<\/span><\/p>";
    C += "<p style='margin:0px;font-weight:bold;'>"+D.items[i-1].cabec+"<\/p>";
    C += "<p style='margin:0px;'>"+D.items[i-1].texto+"<\/p>";
    C += "<\/div>";
  }
  if (L!="") {
    C += "<\/td>";
    C += "<\/tr>";
    C += "<\/table>";
  }
  return(C);
}
    
    
function jsGlobalGetCarName(cCodCar) {
  if (cCodCar=="TOT") {
    return("Total Geral das Carreiras");
  }
  else if (cCodCar=="EXA") {
    return("Carreiras da Área de Exatas");
  }
  else if (cCodCar=="HUM") {
    return("Carreiras da Área de Humanas");
  }
  else if (cCodCar=="BIO") {
    return("Carreiras da Área de Biológicas");
  }
  else {
    return("");
  }
}
       
function jsGlobalGetRegName(cCodReg) {
  if (cCodReg=="TT") {
    return("Total dos Candidatos Inscritos");
  }
  else if (cCodReg=="II") {
    return("Total dos Candidatos Inscritos em Carreiras fora da Grande São Paulo");
  }
  else if (cCodReg=="CC") {
    return("Total dos Candidatos Inscritos em Carreiras da Grande São Paulo");
  }
  else {
    return("");
  }
}
    
function jsGlobalRoundTable(cColor, cContent, lHideFromPrint) {
  var cAux = "";
  cAux += "<table "+((lHideFromPrint===true)?"class='cHideFromPrint' ":"")+"border=0 cellspacing=0 cellpadding=0 style='font-size:0px;line-height:0px;width:90%;margin:auto;'>";
  cAux += "<tr><td style='width:8px;height:8px;'><img src='"+cGlobalFUVURL+"img/"+cColor+"tl.gif'><\/td><td style='width:100%;height:8px;background-color:#"+cColor+";'>&nbsp;<\/td><td style='width:8px;height:8px;'><img src='"+cGlobalFUVURL+"img/"+cColor+"tr.gif'><\/td>";
  cAux += "<tr><td style='width:8px;background-color:#"+cColor+";'>&nbsp;<\/td><td style='width:100%;background-color:#"+cColor+";'>"+cContent+"<\/td><td style='width:8px;background-color:#"+cColor+";'>&nbsp;<\/td>";
  cAux += "<tr><td style='width:8px;height:8px;'><img src='"+cGlobalFUVURL+"img/"+cColor+"bl.gif'><\/td><td style='width:100%;height:8px;background-color:#"+cColor+";'>&nbsp;<\/td><td style='width:8px;height:8px;'><img src='"+cGlobalFUVURL+"img/"+cColor+"br.gif'><\/td>";
  cAux += "<\/table>";
  return(cAux);
}
       
function jsGlobalRemoveAccents(cStr) {
  var cAcc = "áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙçÇâêîôûÂÊÎÔÛäëïöüÄËÏÖÜãõÃÕ";
  var cAcn = "aeiouAEIOUaeiouAEIOUcCaeiouAEIOUaeiouAEIOUaoAO";
  var cResult = "";
  var C = "";
  var nIdx = 0;
  for (var i=0;i<cStr.length;i++) {
    C = cStr.substr(i, 1);
    nIdx = cAcc.indexOf(C);
    if (nIdx>=0) {
      cResult = cResult+cAcn.substr(nIdx, 1);
    }
    else {
      cResult = cResult+C;
    }
  }
  return(cResult);
}       
function jsGlobalLoadScriptRem(url, callback){
}

function jsGlobalLoadScript(url, callback){
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {  //IE
    script.onreadystatechange = function() {
      if ((script.readyState == "loaded") || (script.readyState == "complete")) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } 
  else {  //Others
    script.onload = function() {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
   
function jsGlobalNoInfo(cTitle,cDiv) {
  var S = "";
  S += "<p style='font-weight:bold;font-size:14pt;margin:0px;'>"+cTitle+"<\/p>";
  S += "<p style='font-weight:bold;font-size:12pt;margin:0px;'><img src='/img/loading.png'><\/p>";
  S += "<p style='font-weight:bold;font-size:12pt;margin:0px;'>Aguarde o carregamento das estatísticas.<\/p>";
  $("#"+cDiv).html(S);
}
    
function jsGlobalCheckDate(cDate) {
  if (cDate.length!=10) {
    return(false);
  }
  if (cDate.charAt(2)!="/") {
    return(false);
  }  
  if (cDate.charAt(5)!="/") {
    return(false);
  }
  var nMes = parseFloat(cDate.substr(3, 2));
  if ((nMes<1)||(nMes>12)) {
    return(false);
  }
  var nAno = parseFloat(cDate.substr(6, 4));
  if ((nAno<1800)||(nAno>2999)) {
    return(false);
  }
  var nDia = parseFloat(cDate.substr(0, 2));                                                
  var nMax = 31;
  if (nMes==2) {
    nMax = 28;
    if (jsGlobalLeapYear(nAno)) {
      nMax = 29;
    }
  }
  else if ((nMes==4)||(nMes==6)||(nMes==9)||(nMes==10)||(nMes==11)) {  
    nMax = 30;
  }
  
  if ((nDia<1)||(nDia>nMax)) {
    return(false);
  }
  return(true);
}

function jsGlobalCalend(cDate,aUsed) {
  var cContent = "<table border=1 cellpadding=1 cellspacing=0 style='background-color:white;font-family:helvetica;font-size:9pt;text-align:center;border:solid 1px black;border-collapse:collapse;'>";
  var aDate = new Array(100);
  var nDia = parseFloat(cDate.substr(0, 2));
  var nMes = parseFloat(cDate.substr(3, 2));
  var nAno = parseFloat(cDate.substr(6, 4));
  var oFirstDay = new Date();
  var nMax = 31;
  var i;
  var W;
  var nDay;
  if (nMes==2) {
    nMax = 28;
    if (jsGlobalLeapYear(nAno)) {
      nMax = 29;
    }
  }
  else if ((nMes==4)||(nMes==6)||(nMes==9)||(nMes==10)||(nMes==11)) {
    nMax = 30;
  }
            
  oFirstDay.setFullYear(nAno,nMes-1,1);
  var nStart = oFirstDay.getDay();
  for (i=0;i<100;i++) {
    aDate[i] = 0;
  }
  for (i=0;i<nMax;i++) {
    aDate[i+nStart] = i+1;
  }
              
  cContent += "<tr style='font-weight:bold;background-color:rgb(200,200,200);'><td style='color:maroon'>D<\/td><td>S<\/td><td>T<\/td><td>Q<\/td><td>Q<\/td><td>S<\/td><td style='color:navy'>S<\/td><\/tr>";
  for (W=0;W<6;W++) {
    if ((W===0)||(aDate[W*7]!==0)) {
      cContent += "<tr>";
      for (nDay=0;nDay<7;nDay++) {
        cContent += "<td style='background-color:"+((aUsed[aDate[W*7+nDay]]==1)?'rgb(220,220,220)':'white')+";"+((aUsed[aDate[W*7+nDay]]==1)?'font-weight:bold;':'')+((nDay===0)?'color:maroon;':'')+((nDay==7)?'color:navy;':'')+"'>";
        if (aDate[W*7+nDay]===0) {
          cContent += "&nbsp;";
        }
        else {
          cContent += aDate[W*7+nDay];
        }
        cContent += "<\/td>";
      }
      cContent += "<\/tr>";
    }
 }
 cContent += "<\/table>";
 return(cContent);
}
          
function jsGlobalWriteNews(cDiv) {
  var C = "<table style='font-family:helvetica;'>";
  var cOldDate = "";
  var i;
  var j;
  for (i=1;i<=aLocalFuvNews.items.length;i++) {
    if (cOldDate.substr(3,7)!=aLocalFuvNews.items[i-1].data.substr(3,7)) {
      if (cOldDate!="") {
        C += "<\/td>";
        C += "<\/tr>";
      }
      cOldDate = aLocalFuvNews.items[i-1].data;
      var aUsed = new Array(33);
      for (j=0;j<=32;j++) {
        aUsed[j] = 0;
      }
      for (j=1;j<=aLocalFuvNews.items.length;j++) {
        if (cOldDate.substr(3,7)==aLocalFuvNews.items[j-1].data.substr(3,7)) {
          aUsed[parseFloat(aLocalFuvNews.items[j-1].data.substr(0,2))] = 1;
        }
      }
                
      C += "<tr style='vertical-align:top;'>";
      C += "<td colspan=3 style='font-weight:bold;font-size:12pt;'>";
      C += "<p style='margin:10px 0px 0px 0px;border-bottom:solid 1px black;'>"+jsGlobalMesAno(cOldDate.substr(3,7))+"<\/p>";
      C += "<\/td>";
      C += "<\/tr>";
      C += "<tr style='vertical-align:top;'>";
      C += "<td style='width:20px;'>&nbsp;<\/td>";
      C += "<td style='width:120px;'>";
      C += jsGlobalCalend(cOldDate,aUsed);
      C += "<\/td>";
      C += "<td>";
    }
    C += "<div style='font-family:helvetica;font-size:10pt;margin-bottom:10px;'>";
    C += "<p style='margin:0px;font-weight:bold;color:red'>"+aLocalFuvNews.items[i-1].data+" "+aLocalFuvNews.items[i-1].subtipo+"<\/p>";
    C += "<p style='margin:0px;font-weight:bold;'>"+aLocalFuvNews.items[i-1].cabec+"<\/p>";
    C += "<p style='margin:0px;'>"+aLocalFuvNews.items[i-1].texto+"<\/p>";
    C += "<\/div>";
   }
   if (cOldDate!="") {
     C += "<\/td>";
     C += "<\/tr>";
   }
   C += "<\/table>";
   $("#"+cDiv).html(C);
}
 
function jsGlobalGotoSelect(cSelectName) {
  if ($("#"+cSelectName).length!==0) {
    var cURL = $("#"+cSelectName).val();
    window.location = cURL;
  }
}

function jsGlobalGNews(i) {
  nGlobalStopNews = i;
}
     
function jsGlobalTRGNewsId() {
  var nTop;
  var i;
  var nTopRN;
  var nTopLP;
  var nTop1;
  var nWait = 0;
  if (typeof(aGlobalFuvNews)!='undefined') {
    nTopRN = Math.round($('#idDivRotateNews').offset().top);
    if (nGlobalStopNews===0) {
      nTop = Math.round($('#idDivRotateNews').scrollTop());
      nTopLP = Math.round($('#idPLastNews').offset().top);
      $('#idDivRotateNews').scrollTop(Math.round($('#idDivRotateNews').scrollTop()+1));
      nTop1 = $('#idDivRotateNews').scrollTop();
      if (nTopLP<=nTopRN) {
        $('#idDivRotateNews').scrollTop(0);
      }
    }
  
    for (i=1;i<=aGlobalFuvNews.items.length;i++) {
      nTop = Math.round($('#idPNews'+i).offset().top);
      if (nTop==nTopRN) {
        nWait = 1;
        break;
      }
    }
  
    setTimeout(function () {jsGlobalTRGNewsId();}, ((nWait==1)?2000:50));
  }
}

function jsHideDiv(cDiv) {
  $("#"+cDiv).hide("slow");
}


 
function jsGCheckCPF(cpf) {
  var nonNumbers = /\D/;
  if (nonNumbers.test(cpf)) {
    return(false);
  }
  if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
    return(false);
  }
  var a = [];
  var b = 0;
  var c = 11;
  for (i=0; i<11; i++){
    a[i] = cpf.charAt(i);
    if (i < 9) {
      b += (a[i] * --c);
    }
  }
  if ((x = b % 11) < 2) {
    a[9] = 0;
  }
  else {
    a[9] = 11-x;
  }
  b = 0;
  c = 11;
  for (y=0; y<10; y++) {
    b += (a[y] * c--);
  }
  if ((x = b % 11) < 2) {
    a[10] = 0;
  }
  else {
    a[10] = 11-x;
  }
  if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10])) {
    return(false);
  }
  return(true);
}
  
   
sprintfWrapper = {
 
 init : function () {
 
  if (typeof arguments == "undefined") { return null; }
  if (arguments.length < 1) { return null; }
  if (typeof arguments[0] != "string") { return null; }
  if (typeof RegExp == "undefined") { return null; }
 
  var string = arguments[0];
  var exp = new RegExp(/(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g);
  var matches = [];
  var strings = [];
  var convCount = 0;
  var stringPosStart = 0;
  var stringPosEnd = 0;
  var matchPosEnd = 0;
  var newString = '';
  var match = null;
 
  while ((match = exp.exec(string))) {
   if (match[9]) { 
     convCount += 1; 
   }
 
   stringPosStart = matchPosEnd;
   stringPosEnd = exp.lastIndex - match[0].length;
   strings[strings.length] = string.substring(stringPosStart, stringPosEnd);
 
   matchPosEnd = exp.lastIndex;
   matches[matches.length] = {
    match: match[0],
    left: match[3] ? true : false,
    sign: match[4] || '',
    pad: match[5] || ' ',
    min: match[6] || 0,
    precision: match[8],
    code: match[9] || '%',
    negative: (parseInt(arguments[convCount],10)<0)?true:false,
    argument: String(arguments[convCount])
   };
  }
  strings[strings.length] = string.substring(matchPosEnd);
 
  if (matches.length === 0) { return string; }
  if ((arguments.length - 1) < convCount) { return null; }
 
  var code = null;
  match = null;
  var i = null;
 
  for (i=0; i<matches.length; i++) {
 
   if (matches[i].code == '%') { substitution = '%'; }
   else if (matches[i].code == 'b') {
    matches[i].argument = String(Math.abs(parseInt(matches[i].argument,10)).toString(2));
    substitution = sprintfWrapper.convert(matches[i], true);
   }
   else if (matches[i].code == 'c') {
    matches[i].argument = String(String.fromCharCode(parseInt(Math.abs(parseInt(matches[i].argument,10)),10)));
    substitution = sprintfWrapper.convert(matches[i], true);
   }
   else if (matches[i].code == 'd') {
    matches[i].argument = String(Math.abs(parseInt(matches[i].argument,10)));
    substitution = sprintfWrapper.convert(matches[i]);
   }
   else if (matches[i].code == 'f') {
    matches[i].argument = String(Math.abs(parseFloat(matches[i].argument,10)).toFixed(matches[i].precision ? matches[i].precision : 6));
    substitution = sprintfWrapper.convert(matches[i]);
   }
   else if (matches[i].code == 'o') {
    matches[i].argument = String(Math.abs(parseInt(matches[i].argument,10)).toString(8));
    substitution = sprintfWrapper.convert(matches[i]);
   }
   else if (matches[i].code == 's') {
    matches[i].argument = matches[i].argument.substring(0, matches[i].precision ? matches[i].precision : matches[i].argument.length);
    substitution = sprintfWrapper.convert(matches[i], true);
   }
   else if (matches[i].code == 'x') {
    matches[i].argument = String(Math.abs(parseInt(matches[i].argument,10)).toString(16));
    substitution = sprintfWrapper.convert(matches[i]);
   }
   else if (matches[i].code == 'X') {
    matches[i].argument = String(Math.abs(parseInt(matches[i].argument,10)).toString(16));
    substitution = sprintfWrapper.convert(matches[i]).toUpperCase();
   }
   else {
    substitution = matches[i].match;
   }
 
   newString += strings[i];
   newString += substitution;
 
  }
  newString += strings[i];
 
  return newString;
 
 },
 
 convert : function(match, nosign){
  if (nosign) {
   match.sign = '';
  } else {
   match.sign = match.negative ? '-' : match.sign;
  }
  var l = match.min - match.argument.length + 1 - match.sign.length;
  var pad = new Array(l < 0 ? 0 : l).join(match.pad);
  if (!match.left) {
   if (match.pad == "0" || nosign) {
    return match.sign + pad + match.argument;
   } else {
    return pad + match.sign + match.argument;
   }
  } else {
   if (match.pad == "0" || nosign) {
    return match.sign + match.argument + pad.replace(/0/g, ' ');
   } else {
    return match.sign + match.argument + pad;
   }
  }
 }
};
 
sprintf = sprintfWrapper.init;




function jsListaManuaisOver() {
  // Mostra setas
  var i = $("#idListaManuaisPicsCont").scrollLeft();
     
  if (i>nListaManuaisMinS) {   
    $("#isListaManuaisEsq").show();
  }
     
  if (i<nListaManuaisMaxS) {   
    $("#isListaManuaisDir").show();
  }
}
   
function jsListaManuaisOut() {
  // Esconder setas
  $("#isListaManuaisEsq").hide();
  $("#isListaManuaisDir").hide();
}      
    
    
function jsListaManuaisClickEsqEnd() {
  $("#idListaManuaisPicsCont").scrollLeft(nListaManuaisMinS);
  nListaManuaisOver = 0;
}
   
function jsListaManuaisClickDirEnd() {
  $("#idListaManuaisPicsCont").scrollLeft(nListaManuaisMaxS);
  nListaManuaisOver = 0;
}
   
function jsListaManuaisClickEsq() {
  var i = $("#idListaManuaisPicsCont").scrollLeft();
  if (i>nListaManuaisMinS) {
    i = i-8;
  }
  else {
    i = 0;
    nListaManuaisOver = 0;
  }
  $("#idListaManuaisPicsCont").scrollLeft(i);
    
  if (nListaManuaisOver==1) {
    setTimeout(function () {jsListaManuaisClickEsq();}, 100);
  }
}
   
function jsListaManuaisClickDir() {
  var i = $("#idListaManuaisPicsCont").scrollLeft();
  if (i<nListaManuaisMaxS) {
    i = i+8;
  }
  else {
    i = nListaManuaisMaxS;
    nListaManuaisOver = 0;
  }
  $("#idListaManuaisPicsCont").scrollLeft(i);
    
  if (nListaManuaisOver==2) {
    setTimeout(function () {jsListaManuaisClickDir();}, 100);
  }
}   
   
function jsListaManuaisOverEsq() {
  nListaManuaisOver = 1;
  jsListaManuaisOver();
  jsListaManuaisClickEsq();
}
   
function jsListaManuaisOverDir() {
  nListaManuaisOver = 2; 
  jsListaManuaisOver();
  jsListaManuaisClickDir();
}   
   
function jsListaManuaisOutEsq() {
  nListaManuaisOver = 0; 
  jsListaManuaisOut();   
}
   
function jsListaManuaisOutDir() {
  nListaManuaisOver = 0; 
  jsListaManuaisOut();   
}   
   
   
function jsListaManuaisFixed(cContainer,nAno,nWD,nHD,cLink) {
  var C = "";
  var i;
  var w;
  var mt;
  var cTheLink;
      
  // Calcula a largura total da área onde as capas dos manuai serão desenados
  w = (nListaManuaisMaxAno-nListaManuaisMinAno+1)*127;
      
  nListaManuaisMaxS = w-nWD;
     
  //C += "<div style='position:relative;width:"+w+"px;height:"+nHD+"px;background-image:url("+cGlobalFUVURL+"img/oldpaper1.png);padding:10px'>";
  C += "<div style='position:relative;width:"+w+"px;height:"+nHD+"px;padding:10px'>";
  for (i=nListaManuaisMinAno;i<=nListaManuaisMaxAno;i++) {
    w = 120;
    h = 158;
    cTheLink = cLink.replace("$ANO$", i);
    C += "<div style='display:block;float:left;width:"+(w+5)+"px;height:"+(h+5)+"px;margin-left:2px;margin-top:0px;'>";  
    C += "<div style='width:"+(w+5)+"px;height:"+(h+5)+"px;background-image:url("+cGlobalFUVURL+"img/backmans"+(w+4)+".png)'>";  
    C += "<a href='"+cTheLink+"' title='FUVEST "+i+"' alt='FUVEST "+i+"'><img src='"+cGlobalFUVURL+"img/man"+i+".jpg' style='width:"+w+"px;border:solid 1px gray;'><\/a>"; 
    C += "<\/div>";
    C += "<div style='text-align:center;font-size:9pt'>";
    C += "<p style='font-weight:bold;margin:0px;'><a href='"+cTheLink+"'>FUVEST "+i+"<\/a><\/p>";
    C += "<\/div>";
    C += "<\/div>";
  }
  C += "<\/div>";
  $("#"+cContainer).html(C);
   
  var nsl = 127*(nAno-nListaManuaisMinAno)-nWD/2+60;
  if (nsl<0) {
    nsl=0;
  }
   
  $("#"+cContainer).scrollLeft(nsl);      
}   
   
function jsListaManuais(cContainer,nAno,nWD,nHD,cLink) {
  var C = "";
  var i;
  var w;
  var mt;
  var cTheLink;
      
  // Calcula a largura total da área onde as capas dos manuai serão desenados
  w = (nListaManuaisMaxAno-nListaManuaisMinAno)*67+127;
      
  nListaManuaisMaxS = w-nWD;
     
  //C += "<div style='position:relative;width:"+nWD+"px;height:"+nHD+"px;background-image:url("+cGlobalFUVURL+"img/oldpaper1.png);padding:10px'>";
  C += "<div style='position:relative;width:"+nWD+"px;height:"+nHD+"px;padding:10px'>";
  C += "<div id='idListaManuaisPicsCont' style='width:"+nWD+"px;height:"+nHD+"px;overflow:hidden;' onmouseover='jsListaManuaisOver()' onmouseout='jsListaManuaisOut()'>";
  C += '<div id="idListaManuaisPics" style="width:'+w+'px;height:'+nHD+'px;">';
  for (i=nListaManuaisMinAno;i<=nListaManuaisMaxAno;i++) {
    w = (nAno==i)?120:60;
    h = (nAno==i)?158:79;
       cTheLink = cLink.replace("$ANO$", i);
    C += "<div style='display:block;float:left;width:"+(w+5)+"px;height:"+(h+5)+"px;margin-left:2px;margin-top:"+((nAno==i)?"0":"40")+"px;background-image:url("+cGlobalFUVURL+"img/backmans"+(w+4)+".png)'>";  
    C += "<a href='"+cTheLink+"' title='FUVEST "+i+"' alt='FUVEST "+i+"'><img src='"+cGlobalFUVURL+"img/man"+i+".jpg' style='width:"+w+"px;border:solid 1px gray;' onmouseover='jsListaManuaisOver()' onmouseout='jsListaManuaisOut()'><\/a>"; 
    C += "<\/div>";
  }
  C += "<\/div>";
  C += "<\/div>";
  C += "<img id='isListaManuaisEsq' src='"+cGlobalFUVURL+"img/seta_esquerda.png' style='display:block;position:absolute;left:10px;top:100px;cursor:pointer;' onmouseover='jsListaManuaisOverEsq()' onmouseout='jsListaManuaisOutEsq()' onclick='jsListaManuaisClickEsqEnd()'>";
  C += "<img id='isListaManuaisDir' src='"+cGlobalFUVURL+"img/seta_direita.png' style='display:block;position:absolute;left:"+(nWD-20)+"px;top:100px;cursor:pointer;' onmouseover='jsListaManuaisOverDir()' onmouseout='jsListaManuaisOutDir()'  onclick='jsListaManuaisClickDirEnd()'>";
  C += "<\/div>";     
  $(cContainer).html(C);
   
  var nsl = 67*(nAno-nListaManuaisMinAno)-nWD/2+60;
  if (nsl<0) {
    nsl=0;
  }
   
  $("#idListaManuaisPicsCont").scrollLeft(nsl);      
  jsListaManuaisOut();   
}   
   
function jsListaManuaisWindow() {
  var nX = 100;
  var nY = 200;
  var nW = 650;
  var nH = 240;
  var C = "<div id='idListaManuaisWContent' style=''><\/div>";
  jsCreateWindowN('idListaManuaisW', cGlobalFUVURL+'img/ow', 'cOW', [6, 5, 10, 9, 20, 20], 'Escolha o ano do Exame', nX, nY, nW, nH, 1000, C);
  jsListaManuais('#idListaManuaisWContent',nUltimoManualFUVEST,600,170,"/vest$ANO$/manual/manual.stm");
}
     
function jsManListMount(P) {
  var nX = $("#"+P.id).offset().left;
  var nY = $("#"+P.id).offset().top;
  var nW = 640;
  var nH = 210;
  nX = nX+$("#"+P.id).outerWidth()-nW;
  var C = "";
  var cImgExt = "png";
  var cTemplate = cGlobalFUVURL+"img/blue_rrw_";
  var aW = [11, 11, 11, 11];
     
  C += "<div id='idManList' style='position:absolute;left:"+nX+"px;top:"+nY+"px;width:"+nW+"px;height:"+nH+"px;'>";
  // montar a parte de cima
  C += "<div style='float:left;font-size:0px;line-height:0px;background-image:url("+cTemplate+"tl."+cImgExt+");width:"+aW[0]+"px;height:"+aW[1]+"px;'><\/div>";
  C += "<div style='float:left;font-size:0px;line-height:0px;background-image:url("+cTemplate+"tm."+cImgExt+");width:"+(nW-aW[0]-aW[2])+"px;height:"+aW[1]+"px;'><\/div>";
  C += "<div style='float:left;font-size:0px;line-height:0px;background-image:url("+cTemplate+"tr."+cImgExt+");width:"+aW[2]+"px;height:"+aW[1]+"px;'><\/div>";
     
  C += "<div style='float:left;font-size:0px;line-height:0px;background-image:url("+cTemplate+"ml."+cImgExt+");width:"+aW[0]+"px;height:"+(nH-aW[1]-aW[3])+"px;'><\/div>";
  C += "<div style='float:left;font-size:0px;line-height:0px;background-image:url("+cTemplate+"mm."+cImgExt+");width:"+(nW-aW[0]-aW[2])+"px;height:"+(nH-aW[1]-aW[3])+"px;'>";
     
  C += "<div id='idManListContent' style='float:left;width:620px;height:"+(nH-aW[1]-aW[3])+"px;'><\/div>";
     
  C += "<\/div>";
  C += "<div style='float:left;font-size:0px;line-height:0px;background-image:url("+cTemplate+"mr."+cImgExt+");width:"+aW[0]+"px;height:"+(nH-aW[1]-aW[3])+"px;'><\/div>";
     
  C += "<div style='float:left;font-size:0px;line-height:0px;background-image:url("+cTemplate+"bl."+cImgExt+");width:"+aW[0]+"px;height:"+aW[1]+"px;'><\/div>";
  C += "<div style='float:left;font-size:0px;line-height:0px;background-image:url("+cTemplate+"bm."+cImgExt+");width:"+(nW-aW[0]-aW[2])+"px;height:"+aW[1]+"px;'><\/div>";
  C += "<div style='float:left;font-size:0px;line-height:0px;background-image:url("+cTemplate+"br."+cImgExt+");width:"+aW[2]+"px;height:"+aW[1]+"px;'><\/div>";     
     
  C += "<\/div>";
     
  $("body").append(C);
     
  jsListaManuais('#idManListContent',nUltimoManualFUVEST,nW-40,nH-40,cGlobalFUVURL+"vest$ANO$/manual/manual.stm");
     
  $("#idManList").bind('mouseleave', function() {
    if ($('#idManList').length>0) {
      $('#idManList').remove();
    }     
   });
}
   
function jsGlobalMenuOver(O) {
  var cId = O.id;
  var nW = 0;
  var nH1 = 0;
  var nH2 = 0;
  var nX = 0;
  var nY = 0;
  var C = "";  
  $('#'+cId+"L").removeClass('cML1').addClass('cML');
  $('#'+cId+"M").removeClass('cMM1').addClass('cMM');
  $('#'+cId+"R").removeClass('cMR1').addClass('cMR');
    
  // Se for o vestibular, adicionar o submenu correspondente
  if (cId=="idM01") {
    nW = $('#'+cId+"L").outerWidth()+$('#'+cId+"M").outerWidth()+$('#'+cId+"R").outerWidth()+40;
    nH1 = $('#'+cId+"M").outerHeight()+4;
    nH2 = 7*24+4;
    nX = $('#'+cId+"L").offset().left-20;
    nY = $('#'+cId+"L").offset().top;
    C = "";
    C += "<div id='idSM01' style='position:absolute;left:"+nX+"px;top:"+nY+"px;width:"+nW+"px;height:"+(nH1+nH2)+"px;'>";
    C += "<div style='height:"+nH1+"px;'>";
    C += "<div class='cML' style='margin-left:20px;'><\/div>";
    C += "<div class='cMM'><a href='"+cGlobalFUVURL+"vest"+nGlobalAnoFuv+"/fuvest.stm' class='cAM'>FUVEST "+nGlobalAnoFuv+"<\/a><\/div>";
    C += "<div class='cMR'><\/div>";      
    C += "<\/div>";
    C += "<div class='cSMenuTL'><\/div>";
    C += "<div class='cSMenuTM' style='width:"+(nW-24)+"px'><\/div>";
    C += "<div class='cSMenuTR'><\/div>";
    C += "<div class='cSMenuL' style='height:"+nH2+"px;'></div>";
    C += "<div class='cSMenuM' style='width:"+(nW-24)+"px;height:"+nH2+"px;'>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"vest"+nGlobalAnoFuv+"/informes/informes.stm'>Informes<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"vest"+nGlobalAnoFuv+"/novidade/novidade.stm'>Novidades<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"vest"+nGlobalAnoFuv+"/estat/estat.stm'>Estatísticas<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"vest"+nGlobalAnoFuv+"/manual/manual.stm'>Manuais<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"vest"+nGlobalAnoFuv+"/listas/listas.stm'>Listas<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"vest"+nGlobalAnoFuv+"/provas/provas.stm'>Provas<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"vest"+nGlobalAnoFuv+"/calend/calend.stm'>Calendário<\/a>"; 
    C += "<\/div>";
    C += "<div class='cSMenuR'style='height:"+nH2+"px;'></div>";
    C += "<div class='cSMenuBL'><\/div>";
    C += "<div class='cSMenuBM' style='width:"+(nW-24)+"px'><\/div>";
    C += "<div class='cSMenuBR'><\/div>";    
    C += "<\/div>";

    $("body").append(C);
    $("#idSM01").bind('mouseleave', function () 
      {
       $("#idSM01").remove();
       $("#idM01L").removeClass("cML").addClass("cML1");
       $("#idM01M").removeClass("cMM").addClass("cMM1");
       $("#idM01R").removeClass("cMR").addClass("cMR1");
      }
    );
  }    
  else if (cId=="idM02") { // Se for a transferencia, adicionar o submenu correspondente
    nW = $('#'+cId+"L").outerWidth()+$('#'+cId+"M").outerWidth()+$('#'+cId+"R").outerWidth()+40;
    nH1 = $('#'+cId+"M").outerHeight()+4;
    nH2 = 7*24+4;
    nX = $('#'+cId+"L").offset().left-20;
    nY = $('#'+cId+"L").offset().top;
    C = "";
    C += "<div id='idSM02' style='position:absolute;left:"+nX+"px;top:"+nY+"px;width:"+nW+"px;height:"+(nH1+nH2)+"px;'>";
    C += "<div style='height:"+nH1+"px;'>";
    C += "<div class='cML' style='margin-left:20px;'><\/div>";
    C += "<div class='cMM'><a href='"+cGlobalFUVURL+"tran"+nGlobalAnoTrans+"/transf.stm' class='cAM'>Transferência "+nGlobalAnoTrans+"<\/a><\/div>";
    C += "<div class='cMR'><\/div>";        
    C += "<\/div>";
    C += "<div class='cSMenuTL'><\/div>";
    C += "<div class='cSMenuTM' style='width:"+(nW-24)+"px'><\/div>";
    C += "<div class='cSMenuTR'><\/div>";
    C += "<div class='cSMenuL' style='height:"+nH2+"px;'></div>";
    C += "<div class='cSMenuM' style='width:"+(nW-24)+"px;height:"+nH2+"px;'>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"tran"+nGlobalAnoTrans+"/informes/informes.stm'>Informes<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"tran"+nGlobalAnoTrans+"/novidade/novidade.stm'>Novidades<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"tran"+nGlobalAnoTrans+"/estat/estat.stm'>Estatísticas<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"tran"+nGlobalAnoTrans+"/manual/manual.stm'>Manuais<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"tran"+nGlobalAnoTrans+"/listas/listas.stm'>Listas<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"tran"+nGlobalAnoTrans+"/provas/provas.stm'>Provas<\/a>";
    C += "<a style='width:"+(nW-34)+"px' href='"+cGlobalFUVURL+"tran"+nGlobalAnoTrans+"/calend/calend.stm'>Calendário<\/a>"; 
    C += "<\/div>";
    C += "<div class='cSMenuR'style='height:"+nH2+"px;'></div>";
    C += "<div class='cSMenuBL'><\/div>";
    C += "<div class='cSMenuBM' style='width:"+(nW-24)+"px'><\/div>";
    C += "<div class='cSMenuBR'><\/div>";    
    C += "<\/div>";
    $("body").append(C);
    $("#idSM02").bind('mouseleave', function () 
      {
       $("#idSM02").remove();
       $("#idM02L").removeClass("cML").addClass("cML1");
       $("#idM02M").removeClass("cMM").addClass("cMM1");
       $("#idM02R").removeClass("cMR").addClass("cMR1");
      }
    );
  }
}
   
function jsGlobalMenuOut(O) {
  var cId = O.id;
  // Vestibular e Transferência alteração a classe quando apagarem o submenu
  if (!((cId=="idM01")||(cId=="idM02"))) {
    $("#"+cId+"L").removeClass("cML").addClass("cML1");
    $("#"+cId+"M").removeClass("cMM").addClass("cMM1");
    $("#"+cId+"R").removeClass("cMR").addClass("cMR1");
  }
}   
   
function jsCacheImages() {
  var cImgExt = "png";
  var aWImages = ["lightblue_rrw_", "blue_rrw_"];
  var aWTypes = ["tl", "tm", "tr", "ml", "mm", "mr", "bl", "bm", "br"];
  var aImgGeral = ["seta_direita.png","seta_esquerda.png","warning.png"];
  //var aImgBin = ["warning.png","help.png","helpdialog.png"];
  var aImgBin = [];
  var img;
  var i;
  var j;
  var nAno;
  for (i=0;i<aWImages.length;i++) {
    for (j=0;j<aWTypes.length;j++) {
      img = new Image();
      img.src = cGlobalFUVURL+"img/"+aWImages[i]+aWTypes[j]+"."+cImgExt;
    }
  }
     
  for (nAno=nListaManuaisMinAno;nAno<=nListaManuaisMaxAno;nAno++) {
    img = new Image();
    img.src = "/img/man"+nAno+".jpg";
  }
  
  for (nAno=nGlobalAnoTransMin;nAno<=nGlobalAnoTrans;nAno++) {
    img = new Image();
    img.src = "/img/tran"+nAno+".jpg";
  }

  for (i=0;i<aImgGeral.length;i++) {
    img = new Image();
    img.src = cGlobalFUVURL+"img/"+aImgGeral[i];
  }
  for (i=0;i<aImgBin.length;i++) {
    img = new Image();
    img.src = cGlobalBINURL+"img/"+aImgBin[i];
  }
}

// Recoloca as janelas laterais na posição correta, no caso de haver um redimensionamento na janela principal
function jsGlobalForceResize() {
  var nWBody = $("body").width();
  var nHBody = $("body").height();
  var nWT = $("#idTopDIV").outerWidth();
  var nHT = $("#idTopDIV").outerHeight();
  var nLT = $("#idTopDIV").offset().left;
  var nTT = $("#idTopDIV").offset().top;
  var nY = nTT;
  var nW = $("#idOtherInfo").outerWidth();
  var nH = $("#idOtherInfo").outerHeight();
  var nX = nLT-nW-2;
     
  //$('#idActualManInfo').css('left',(nLT+nWT-90)+'px').css('top',(nTT)+'px');
  //$('#idOtherInfo').css('left',(nX)+'px').css('top',(nY)+'px');
}
   
$(window).resize(function() {
  jsGlobalForceResize();
});      



function jsStrZero(i, j) {
  var S = ""+i;
  while (S.length<j) {
    S = "0"+S;
  }
  return(S);
} 

function jsGlobalLoadNews(cDiv,V,cTitle,cMore) {
  var i, j;
  var C = "<div style='width:180px;height:8px;background-image:url("+cGlobalFUVURL+"img/newstop.gif);font-size:0px;line-height:0px;'></div>";
  var S = '';
  C += "<div style='background-color:white;padding:5px;'>";
  C += "<p style='font-family:helvetica;font-size:10pt;font-weight:bold;margin:0px;text-align:center;'>Novidades</p>";
  C += "<p style='font-family:helvetica;font-size:9pt;font-weight:bold;margin:0px;text-align:center;'>"+cTitle+"</p>";
  var nMax=V.items.length;
  if (cMore!=="") {
    if (nMax>3) {
      nMax=3;
    }
  }
  C += "<p style='font-family:helvetica;font-size:8pt;font-style:italic;margin:0px;margin-bottom:10px;text-align:center;'>Últimas "+nMax+" notícias</p>";
  for (i=1;i<=nMax;i++) {
    C += "<div style='font-family:helvetica;font-size:8pt;margin-bottom:10px;'>";
    C += "<p style='margin:0px;font-weight:bold;color:maroon'>"+V.items[i-1].data+" "+V.items[i-1].subtipo+"</p>";
    C += "<p style='margin:0px;font-weight:bold;'>"+V.items[i-1].cabec+"</p>";
    
    // Auxilio para os utilizadores de leitores: colocar o tabindex das novidades no final.
    S = V.items[i-1].texto;
    if ((j=S.indexOf(' href'))>=0) {
      S = S.substr(0, j)+' tabindex="'+(20000+i)+'"'+S.substr(j, S.length);
    }
    
    C += "<p style='margin:0px;'>"+S+"</p>";    
    C += "</div>";
  }
  if (cMore!="") {
    C += "<p style='font-family:helvetica;font-size:8pt;font-style:italic;text-align:right;'>"+cMore+"<\/p>";
  }
  C += "</div>";
  C += "<div style='width:180px;height:8px;background-image:url("+cGlobalFUVURL+"img/newsbot.gif);font-size:0px;line-height:0px;'></div>";
  $("#"+cDiv).html(C);
  jsGlobalForceResize();
}

function jsGlobalValidator(cDiv, nW3C, nCSS, nAChecker, nJSLint) {
  var S = '';
  if (nW3C===1) {
    S += '<a href="https://web.archive.org/web/20170702002901/http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/Icons/valid-html401-blue" alt="Valid HTML 4.01 Strict" style="height:31px;width:88px;"><\/a>';
  }
  if (nCSS===1) {  
    S += '<a href="https://web.archive.org/web/20170702002901/http://jigsaw.w3.org/css-validator/check/referer"><img style="border:0;width:88px;height:31px" src="https://web.archive.org/web/20170702002901/http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!"><\/a>';
  }
  S = '<p style="margin:0px;">'+S+'<\/p>';
  $("#"+cDiv).html(S);
}  

function jsGlobalOpenDIV(cId) {
  if ($("#"+cId).is(':visible')) {
    $("#"+cId).hide();
    $("#"+cId+"A").html("(trocar)");
  }
  else {
    $("#"+cId).show();
    $("#"+cId+"A").html("(fechar)");
  }
  jsGlobalForceResize();
}

function jsgToggleVisibility(cId) {
  if ($("#"+cId).is(':visible')) {
    $("#"+cId).hide();
  }
  else {
    $("#"+cId).show();
  }
}

function jsGlobalHSDIV(cId,cFH,cFS) {
  if ($("#"+cId).is(':visible')) {
    $("#"+cId).hide();
    $("#"+cId+"A").html(cFH);
  }
  else {
    $("#"+cId).show();
    $("#"+cId+"A").html(cFS);
  }
  jsGlobalForceResize();
}

function jsForceSubmit(cFormName) {
  $('#'+cFormName).submit();
}  

function jsGlobalImgSort(lDraw,nMult, C) {
  var cStyle = 'style="border:none;vertical-align:middle;"';
  if (lDraw===true) {
    if (nMult===1) {
      return C+'<img src="/img/seta_sort_down.png" ' + cStyle + '>';
    }
    return C+'<img src="/img/seta_sort_up.png" ' + cStyle + '>';
  }         
  return '';
}

function jsGlobalGetOption(cId) {
  return $("#"+cId+" option:selected" ).text();
}

function jsGlobalGetIndex(cId) {
  return $("#"+cId).prop("selectedIndex");
}

function jsGlobalCheckEmail(cEmail) {
  var reValidEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  var a, i, nArroba, nVirgula;
  lReturn = reValidEmail.test(cEmail);
  if (lReturn) {
    a = (""+cEmail).split('');
    nArroba = 0;
    nVirgula = 0;
    for (i=0;i<a.length;i++) {
      if (a[i]=='@') {
        ++nArroba;
      }
      if ((a[i]==',')||(a[i]==';')) {
        ++nVirgula;
      }
    }
    if ((nArroba!=1)||(nVirgula!=0)) {
      lReturn = false;
      //alert('virgula='+nVirgula+'; arroba='+nArroba);
    }
  }
  return lReturn;
}

function jsGlobalRefreshCaptcha(cImg) {
  $('#'+cImg).prop("src",cGlobalBINURL+"inscr/p.php?rand="+Math.round(Math.random()*65535)+Math.round(Math.random()*65535));
}

function jsGlobalFloat(S) {
  var cVal = $('#'+S).val();
  cVal = cVal.replace(/,/g, '.');
  $('#'+S).val(cVal);
}

// typo
function jsGlobalChangeBackround(cId,C) {
  jsGlobalChangeBackground(cId,C);
}

function jsGlobalChangeBackground(cId,C) {
  $('#'+cId).css('background-color',C);
}

function jsGlobalChangeContent(cId,C) {
  $('#'+cId).html(C);
}

function jsgChangeContent(cId,C) {
  jsGlobalChangeContent(cId,C);
}

function jsgHide(cId) {
  $("#"+cId).hide();
}

function jsgShow(cId) {
  $("#"+cId).show();
}

function jsgChangeBackground(cId,C) {
  jsGlobalChangeBackground(cId,C);
}

function jsGlobalChangeYearDo(cParent,nYear,cExec) {
  var fn = window[cExec];
  jsRemoveWindow(cParent+'_year');
  fn(nYear);
}
       
function jsGlobalChangeYear(cParent,cCaption,aYears,cExec) {
  var C = '';
  var P = $('#'+cParent);
  var nX = P.offset().left;
  var nY = P.offset().top+P.outerHeight();
  var nH = 240;
  var nW = 800;
  var i;
  var cAux;

  C += '<div id="'+cParent+'_year_src'+'" style="position:relative;overflow:hidden;">';
  for(i=0;i<aYears.length;i++) {
    C += '<div style="width:80px;padding:2px;float:left;text-align:center;'+(((i%2)==0)?'background-color:rgb(200,200,255);':'background-color:rgb(255,200,200);')+'">';
    C += '<p style="margin:0px;font-size:8pt;text-align:center;">';
    C += '<a href="javascript:void(0)" onclick="jsGlobalChangeYearDo(\''+cParent+'\','+aYears[i]+',\''+cExec+'\')">';
    if (nGlobalTipoExamePag==2) {
      C += 'Transferência<br>'+aYears[i];
    }
    else {
      C += 'FUVEST<br><span style="font-size:10pt;">'+aYears[i]+'<\/span>';
    }
    C += '<\/a>';
    C += '<\/p>';           
    C += '<p style="margin:0px;">';
    C += '<a href="javascript:void(0)" onclick="jsGlobalChangeYearDo(\''+cParent+'\','+aYears[i]+',\''+cExec+'\')">';
    if (nGlobalTipoExamePag==2) {
      C += '<img style="width:64px;" src="/img/tran'+aYears[i]+'.jpg">';
    }
    else {
      C += '<img style="width:64px;" src="/img/man'+aYears[i]+'.jpg">';
    }
    C += '<\/a>';
    C += '</p>';
    C += '<\/div>'; 
  }
  C += '<\/div>';
  cAux = 'jsRemoveWindow("'+cParent+'_year");';
  C += "<a class='cOWButton' id='idButtonCloseWindow' href='javascript:void(0)' onclick='"+cAux +"' style='margin:auto;width:100px;height:20px;margin-top:5px;padding-top:2px'>Fechar<\/a>";
         
  jsCreateWindowN(cParent+'_year', '/img/ow', 'cOW', [6, 5, 10, 9, 20, 20], cCaption, nX, nY,nW,0,3000,C); 
}


function jsGlobalChangeYear2(cParent,cCaption,aYears,cExec) {
  var C = '';
  var P = $('#'+cParent);
  var nX = P.offset().left;
  var nY = P.offset().top+P.outerHeight();
  var nH = 240;
  var nW = 800;
  var i;
  var cAux;

  C += '<div id="'+cParent+'_year_src'+'" style="position:relative;overflow:hidden;">';
  for(i=0;i<aYears.length;i++) {
    C += '<div style="width:90px;height:120px;position:relative;padding:0px;float:left;text-align:center;border:solid 1px gray;">';
    C += '<a href="javascript:void(0)" onclick="jsGlobalChangeYearDo(\''+cParent+'\','+aYears[i]+',\''+cExec+'\')">';
    C += '<img style="width:90px;height:120px;border:none;" src="/img/'+((nGlobalTipoExamePag)==2?'tran':'man')+aYears[i]+'.jpg">';
    C += '<p style="position:absolute;width:90px;bottom:4px;margin:0px;font-size:9pt;font-weight:bold;text-align:center;background-color:rgba(255,255,255,0.2);">';
    C += '<\/a>';
    C += '<a href="javascript:void(0)" onclick="jsGlobalChangeYearDo(\''+cParent+'\','+aYears[i]+',\''+cExec+'\')">';
    C += ((nGlobalTipoExamePag==2)?'Transferência':'FUVEST')+'<br>'+aYears[i];
    C += '<\/a>';
    C += '<\/p>';           
    C += '<\/div>'; 
  }
  C += '<\/div>';
  cAux = 'jsRemoveWindow("'+cParent+'_year");';
  C += "<a class='cOWButton' id='idButtonCloseWindow' href='javascript:void(0)' onclick='"+cAux +"' style='margin:auto;width:100px;height:20px;margin-top:5px;padding-top:2px'>Fechar<\/a>";
         
  jsCreateWindowN(cParent+'_year', '/img/ow', 'cOW', [6, 5, 10, 9, 20, 20], cCaption, nX, nY,nW,0,3000,C); 
}

function jsGlobalTituloEstatistica(nAno,cAnoVet,lDirectLink,lCSV) {
  var C = '';
  var nAnoAnterior, nAnoPosterior;
  var aAnoVet = window[cAnoVet];
  
  C += '<a href="javascript:void(0)" onclick="jsGlobalChangeYear(\'idManual\',\'Escolha o Ano de Execução da Estatística\','+cAnoVet+',\'jsLocalChangeYear\')">';
  C += '<img id="idManual" style="float:left;width:60px;border:solid 2px white;margin:0px 10px 0px 0px;" src="/img/man'+nAno+'.jpg">';
  C += '<\/a>';

  C += '<p class="cFUVTitle" style="margin:0px 0px 0px 0px;">';
          
  nAnoAnterior = 0;
  for (i=0;i<(aAnoVet.length-1);i++) {
    if (aAnoVet[i+1]==nAno) {
      nAnoAnterior = aAnoVet[i];
      break;
    }
  }
  
  nAnoPosterior = 0;
  for (i=1;i<aAnoVet.length;i++) {
    if (aAnoVet[i-1]==nAno) {
      nAnoPosterior = aAnoVet[i];
      break;
    }
  }
  
  if (nAnoAnterior!=0) {
    C += "<a tabindex='100' href='?anofuv="+nAnoAnterior+"'><img src='/img/ultbacks.gif' style='border:none;vertical-align:middle;margin-right:5px;' alt='Ir para FUVEST " +(nAnoAnterior)+ "'><\/a>";
  }
  C += 'VESTIBULAR FUVEST '+nAno;
  if (nAnoPosterior!=0) {
    C += "<a tabindex='100' href='?anofuv="+nAnoPosterior+"'><img src='/img/ultnexts.gif' style='border:none;vertical-align:middle;margin-left:5px;' alt='Ir para FUVEST " +(nAnoPosterior)+ "'><\/a>";
  }
  C += '<\/p>';
  
  if (lDirectLink) {
    C += "<div style='position:absolute;top:4px;right:10px;height:14px;width:140px;text-align:center;padding:2px;font-family:helvetica;font-size:8pt;letter-spacing:-0px;background-color:rgb(255,255,200);border:solid 1px gray;'>";
    C += "<a title='Cria um link direto para esta estatística' href='javascript:jsLocalCreateLink()'>";
    C += "Criar um LINK permanente";
    C += "<\/a>";
    C += "<\/div>";
  }
  
  if (lCSV) {
    C += "<div style='position:absolute;top:34px;right:10px;height:14px;width:140px;text-align:center;padding:2px;background-color:rgb(255,255,200);border:solid 1px gray;font-family:helvetica;font-size:8pt;letter-spacing:-0px;'>";
    C += "<a title='Baixar arquivo CSV' href='javascript:void(0)' onclick='jsLocalGenerateCSV()'>Baixar Arquivo CSV<\/a>";
    C += "<\/div>";
  }
  
  return C;
}

function jsGlobalExisteAno(nAno,cAnoVet) {
  var i;
  var aAnoVet = window[cAnoVet];
  for (i=0;i<aAnoVet.length;i++) {
    if (aAnoVet[i]==nAno) {
      return '';
    }
  }
  return 'Esta informação não está disponível para o ano de '+nAno+'. <a href="javascript:void(0)" onclick="jsGlobalChangeYear(\'idManual\',\'Escolha o Ano de Execução da Estatística\','+cAnoVet+',\'jsLocalChangeYear\')">Clique aqui<\/a> para escolher outro ano.';
}

function jsCapitalise(string) {
  var a = string.toLowerCase().split(" ");
  var i;
  var r = '';
  var s = '';
  for (i=0;i<a.length;i++) {
    s = a[i];
    if (!((s=='do')||(s=='da')||(s=='de')||(s=='dos')||(s=='das')||(s=='no'))) {
      s = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }
    if (r!='') {
      r += ' ';
    }
    r = r+s;
  }
  return r;
}

function jsShowHide(cId) {
  if ($("#"+cId).is(':visible')) {
    $("#"+cId).hide();
    $("#"+cId+"A").html("+");
  }
  else {
    $("#"+cId).show();
    $("#"+cId+"A").html("-");
  }
}  

function jsGlobalChecked(cId) {
  return $('#'+cId).is(':checked');
}

function jsGlobalGetAge(birthDate) {
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function jsgGetArea(i) {
  if (i==1) {
    return 'Exatas';
  }
  else if (i==2) {
    return 'Humanas';
  }
  else if (i==3) {
    return 'Biológicas';
  }
  else {
    return 'Área inválida ['+i+']';
  }
}

function jsgDrawHist(C,H,L,nMedia,nVoce,cTitleX,cBack1,cBack2,nMinX) {
  var canvas = document.getElementById(C);
  var ctx = canvas.getContext('2d');
  var nW = canvas.width;
  var nH = canvas.height;
  var nHj,nHe;
  var nML = 50;
  var nMR = 5;
  var nMB = 30;
  var nMT = 40;
  var i,j;
  var nMaxH; 
  var nWH = (nW-nML-nMR)/H[0].length;
  var metrics;
  var nWT;
  var S = '';
  var nWF1,nWF2;
  var S1,S2;
  var nLast;
  var nTotal = 0;
  var nHist;
  var aColors = ['#c0c0ff','#8080ff'];
  var nX;
  var nValX;
  if (nMinX === undefined) {
    nMinX = 0;
  }

  if (cBack1!='') {
    if (cBack1!=cBack2) {
      var grd = ctx.createLinearGradient(0,0,0,nH);
      grd.addColorStop(0,cBack1);
      grd.addColorStop(1,cBack2);
      ctx.fillStyle = grd;
    }
    else {
      ctx.fillStyle = cBack1;
    }
    ctx.beginPath();
    ctx.rect(0,0,nW,nH);
    ctx.fill();
  }

  nMaxH = H[0][0];
  for(j=1;j<H[0].length;j++) {
    nTotal += H[0][j];
    if (H[0][j]>nMaxH) {
      nMaxH = H[0][j];
    }
  }
  
  
  // Qual é a porcentagem máxima?
  var nMaxPorc = nMaxH/nTotal*100;
  var nExp = 0;
  var nFront = nMaxPorc;
  var nFrontDiv,nExpDiv;
  if (nFront<1) {
    nExp = 0;
    while (nFront<1) {
      nFront = nFront*10;
      nExp = nExp-1;
    }
  }
  else {
    nExp = 0;
    while (nFront>10) {
      nFront = nFront/10;
      nExp = nExp+1;
    }
  }
  
  var nDiv = nFront/10;
  var nFrontDiv = nDiv;
  if (nFrontDiv<1) {
    nExpDiv = 0;
    while (nFrontDiv<1) {
      nFrontDiv = nFrontDiv*10;
      nExpDiv = nExpDiv-1;
    }
  }
  else {
    nExpDiv = 0;
    while (nFrontDiv>10) {
      nFrontDiv = nFrontDiv/10;
      nExpDiv = nExpDiv+1;
    }
  }
  
  var nYDiv = Math.round(nFrontDiv)*Math.pow(10, nExpDiv)*Math.pow(10, nExp);
  
  // Escrever os valores em Y
  i = 0;
  var nCont = 0;
  var nHB = 0;
  var nX1 = nML;
  var nX2 = nW-nMR;
  var nY1 = nH-nMB-nHB;
  var nY2 = nMT;
  ctx.font = 'normal 8px Helvetica';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.fillStyle = 'black';
  while (nY1>=nY2) {
    if ((nCont % 5)==0) {
      ctx.beginPath();
      ctx.moveTo(nX1,nY1);
      ctx.lineTo(nX2,nY1);
      ctx.stroke();
      if (nExpDiv<0) {
       S = ''+sprintf("%1."+(-nExpDiv)+"f",i)+'%';
       metrics = ctx.measureText(S);
       ctx.fillText(S,nX1-2-metrics.width,nY1+2);
      }
      else {
        S = i+'%';
        metrics = ctx.measureText(S);
        ctx.fillText(S,nX1-2-metrics.width,nY1+2);
      }
    }
    else {
      ctx.beginPath();
      ctx.moveTo(nX1+2,nY1);
      ctx.lineTo(nX1+5,nY1);
      ctx.stroke();
    }
    i = i+nYDiv/5;
    nHB = (i/100)*nTotal*(nH-nMB-nMT)/nMaxH;
    nY1 = nH-nMB-nHB;
    nCont = nCont+1;
    if (nCont>200) break;
  }
    
  
  
  // Desenha o eixo X
  ctx.font = 'normal 6pt Helvetica';
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.moveTo(nML+0*nWH-2,nH-nMB);
  ctx.lineTo(nML+(H[0].length+1)*nWH+2,nH-nMB);
  ctx.stroke();
  ctx.fillStyle = 'black';
  
  var nMod = 5;
  metrics = ctx.measureText('1000');
  if ((nMod*nWH)<metrics.width) {
    nMod = 10;
    if ((nMod*nWH)<metrics.width) {
      nMod = 20;
      if ((nMod*nWH)<metrics.width) {
        nMod = 40;
        if ((nMod*nWH)<metrics.width) {
          nMod = 50;
          if ((nMod*nWH)<metrics.width) {
            nMod = 100;
          }
        }
      }
    }
  }
  
  var nMod2 = 1;
  if (nMod!=5) {
    nMod2 = Math.floor(nMod/5);
  }
  
  
  for(j=0;j<H[0].length;j++) {
    ctx.strokeStyle = 'black';
    nValX = j+nMinX;
    
    if ((nValX%nMod2)==0) {
      ctx.beginPath();
      ctx.moveTo(nML+(j+0.5)*nWH,nH-nMB-1);
      ctx.lineTo(nML+(j+0.5)*nWH,nH-nMB+3);
      ctx.stroke();
    }
    
    if ((nValX%nMod)==0) {
      ctx.strokeStyle = 'gray';
      ctx.beginPath();
      ctx.moveTo(nML+(j+0.5)*nWH,nMT);
      ctx.lineTo(nML+(j+0.5)*nWH,nH-nMB);
      ctx.stroke();
      metrics = ctx.measureText(j);
      ctx.fillText(''+nValX,nML+(j+0.5)*nWH-metrics.width/2,nH-nMB+10);
    }
  }
  S1 = cTitleX;
  ctx.font = 'normal 12px Helvetica';
  nWF1 = ctx.measureText(S1).width;
  ctx.fillText(S1,nML+(nW-nML-nMR)/2-nWF1/2,nH-4);

  if (nH>=200) {
    S1 = 'Quantidade de Candidatos';
    ctx.font = 'normal 14px Helvetica';
    nWF1 = ctx.measureText(S1).width;
  
    if (nExpDiv<0) {
      S = ''+sprintf("%1."+(-nExpDiv)+"f",nYDiv)+'%';    
    }
    else {
      S = nYDiv+'%';
    }
    S2 = sprintf("%.2f",nYDiv*nTotal/100);
    S2 = '('+S+' equivale a '+S2+' candidatos)';
    ctx.font = 'normal 11px Helvetica';
    nWF2 = ctx.measureText(S2).width;
  
    ctx.save();
    ctx.translate(nW/2, nH/2);
    ctx.rotate(-Math.PI/2);
    ctx.translate(-nH/2, -nW/2);
    ctx.font = 'normal 14px Helvetica';
    ctx.fillText(S1,nMB+(nH-nMB-nMT)/2-nWF1/2,15);
    ctx.font = 'normal 11px Helvetica';
    ctx.fillText(S2,nMB+(nH-nMB-nMT)/2-nWF2/2,25);
    ctx.restore();
  }
  

  // pinta o histograma
  for (nHist=0;nHist<H.length;nHist++) {
    ctx.fillStyle = aColors[nHist];
    for(j=0;j<H[nHist].length;j++) {
      nHj = (nH-nMB-nMT)*H[nHist][j]/nMaxH;
      if (nHj>0) {
       ctx.beginPath();
       ctx.rect(nML+j*nWH, nH-nMB-nHj, nWH, nHj);
       ctx.fill();
      }
    }
  }
  
  // Desenha as linhas
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 0.5;
  for(j=0;j<H[0].length;j++) {
    nHj = (nH-nMB-nMT)*H[0][j]/nMaxH;
    if (nHj>0) {
      ctx.beginPath();
      ctx.rect(nML+j*nWH, nH-nMB-nHj, nWH, nHj);      
      ctx.stroke();
    }
  }

  
  // Desenha as legendas
  ctx.font = 'normal 8pt Helvetica';
  ctx.lineWidth = 1;
  nX = nW-10;
  for (i=0;i<L.length;i++) {
    nWF = ctx.measureText(L[i]).width;
    nX -= nWF+14;
    ctx.fillStyle = 'black';
    ctx.fillText(L[i],nX+12,10);
    ctx.fillStyle = aColors[i];
    ctx.beginPath();
    ctx.rect(nX, 2, 10, 10);      
    ctx.fill();
    ctx.stroke();
    nX -= 10;
  }
  
  // Desenha a média
  ctx.font = 'normal 7pt Helvetica';
  ctx.lineWidth = 0.5;
  nX = nML+(nMedia-nMinX+0.5)*nWH;
  ctx.fillStyle = 'black';
  ctx.fillText('Média: '+nMedia,nX+8,24);
  ctx.beginPath();
  ctx.moveTo(nX, nH-nMB);
  ctx.lineTo(nX, 20);
  ctx.lineTo(nX+6, 20);
  ctx.stroke();
  
  if (nVoce>=0) {
    // Desenha a sua nota
    ctx.font = 'normal 7pt Helvetica';
    ctx.lineWidth = 0.5;
    nX = nML+(nVoce+0.5)*nWH;
    ctx.fillStyle = 'black';
    ctx.fillText('Você: '+nVoce,nX+8,34);
    ctx.beginPath();
    ctx.moveTo(nX, nH-nMB);
    ctx.lineTo(nX, 30);
    ctx.lineTo(nX+6, 30);
    ctx.stroke();
  }
 }
 
function jsgLoadScript(C) {
  jsGlobalLoadScript(cGlobalBINURL+"js/"+C, function() {
  });
} 

function jsgRealcaExame() {
  var cId = gup('hl');
  if (cId!='') {
    cId = 'id'+cId;
    if ($('#'+cId).length!=0) {
      $('#'+cId).removeClass('fOutros').addClass('fOutrosHL');
      $(window).scrollTop($("#"+cId).offset().top);
    }
  }
}

function jsgStrMax(s,nMax) {
  if (s.length>nMax) {
    s = s.substr(0,nMax)+'...';
  }
  return s;
}

function jsgEscolheAno(aValidos,nAno,f) {
 var C = '';
 var i;
 C += '<div style="position:absolute;right:2px;top:2px;width:74px;height:105px;border-radius:4px;border:solid 1px gray;text-align:center;padding:2px;cursor:pointer;" onclick="jsgToggleVisibility(\'idEscolheAno\')">';
 C += '<p style="margin:0px"><img src="/img/man'+nAno+'.jpg" style="height:90px;width:70px;"><\/p>';
 C += '<p style="margin:0px;font-weight:bold;font-size:10px;">FUVEST '+nAno+'<\/p>';
 C += '<img src="/img/comboarrow.png" style="position:absolute;top:0px;right:4px;">';
 C += '<\/div>';
 
 C += '<div id="idEscolheAno" style="position:absolute;right:2px;top:111px;width:74px;height:300px;border-radius:4px;border:solid 1px gray;text-align:center;padding:2px;overflow:auto;background-color:rgb(255,255,240);display:none;">';
 for(i=0;i<aValidos.length;i++) {
   if (nAno!=aValidos[i]) {
     C += '<div style="margin:0px;padding:1px;border:solid 1px gray;cursor:pointer;" onclick="jsgHide(\'idEscolheAno\');window[\''+f+'\']('+aValidos[i]+')">';
     C += '<p style="margin:0px"><img src="/img/man'+aValidos[i]+'.jpg" style="height:70px;width:53px;"><\/p>';
     C += '<p style="margin:0px;font-weight:bold;font-size:8px;">FUVEST '+aValidos[i]+'<\/p>';
     C += '<\/div>';
   }
 }
 C += '<div>';
 C += '<\/div>';
 C += '<\/div>';
 
 return C;
}

function jsgPrint(data,title) {
  var mywindow = window.open('',title,'height=400,width=600');
  mywindow.document.write('<html><head><title>'+title+'</title>');
  
  mywindow.document.write('</head><body >');
  mywindow.document.write(data);
  mywindow.document.write('</body></html>');

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10

  mywindow.print();
  mywindow.close();

  return true;
}

$(document).ready(function() {   
  var aDivList = ["FVest", "FNovid", "FEstat", "FManu", "FList", "FProva", "FCalend", "FInform", "Trans", "TCalend", "TNovid", "TInform", "TEstat", "TManu", "TList", "TProva"];
  var aDirList = ["fuvest.stm", "novidade/novidade.stm", "estat/estat.stm", "manual/manual.stm", "listas/listas.stm", "provas/provas.stm", "calend/calend.stm", "informes/informes.stm", "transf.stm", "calend/calend.stm", "novidade/novidade.stm", "informes/informes.stm", "estat/estat.stm", "manual/manual.stm", "listas/listas.stm", "provas/provas.stm"];
  var aExaList = ["FUVEST", "FUVEST", "FUVEST", "FUVEST", "FUVEST", "FUVEST", "FUVEST", "FUVEST", "Transferência", "Transferência", "Transferência", "Transferência", "Transferência", "Transferência", "Transferência", "Transferência", "Transferência"];
  var aDirpList = ["vest", "vest", "vest", "vest", "vest", "vest", "vest", "vest", "tran", "tran", "tran", "tran", "tran", "tran", "tran", "tran", "tran"];
  var C = "";
  var nAnoIni = 0;
  var nAnoFim = 0;
  var nAnoAtual = 0;
  var cAux = "";
  var nPos = 0;
  var nAno = 0;
  var i = 0;
  var cContent = "";
  var cTipo='vest';
  var cNome='FUVEST';
  var cFile='fuvest';  
  var cDir="";
  var cNum="";  
  var S = "";
  var aTransf = [["idETransf","estat"],["idMTransf","manual"],["idLTransf","listas"],["idPTransf","provas"],["idCTransf","calend"],["idITransf","informes"],["idNTransf","novidade"],["idTransf","transf"]];
  var aVest = [["idEF","estat"],["idMF","manual"],["idLF","listas"],["idPF","provas"],["idCF","calend"],["idIF","informes"],["idNF","novidade"],["idF",""]];
  var aOutros = [["idEO",""],["idMO",""],["idLO",""],["idPO",""],["idCO",""],["idIO",""],["idNO",""],["idO",""]];
  var aPN = ["Prev","Next","Current"];
  var O;
  var cSDir;
  
  for (i=0;i<aTransf.length;i++) {
    for (j=0;j<2;j++) {
      O = $("#"+aTransf[i][0]+aPN[j]);
      if (O.length!==0) {
        if (aTransf[i][1]=="transf") {
          cSDir = "";
        }
        else {
          cSDir = aTransf[i][1]+"/";
        }
        if ((j==0)&&(nGlobalAnoExamePag>nGlobalAnoTransMin)) {
          O.html("<a tabindex='100' href='/tran"+(nGlobalAnoExamePag-1)+"/"+cSDir+aTransf[i][1]+".stm'><img src='/img/ultback.gif' style='border:none;width:32px;height:32px;' alt='Ir para Transferência "+(nGlobalAnoExamePag-1)+"'></a>");
        }
        if ((j==1)&&(nGlobalAnoExamePag<nGlobalAnoTrans)) {
          O.html("<a tabindex='100' href='/tran"+(nGlobalAnoExamePag+1)+"/"+cSDir+aTransf[i][1]+".stm'><img src='/img/ultnext.gif' style='border:none;width:32px;height:32px;' alt='Ir para Transferência "+(nGlobalAnoExamePag+1)+"'></a>");
        }
      }
    }
  }
  
  for (i=0;i<aVest.length;i++) {
    for (j=0;j<2;j++) {
      O = $("#"+aVest[i][0]+aPN[j]);
      if (O.length!==0) {
        if (aVest[i][1]=="") {
          S = "fuvest";
        }
        else {
          S = aVest[i][1]+"/"+aVest[i][1];
        }
        if ((j==0)&&(nGlobalAnoExamePag>nGlobalAnoFuvMin)) {          
          O.html("<a tabindex='100' href='/vest"+(nGlobalAnoExamePag-1)+"/"+S+".stm'><img src='/img/ultback.gif' style='border:none;width:32px;height:32px;' alt='Ir para FUVEST "+(nGlobalAnoExamePag-1)+"'></a>");
        }
        if ((j==1)&&(nGlobalAnoExamePag<nGlobalAnoFuvMax)) {
          O.html("<a tabindex='100' href='/vest"+(nGlobalAnoExamePag+1)+"/"+S+".stm'><img src='/img/ultnext.gif' style='border:none;width:32px;height:32px;' alt='Ir para FUVEST "+(nGlobalAnoExamePag+1)+"'></a>");
        }
      }
    }
  }
  
  for (i=0;i<aOutros.length;i++) {
    for (j=0;j<aPN.length;j++) {
      O = $("#"+aOutros[i][0]+aPN[j]);
      if (O.length!==0) {
        if ((j==0)&&(nGlobalAnoExamePag>nGlobalAnoOutrosMin)) {
          S = "outros"+(nGlobalAnoExamePag-1);
          O.html("<a style='font-size:16px;vertical-align:middle;' title='Ir para Outros Exames "+(nGlobalAnoExamePag-1)+"' tabindex='100' href='/outros/"+S+".stm'>&#9664;</a>");
        }
        if ((j==1)&&(nGlobalAnoExamePag<nGlobalAnoOutros)) {
          S = "outros"+(nGlobalAnoExamePag+1);
          O.html("<a style='font-size:16px;vertical-align:middle;' title='Ir para Outros Exames "+(nGlobalAnoExamePag+1)+"' tabindex='100' href='/outros/"+S+".stm'>&#9654;</a>");
        }
        if (j==2) {
          S = "outros"+nGlobalAnoExamePag;
          O.html("<a title='Ir para Outros Exames "+(nGlobalAnoExamePag)+"' tabindex='100' href='/outros/"+S+".stm'>OUTROS EXAMES "+nGlobalAnoExamePag+"</a>");
        }        
      }
    }
  }
  
  if (nGlobalTipoExamePag==3) {
    jsgRealcaExame();
  }
  
  if ($("#idTopMost").length!==0) {
    $("#idTopMost").html('<a href="#maincontent">Ir para o conteúdo principal da página<\/a>');
  }
  
  if ($("#idTopContent").length!==0) {
    $("#idTopContent").html('<a name="#maincontent"><\/a>');
  }
  
  
  C += "<div class='cHideFromPrint' style='position:absolute;top:-40px;left:0px;width:900px;height:40px;background-image:url("+cGlobalFUVURL+"img/fundo_principal.png);'>";
  C += "<\/div>";
  $("#idMainDIV").append(C);
     
  C = "";
  C += "<div class='cHideFromPrint' style='position:absolute;top:0px;left:0px;width:100%;height:40px;background-image:url("+cGlobalFUVURL+"img/backblue50t.png)'>";
     
  C += "<div class='cHideFromPrint' style='width:900px;height:34px;margin:auto;padding:2px;position:relative;'>";
  
  C += "<a title='Universidade de São Paulo' href='https://web.archive.org/web/20170702002901/http://www.usp.br'><img src='/pics/usp.png' style='margin:6px 0px 0px 0px;'></a>";
     
  C += "<div id='idM01L' class='cML1' style='margin-left:20px;'><\/div>";
  C += "<div id='idM01M' class='cMM1'><a tabindex='10001' href='"+cGlobalFUVURL+"vest"+nGlobalAnoFuv+"/fuvest.stm' id='idM01' class='cAM' onmouseover='jsGlobalMenuOver(this)' onmouseout='jsGlobalMenuOut(this)'>FUVEST "+nGlobalAnoFuv+"<\/a><\/div>";
  C += "<div id='idM01R' class='cMR1'><\/div>";
     
  C += "<div id='idM02L' class='cML1'><\/div>";
  C += "<div id='idM02M' class='cMM1'><a tabindex='10002' href='"+cGlobalFUVURL+"tran"+nGlobalAnoTrans+"/transf.stm' id='idM02' class='cAM' onmouseover='jsGlobalMenuOver(this)' onmouseout='jsGlobalMenuOut(this)'>Transferência "+nGlobalAnoTrans+"<\/a><\/div>";
  C += "<div id='idM02R' class='cMR1'><\/div>";     
     
  C += "<div id='idM03L' class='cML1'><\/div>";
  C += "<div id='idM03M' class='cMM1'><a tabindex='10003' href='"+cGlobalFUVURL+"outros/outros"+nGlobalAnoOutros+".stm' id='idM03' class='cAM' onmouseover='jsGlobalMenuOver(this)' onmouseout='jsGlobalMenuOut(this)'>Outros Exames<\/a><\/div>";
  C += "<div id='idM03R' class='cMR1'><\/div>";     
     
  C += "<div id='idM04L' class='cML1'><\/div>";
  C += "<div id='idM04M' class='cMM1'><a tabindex='10004' href='"+cGlobalFUVURL+"novidade/novidade.html' id='idM04' class='cAM' onmouseover='jsGlobalMenuOver(this)' onmouseout='jsGlobalMenuOut(this)'>Novidades<\/a><\/div>";
  C += "<div id='idM04R' class='cMR1'><\/div>";
     
  C += "<div id='idM05L' class='cML1'><\/div>";
  C += "<div id='idM05M' class='cMM1'><a tabindex='10005' href='"+cGlobalBINURL+"inscr/userinfo.php' id='idM05' class='cAM' onmouseover='jsGlobalMenuOver(this)' onmouseout='jsGlobalMenuOut(this)'>Usuários<\/a><\/div>";
  C += "<div id='idM05R' class='cMR1'><\/div>";     
     
  C += "<div id='idM06L' class='cML1'><\/div>";
  C += "<div id='idM06M' class='cMM1'><a tabindex='10006' href='"+cGlobalFUVURL+"email/email.html' id='idM06' class='cAM' onmouseover='jsGlobalMenuOver(this)' onmouseout='jsGlobalMenuOut(this)'>Contato<\/a><\/div>";
  C += "<div id='idM06R' class='cMR1'><\/div>";
     
  C += "<div id='idTopUserInfo' class='cTopUserInfoDiv'><\/div>";
     
  C += "<\/div>";
  C += "<\/div>";
  $("body").append(C);

  var nWBody = $("body").width();
  var nHBody = $("body").height();
  var nWT = $("#idTopDIV").outerWidth();
  var nHT = $("#idTopDIV").outerHeight();
  var nLT = $("#idTopDIV").offset().left;
  var nTT = $("#idTopDIV").offset().top;     
     
  var nY = nTT;
  var nW = 110;
  var nH = 300;
  var nX = nLT-nW-2;
  var cImgExt = "png";
  var cTemplate = cGlobalFUVURL+"img/lightblue_rrw_";
  var aW = [11, 11, 11, 11];
  var nYT = 0;
  if (nX>=0) {
    C = "<img id='idActualManInfo' onmouseover='jsManListMount(this)' class='cHideFromPrint' style='position:absolute;right:10px;top:4px;width:80px;height:105px;cursor:pointer;' id='idImg' src='/img/man"+nUltimoManualFUVEST+".jpg'>";
    $("#idTopDIV").append(C);
  }

      
  for (i=0; i<aDivList.length; i++) { 
    if ($("#idDIV"+aDivList[i]).length!==0) {
      cContent = "<div style='float:right;margin:2px;padding:4px;text-align:right;'><span class='cGoto'><a href='javascript:void;' onclick='jsGlobalGotoSelect(\"idSelectAnoVest\");'>Ir Para<\/a><\/span> <select onchange='jsGlobalGotoSelect(\"idSelectAnoVest\");' name='idSelectAnoVest' id='idSelectAnoVest' size='1' style='margin-left:5px;'>";
    
      if (aDirpList[i]=="vest") {
        nAnoIni = nGlobalAnoFuvMin;
        nAnoFim = nGlobalAnoFuv;
        cAux = ""+window.location;
        nPos = cAux.indexOf("/vest");
        if (nPos!==0) {
          nAnoAtual = cAux.substr(nPos+5, 4);
        }
      }
      else if (aDirpList[i]=="tran") {
        nAnoIni = nGlobalAnoTransMin;
        nAnoFim = nGlobalAnoTrans;
        cAux = ""+window.location;
        nPos = cAux.indexOf("/tran");
        if (nPos!==0) {
          nAnoAtual = cAux.substr(nPos+5, 4);
        }
      }
    
      for (nAno=nAnoIni;nAno<=nAnoFim;++nAno) {
        cContent += '<option value="'+cGlobalFUVURL+aDirpList[i]+nAno+"/"+aDirList[i]+'"'+((nAno==nAnoAtual)?' selected':'')+'>'+aExaList[i]+' '+nAno+'<\/option>';
      }
      cContent += '<\/select><\/div>';
      $("#idDIV"+aDivList[i]).html(cContent);
    }
  }
   
  if ($("#idDIVOut").length!==0) {
    cContent = "<div style='float:right;margin:2px;padding:4px;text-align:right;'><span class='cGoto'><a href='javascript:void;' onclick='jsGlobalGotoSelect(\"idSelectAnoVest\");'>Ir Para<\/a><\/span> <select onchange='jsGlobalGotoSelect(\"idSelectAnoVest\");' name='idSelectAnoVest' id='idSelectAnoVest' size='1' style='margin-left:5px;'>";
    for (nAno=nGlobalAnoOutrosMin; nAno<=nGlobalAnoOutros; ++nAno) {
      cContent += '<option value="/outros/outros'+nAno+'.stm"'+((nAno==nGlobalAnoExamePag)?' selected':'')+'>Outros Exames '+nAno+'<\/option>';
    }
    cContent += '<\/select><\/div>';
    $("#idDIVOut").html(cContent);
  }
   
  if ($("#idTRHeader").length!==0) {
    cContent = "<p style='margin:0px;'><a tabindex='40000' href='"+cGlobalFUVURL+"'><img src='"+cGlobalFUVURL+"img/f.gif' style='border:none'><\/a><\/p>";
    cContent += "<p style='margin:0px;font-family:helvetica;font-size:7pt;text-align:center;'>Rua Alvarenga 1945/1951 (Portão Principal da USP)<\/p>";
    cContent += "<p style='margin:0px;font-family:helvetica;font-size:7pt;text-align:center;'>Butantã, São Paulo, SP - CEP 05509-004<\/p>";
    //cContent += "<p style='margin:0px;font-family:helvetica;font-size:7pt;text-align:center;'>Telefone: (11) 3093-2300<\/p>";
    $("#idTRHeader").html(cContent);
  }
   
  if ($("#idDIVLinks").length!==0) {
    cContent = "";
    cContent += "<p class='cHideFromPrint' style='margin:0px;'><a tabindex='13000' href='../novidade/novidade.stm'>Novidades<\/a>";
    cContent += " <a tabindex='13001' href='../informes/informes.stm'>Informes<\/a>";
    cContent += " <a tabindex='13002' href='../estat/estat.stm'>Estatísticas<\/a>";
    cContent += " <a tabindex='13003' href='../manual/manual.stm'>Manuais<\/a>";
    cContent += " <a tabindex='13004' href='../listas/listas.stm'>Listas<\/a>";
    cContent += " <a tabindex='13005' href='../provas/provas.stm'>Provas<\/a>";
    cContent += " <a tabindex='13006' href='../calend/calend.stm'>Calend&aacute;rio<\/a><\/p>";
    $("#idDIVLinks").html(cContent);
  }
   
  if ($("#idDIVLinksAbs").length!==0) {
    cContent = "";
    cTipo='vest';
    cNome='FUVEST';
    cFile='fuvest';
    if (nGlobalTipoExamePag==2) {
      cTipo='tran';
      cNome='Transferência';
      cFile='transf';
    }
    cContent += "<p class='cHideFromPrint' style='margin:0px;'><a style='color:maroon;' href='"+cGlobalFUVURL+cTipo+nGlobalAnoExamePag+"/"+cFile+".stm'>["+cNome+" "+nGlobalAnoExamePag+"]<\/a> <a tabindex='13000' href='/"+cTipo+nGlobalAnoExamePag+"/novidade/novidade.stm'>Novidades<\/a>";
    cContent += " <a tabindex='13001' href='"+cGlobalFUVURL+""+cTipo+nGlobalAnoExamePag+"/informes/informes.stm'>Informes<\/a>";
    cContent += " <a tabindex='13002' href='"+cGlobalFUVURL+""+cTipo+nGlobalAnoExamePag+"/estat/estat.stm'>Estat&iacute;sticas<\/a>";
    cContent += " <a tabindex='13003' href='"+cGlobalFUVURL+""+cTipo+nGlobalAnoExamePag+"/manual/manual.stm'>Manuais<\/a>";
    cContent += " <a tabindex='13004' href='"+cGlobalFUVURL+""+cTipo+nGlobalAnoExamePag+"/listas/listas.stm'>Listas<\/a>";
    cContent += " <a tabindex='13005' href='"+cGlobalFUVURL+""+cTipo+nGlobalAnoExamePag+"/provas/provas.stm'>Provas<\/a>";
    cContent += " <a tabindex='13006' href='"+cGlobalFUVURL+""+cTipo+nGlobalAnoExamePag+"/calend/calend.stm'>Calend&aacute;rio<\/a><\/p>";
    $("#idDIVLinksAbs").html(cContent);
  }
   
  if ($("#idDIVLinks1").length!==0) {
    cContent = "";
    cContent += "<p class='cHideFromPrint' style='margin:0px;'><a tabindex='13000' href='../novidade/novidade.stm'>Novidades<\/a>";
    cContent += " <a tabindex='13001' href='../../informes/informes.stm'>Informes<\/a>";
    cContent += " <a tabindex='13002' href='../../estat/estat.stm'>Estat&iacute;sticas<\/a>";
    cContent += " <a tabindex='13003' href='../../manual/manual.stm'>Manuais<\/a>";
    cContent += " <a tabindex='13004' href='../../listas/listas.stm'>Listas<\/a>";
    cContent += " <a tabindex='13005' href='../../provas/provas.stm'>Provas<\/a>";
    cContent += " <a tabindex='13006' href='../../calend/calend.stm'>Calend&aacute;rio<\/a><\/p>";
    $("#idDIVLinks1").html(cContent);
  }
   
  if ($("#idDIVLinksS").length!==0) {
    cContent = "";
    cContent += "<p class='cHideFromPrint' style='margin:0px;'><a tabindex='13000' href='novidade/novidade.stm'>Novidades<\/a>";
    cContent += " <a tabindex='13001' href='informes/informes.stm'>Informes<\/a>";
    cContent += " <a tabindex='13002' href='estat/estat.stm'>Estat&iacute;sticas<\/a>";
    cContent += " <a tabindex='13003' href='manual/manual.stm'>Manuais<\/a>";
    cContent += " <a tabindex='13004' href='listas/listas.stm'>Listas<\/a>";
    cContent += " <a tabindex='13005' href='provas/provas.stm'>Provas<\/a>";
    cContent += " <a tabindex='13006' href='calend/calend.stm'>Calend&aacute;rio<\/a><\/p>";
    $("#idDIVLinksS").html(cContent);
  }
   
  if (($("#idDIVFMenu").length!==0)||($("#idDIVFMenu1").length!==0)||($("#idDIVFMenu2").length!==0)||($("#idDIVFMenu3").length!==0)||($("#idDIVFMenuA").length!==0)) {
    cContent = "";
    cDir = "";
    cNum = "";
    if ($("#idDIVFMenu1").length!==0) {
      cDir = "../";
      cNum = "1";  
    }
    if ($("#idDIVFMenu2").length!==0) {
      cDir = "../../";
      cNum = "2";  
    }
    if ($("#idDIVFMenu3").length!==0) {
      cDir = "../../../";
      cNum = "3";  
    }
    if ($("#idDIVFMenuA").length!==0) {
      nAnoAtual = 0;
      cDir = "";
      cAux = ""+window.location;
      nPos = cAux.indexOf("/vest");
      if (nPos>=0) {
        nAnoAtual = cAux.substr(nPos+5, 4);
        cDir = "/vest"+nAnoAtual+"/";
      }
      else {
        nPos = cAux.indexOf("/tran");
        nAnoAtual = cAux.substr(nPos+5, 4);
        cDir = "/tran"+nAnoAtual+"/";
      }
      cNum = "A";  
    }   
    cContent += "<p class='cHideFromPrint' style='margin:0px;'><a tabindex='13000' href='"+cDir+"novidade/novidade.stm'>Novidades<\/a> | ";
    cContent += "<a tabindex='13001' href='"+cDir+"informes/informes.stm'>Informes<\/a> | ";
    cContent += "<a tabindex='13002' href='"+cDir+"estat/estat.stm'>Estatísticas<\/a> | ";
    cContent += "<a tabindex='13003' href='"+cDir+"manual/manual.stm'>Manuais<\/a> | ";
    cContent += "<a tabindex='13004' href='"+cDir+"listas/listas.stm'>Listas<\/a> | ";
    cContent += "<a tabindex='13005' href='"+cDir+"provas/provas.stm'>Provas<\/a> | ";
    cContent += "<a tabindex='13006' href='"+cDir+"calend/calend.stm'>Calendário<\/a><\/p>";
    $("#idDIVFMenu"+cNum).html(cContent);
  }   
   
  if ($("#idDIVEInfo").length!==0) {
    cContent = "";
    if (nGlobalTipoExamePag==1) {
      if (nGlobalAnoExamePag!=nGlobalAnoFuv) {
        var cURL = window.location.href;
        var cNewURL = "";
        if (cURL.indexOf("_desempenho")<0) {
          cNewURL = cGlobalFUVURL+"vest"+nGlobalAnoFuv+"/fuvest.stm";
        }
        else {
          cNewURL = cURL.replace(nGlobalAnoExamePag,nGlobalAnoFuv);
        }
        cContent += "<div style='height:100px;'>";
        cContent += "<img src='/img/close.gif' style='float:right;margin:1px;border:none;cursor:pointer;' onclick='jsHideDiv(\"idDIVEInfo\")'>";
        cContent += "<p class='cInfoLarge'>Atenção!<\/p>";
        cContent += "<p class='cInfo' style='margin:2px 0px 2px 0px'>Esta página não contém informações sobre o exame atual. O exame que está atualmente em curso é o \"FUVEST "+nGlobalAnoFuv+"\". Clique <a href='"+cNewURL+"'>aqui<\/a> para exibir informações sobre o exame atual.<\/p>";
        cContent += "<p class='cInfo' style='font-size:8pt;font-style:italic'>Esta informação é baseada no relógio interno de seu computador.<\/p>";
        cContent += "<\/div>";
        $("#idDIVEInfo").html(jsGlobalRoundTable("ffff84",cContent,true));
      }
    }
    else if (nGlobalTipoExamePag==2) {
      if (nGlobalAnoExamePag!=nGlobalAnoTrans) {
        cContent += "<div style='font-family:helvetica;font-size:10pt;text-align:justify;line-height:150%;'>";
        cContent += "<img src='"+cGlobalFUVURL+"img/close.gif' style='float:right;margin:1px;border:none;cursor:pointer;' onclick='jsHideDiv(\"idDIVEInfo\")'>";
        cContent += "<p style='font-weight:bold;font-size:20pt;margin:0px;text-align:center;'>Atenção!<\/p>";
        cContent += "<p style='margin:0px;'>Esta página não contém informações sobre o exame de transferência atual. O exame que está atualmente em curso é o \"Transferência "+nGlobalAnoTrans+" \". Clique <a href='"+cGlobalFUVURL+"tran"+nGlobalAnoTrans+"/transf.stm'>aqui<\/a> para exibir informações sobre o exame atual.<\/p>";
        cContent += "<\/div>";
        $("#idDIVEInfo").html(jsGlobalRoundTable("ffff84", cContent,true));
      }
    }
    else if (nGlobalTipoExamePag==3) {
      if (nGlobalAnoExamePag!=nGlobalAnoOutros) {
        cContent += "<div class='fAvisoAno'>";
        cContent += "<img src='"+cGlobalFUVURL+"img/close.png' style='position:absolute;top:-10px;right:-10px;border:none;cursor:pointer;height:20px;' onclick='jsHideDiv(\"idDIVEInfo\")'>";
        cContent += "<p style='font-weight:bold;font-size:14pt;text-align:center;'>Atenção!<\/p>";
        cContent += "<p>Nesta página existem informações sobre <strong>concursos antigos</strong> ("+nGlobalAnoExamePag+"). <a href='"+cGlobalFUVURL+"outros/outros"+nGlobalAnoOutros+".stm'>Clique aqui para ter acesso a informações sobre os concursos atuais ("+nGlobalAnoOutros+")<\/a>.<\/p>";
        cContent += "<\/div>";
        $("#idDIVEInfo").html(cContent);
      }
    }
  } 
  
  //jsGlobalLoadScript(cGlobalBINURL+"js/novidades.js", function() {
  jsGlobalLoadScript("/js/novidades.js", function() {
    if ($("#idTRGNews").length!==0) {
      cContent = "";
      if (typeof(aGlobalFuvNews)!='undefined') {
        cContent += "<div id='idDivRotateNews' onmouseover='jsGlobalGNews(1)' onmouseout='jsGlobalGNews(0)' style='height:90px;overflow:hidden;font-size:8pt;'>";
        cContent += "<p id='idPFirstNews' style='height:90px;margin:0px;'><\/p>";
        for (i=1;i<=aGlobalFuvNews.items.length;i++) {
          cContent += "<p id='idPNews"+i+"' style='margin:5px 0px 0px 0px;font-weight:bold;color:maroon'>"+aGlobalFuvNews.items[i-1].data+" "+aGlobalFuvNews.items[i-1].exame+" "+aGlobalFuvNews.items[i-1].subtipo+"<\/p>";
          cContent += "<p style='margin:0px;font-weight:bold;'>"+aGlobalFuvNews.items[i-1].cabec+"<\/p>";
          
          // Auxilio para os utilizadores de leitores: colocar o tabindex das novidades no final. 
          S = aGlobalFuvNews.items[i-1].texto;
          if ((j=S.indexOf(' href'))>=0) {
            S = S.substr(0, j)+' tabindex="'+(30000+i)+'"'+S.substr(j, S.length);
          }
          
          cContent += "<p style='margin:0px;'>"+S+"<\/p>";
        } 
        cContent += "<p id='idPLastNews' style='height:90px;margin:0px;'><\/p>";
        cContent += "<\/div>";
      }
      $("#idTRGNews").html(cContent);
      nGlobalTRGNewsId = setTimeout(function () {jsGlobalTRGNewsId();}, 1000);
    }
  });   
   
  // Executar a função após carregar este script
  jsGlobalLoadScript(cGlobalBINURL+"inscr/secure.php", function() {  
    // Verificar se existe algum captcha ativo na página.
    // Neste caso, refrescá-lo
    if ($("#idCaptcha").length!==0) {
      jsGlobalRefreshCaptcha('idCaptcha');
    }
    if ($("#formcodver").length!==0) {
      jsGlobalRefreshCaptcha('formcodver');
    }    
    
    if ($("#idTopUserInfo").length!==0) {
      if ((window.jsGlobalUserCPF===undefined)||(jsGlobalUserCPF==="")) {
        C = '<p>Você ainda não está logado<\/p>';
        C += '<p><a id="idAGlobalLogin" href="javascript:void;" onclick="jsGlobalPerformLogin(\'idAGlobalLogin\')">Clique aqui para entrar no sistema<\/a><\/p>';
        $('#idTopUserInfo').html(C);       
      }
      else {
        C = '';
        if ((window.nGlobalMessageCount!==undefined)||(nGlobalMessageCount!==0)) {
          C = '<div style="float:left;width:24px;height:14px;padding-top:2px;background-image:url(http://www.fuvest.br/img/letter.gif);font-family:helvetica;font-size:7pt;color:black;text-align:center;font-weight:bold;"><a style="background-color:rgba(255,255,200,0.6);" href="'+cGlobalBINURL+'inscr/mensagens.php">&nbsp;'+nGlobalMessageCount+'&nbsp;<\/a><\/div>';
        }
        C += '<p>'+jsGlobalUserName+'<\/p>';
        C += '<p>'+jsGlobalUserEmail+' (<a href="'+cGlobalBINURL+'inscr/logoutx.php">Sair<\/a>)<\/p>';
        $('#idTopUserInfo').html(C);              
      }
    }   
 
    if ($("#idDIVFooter").length!==0) {
      if (typeof jsGlobalMostraContador == 'function') {
        jsGlobalMostraContador("idDIVFooter");
      }
      else {
        $("#idDIVFooter").html("FUVEST - Fundação Universitária para o Vestibular");
      }
      //$("#idDIVFooter").append('<p style="font-size:11px;margin:2px 0px 2px 0px;">Rua Alvarenga 1945/1951, Butantã, São Paulo, SP - CEP 05509-004 - Telefone: (11) 3093-2300</p>');
    }

    if ($("#idMainInscrDIV").length!==0) {
      if ((window.nGlobalTotExames!==undefined)&&(nGlobalTotExames>0)) {
        C = "";
        var cLink = "";
        for (i=0;i<nGlobalTotExames;i++) {
          cLink = cGlobalBINURL+"inscr/"+aGlobalExameInfo[i][4]+"?exame="+aGlobalExameInfo[i][0];
          C += "<p style='font-weight:bold;font-size:10pt;border-top:solid 1px black;padding-top:3px;margin:0px;margin-top:4px;clear:both;'>"+aGlobalExameInfo[i][3]+"<\/p>";
          C += "<p style='font-size:8pt;margin:0px 0px 0px 20px;text-align:justify;'><span style='font-weight:bold'>Início:</span> "+jsGFormatDate(aGlobalExameInfo[i][1])+"<\/p>";          
          C += "<p style='font-size:8pt;margin:0px 0px 0px 20px;text-align:justify;'><span style='font-weight:bold'>Término:</span> "+jsGFormatDate(aGlobalExameInfo[i][2])+"<\/p>";          
          if (aGlobalExameInfo[i][8]!=0) {
            C += "<p style='font-size:8pt;margin:0px 0px 0px 20px;text-align:justify;'><span style='font-weight:bold'>Taxa:</span> R$ "+sprintf("%01.2f", aGlobalExameInfo[i][8])+"<\/p>";
          }
          if (aGlobalExameInfo[i][5]!="") {
            C += "<img src='"+cGlobalBINURL+aGlobalExameInfo[i][5]+"' style='float:right;margin-left:2px;margin-bottom:2px;width:64px;'>";          
          }
          C += "<p style='font-size:8pt;margin:0px 0px 5px 0px;'><a tabindex='"+(200+i)+"' href='"+cLink+"'>"+aGlobalExameInfo[i][6]+"</a><\/p>";
        }
        C += "<div id='idLastLine' style='height:1px;'><\/div>";
        $('#idMainInscrDIV').html(C);
        $('#idMainInscrDIVContainer').show();
        
        nYT = $('#idLastLine').position().top;
        $('#idMainCol3').height(nYT+32);      
        
        jsMainColResize();
      }
    } 

  });
 

  // Informações adicionais sobre o vestibular.
  if ($("#idVestInfo").length!==0) {
    var nIndVest = -1;
    for (i=0;i<aGlobalAnoInfo.length;i++) {
      if (aGlobalAnoInfo[i][0]==nGlobalAnoExamePag) {
        nIndVest = i;
        break;
      }
    }
    C = "";
    C += "<div style='background-image:url("+cGlobalFUVURL+"img/fundo_janela_info_vestibular_top.png);width:194px;height:11px;'></div>";
    C += "<div style='background-image:url("+cGlobalFUVURL+"img/fundo_janela_info_vestibular_mid.png);width:168px;padding:0px 10px 0px 16px;'>";
    C += "<img src='"+cGlobalFUVURL+"img/man"+nGlobalAnoExamePag+".jpg' style='border:none;' alt='FUVEST "+nGlobalAnoExamePag+"'>";
       
    if (nIndVest>=0) {
      C += "<p class='cVestInfo'>FUVEST "+aGlobalAnoInfo[i][0]+"<\/p>";
      C += "<p class='cVestInfoTitle'>1º dia de inscrição<\/p>";
      C += "<p class='cVestInfoDate'>"+jsGFormatDate(aGlobalAnoInfo[i][4])+"<\/p>";
      C += "<p class='cVestInfoTitle'>1º dia da 1ª Fase<\/p>";
      C += "<p class='cVestInfoDate'>"+jsGFormatDate(aGlobalAnoInfo[i][5])+"<\/p>";
      C += "<p class='cVestInfoTitle'>1º dia da 2ª Fase<\/p>";
      C += "<p class='cVestInfoDate'>"+jsGFormatDate(aGlobalAnoInfo[i][6])+"<\/p>";
      C += "<p class='cVestInfoTitle'>1º Chamada<\/p>";
      C += "<p class='cVestInfoDate'>"+jsGFormatDate(aGlobalAnoInfo[i][7])+"<\/p>";
      C += "<p class='cVestInfoTitle'>Inscritos<\/p>";
      C += "<p class='cVestInfoNumber'>"+aGlobalAnoInfo[i][1]+"<\/p>";
      C += "<p class='cVestInfoTitle'>Convocados 2ª Fase<\/p>";
      C += "<p class='cVestInfoNumber'>"+aGlobalAnoInfo[i][2]+"<\/p>";
      C += "<p class='cVestInfoTitle'>Matriculados<\/p>";
      C += "<p class='cVestInfoNumber'>"+aGlobalAnoInfo[i][3]+"<\/p>";
    }
       
    C += "</div>";
    C += "<div style='background-image:url("+cGlobalFUVURL+"img/fundo_janela_info_vestibular_bot.png);width:194px;height:15px;'></div>";       
       
    $('#idVestInfo').html(C);
  }
      
  if ($("#idMainCol1").length!==0) {
    jsMainColResize();
  }
      
  jsGlobalForceResize();
  
  setTimeout(function () {jsGlobalForceResize();}, 4000);
  
  var cURL = window.location.href;
  
  if (typeof jsLocalMountLink == 'function') {
    cURL = jsLocalMountLink(); 
  }
  
  var cURLEnc = encodeURI(cURL);
  var c = '';
  c += '<div style="height:20px;margin-top:10px;">';
  c += '<div id="idFaceShare" style="width:160px;float:right;"><iframe src="https://web.archive.org/web/20170702002901/https://www.facebook.com/plugins/share_button.php?href='+cURLEnc+'&layout=button_count&size=small&mobile_iframe=true&width=140&height=20&appId" width="140" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe><\/div>';
  c += '<div id="idTwitterShare" style="width:100px;float:right;"><a href="https://web.archive.org/web/20170702002901/https://twitter.com/share" class="twitter-share-button" data-show-count="false"></a><script async src="//web.archive.org/web/20170702002901/http://platform.twitter.com/widgets.js" charset="utf-8"></script><\/div>';  
  c += '<\/div>';
  $('#idPageDIVContent').append(c);
  
  c = '<span style="position:absolute;left:21px;bottom:0px;display:inline-block;cursor:pointer;font-family:FontAwesome;font-size:16px;" onclick="jsgRSS(this)">&#xf09e;<\/span>';
  //c += '<span style="position:absolute;left:5px;bottom:0px;display:inline-block;cursor:pointer;font-family:FontAwesome;font-size:16px;" onclick="window.location.href=\'https://www.twitter.com/fuvest\'">&#xf081;<\/span>';
  $('#idPageDIVContent').append(c);
});

 // Calcula, pela data do computador do usuário, qual o exame em questão
jsGExameAtual();

// Verifica se existe informações sobre o exame e o ano de realização na URL
jsDecodePageYear(); 
 
// Carrega as imagens principais usadas na interface com o usuário
jsCacheImages();



}
/*
     FILE ARCHIVED ON 00:29:01 Jul 02, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:21:13 Jun 06, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.216
  esindex: 0.023
  exclusion.robots.policy: 0.201
  RedisCDXSource: 2.253
  load_resource: 45.965
  LoadShardBlock: 53.699 (3)
  PetaboxLoader3.resolve: 22.605
  PetaboxLoader3.datanode: 42.155 (4)
  CDXLines.iter: 22.496 (3)
  captures_list: 83.454
*/