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


    function jsCreateWindowN(cIdPanel, cTemplate, cClass, aW, cCaption, x, y, w, h, nZOrder, cContent, nModal) {
      if ($("#"+cIdPanel).length>0) {
        $('#'+cIdPanel).remove();
        if ($('#'+cIdPanel+'_back').length>0)  $('#'+cIdPanel+'_back').remove();
      }

      var C = "";
      var cHL = "";
      var cHM = "";
      var cHR = "";
      
      if (h!=0) {
        cHM = "height:"+(h-aW[1]-aW[3])+"px;";
        cHL = cHM;
        cHR = cHM;
      }
      else {
        cHL = "height:10px;";
        cHM = "";
        cHR = "height:10px;";
      }
      
      C += "<div style='display:block;float:left;background-image:url("+cTemplate+"tl.png);width:"+aW[0]+"px;height:"+aW[1]+"px;'></div>";
      C += "<div style='float:left;background-image:url("+cTemplate+"tm.png);width:"+(w-aW[0]-aW[2])+"px;height:"+aW[1]+"px;'></div>";
      C += "<div style='display:block;float:left;background-image:url("+cTemplate+"tr.png);width:"+aW[2]+"px;height:"+aW[1]+"px;'></div>";
      
      C += "<div id='"+cIdPanel+"HL' style='float:left;background-image:url("+cTemplate+"ml.png);width:"+aW[0]+"px;"+cHL+"clear:both;'></div>";
      C += "<div id='"+cIdPanel+"Util' style='float:left;background-image:url("+cTemplate+"mm.png);width:"+(w-aW[0]-aW[2])+"px;"+cHM+"'>";
      C += "<div style='width:"+(w-aW[0]-aW[2])+"px; height:"+(aW[5]+2)+"px;cursor:move;'>";
      C += "<div class='"+cClass+"Caption' id='"+cIdPanel+"Title' style='float:left;width:"+(w-aW[0]-aW[2]-4-aW[4]-4)+"px;height:"+(aW[5]-6+2)+"px;cursor:move;'>"+cCaption+"</div>";
      var cAux = 'jsRemoveWindow("'+cIdPanel+'")';
      C += "<div class='"+cClass+"Close' style='float:left;width:"+(aW[4])+"px;height:"+(aW[5])+"px;background-image:url("+cTemplate+"close.png);cursor:pointer;' onclick='"+cAux+"');'></div>";
      C += "</div>";
      C += "<div id='"+cIdPanel+"_content' style='clear:both;padding:5px;'>"+cContent+"<p style='clear:both;margin:0px;height:1px;'></p></div>";
      C += "</div>";
      C += "<div id='"+cIdPanel+"HR' style='float:left;background-image:url("+cTemplate+"mr.png);width:"+aW[2]+"px;"+cHR+"'></div>";
      
      C += "<div style='float:left;background-image:url("+cTemplate+"bl.png);width:"+aW[0]+"px;height:"+aW[3]+"px;clear:both;'></div>";
      C += "<div style='float:left;background-image:url("+cTemplate+"bm.png);width:"+(w-aW[0]-aW[2])+"px;height:"+aW[3]+"px;'></div>";
      C += "<div style='float:left;background-image:url("+cTemplate+"br.png);width:"+aW[2]+"px;height:"+aW[3]+"px;'></div>";
      
      if (nModal!=1) {
        var bw = $(cGlobalBody).width();
        var bh = $(cGlobalBody).height();
        var bw = $(document).width();
        var bh = $(document).height();
        
        // Coloca uma barreira para impossibiltar o acesso aos items que ficarão em segundo plano, criando um efeito de janela modal
        $(cGlobalBody).append("<div id='"+cIdPanel+"_back' style='position: absolute; z-index:"+(nZOrder-1)+"; left:"+0+"px; top:"+0+"px; width:"+bw+"px; height:"+bh+"px;background-image:url(/img/blackshadow.png);'></div>");
      }
        
      // Adiciona a janela à estrutura da página
      $(cGlobalBody).append("<div id='"+cIdPanel+"' style='position: absolute; z-index:"+nZOrder+"; left:"+x+"px; top:"+y+"px; width:"+w+"px; height:"+h+"px;'>"+C+"</div>");
      
      // Torna a janela arrastável
      $('#'+cIdPanel).draggable({handle:('#'+cIdPanel+'Title')});
      
      // Não foi indicada a altura da janela. Redimensionar os elementos à esquerda e direita
      if (h==0) {
        var nHUtil = $('#'+cIdPanel+"Util").height()+2;
        $('#'+cIdPanel+"HL").height(nHUtil);
        $('#'+cIdPanel+"HR").height(nHUtil);
        $('#'+cIdPanel+"Util").height(nHUtil);
        /*
        C = "HU="+$('#'+cIdPanel+"Util").height()+"\n";
        C += "HR="+$('#'+cIdPanel+"HR").height()+"\n";
        C += "HL="+$('#'+cIdPanel+"HL").height()+"\n";
        C += "OHU="+$('#'+cIdPanel+"Util").outerHeight()+"\n";
        C += "OHR="+$('#'+cIdPanel+"HR").outerHeight()+"\n";
        C += "OHL="+$('#'+cIdPanel+"HL").outerHeight()+"\n";        
        alert(C);
        */
      }

    }

    function jsCreateWindow(cIdPanel, cTemplate, aW, cCaption, x, y, w, h, nZOrder, cContent, nModal) {
      if ($("#"+cIdPanel).length>0) {
        $('#'+cIdPanel).remove();
        if ($('#'+cIdPanel+'_back').length>0)  $('#'+cIdPanel+'_back').remove();
      }

      var cHTML = "";
      cHTML += "<div style='display:block;float:left;background-image:url("+cTemplate+"tl.png);width:"+aW[0]+"px;height:"+aW[1]+"px;'></div>";
      cHTML += "<div style='float:left;background-image:url("+cTemplate+"tm.png);width:"+(w-aW[0]-aW[2])+"px;height:"+aW[1]+"px;'></div>";
      cHTML += "<div style='display:block;float:left;background-image:url("+cTemplate+"tr.png);width:"+aW[2]+"px;height:"+aW[1]+"px;'></div>";
      
      cHTML += "<div style='float:left;background-image:url("+cTemplate+"ml.png);width:"+aW[0]+"px;height:"+(h-aW[1]-aW[3])+"px;clear:both;'></div>";
      cHTML += "<div id='"+cIdPanel+"Util' style='float:left;background-image:url("+cTemplate+"mm.png);width:"+(w-aW[0]-aW[2])+"px;height:"+(h-aW[1]-aW[3])+"px;'>";
      cHTML += "<div style='width:"+(w-aW[0]-aW[2]-2)+"px; height:"+(aW[5])+"px;cursor:move;' class='cWinCaption'>";
      cHTML += "<div id='"+cIdPanel+"Title' style='float:left;width:"+(w-aW[0]-aW[2]-4-aW[4])+"px; height:"+(aW[5])+"px;cursor:move;'>"+cCaption+"</div>";
      var cAux = 'jsRemoveWindow("'+cIdPanel+'")';
      cHTML += "<div style='float:left;width:"+(aW[4])+"px;height:"+(aW[5])+"px;background-image:url("+cTemplate+"close.png);cursor:pointer;' onclick='"+cAux+"');'></div>";
      cHTML += "</div>";
      cHTML += "<div id='"+cIdPanel+"_content' style='clear:both;'>"+cContent+"</div>";
      cHTML += "</div>";
      cHTML += "<div style='float:left;background-image:url("+cTemplate+"mr.png);width:"+aW[2]+"px;height:"+(h-aW[1]-aW[3])+"px;'></div>";      
      cHTML += "<div style='float:left;background-image:url("+cTemplate+"bl.png);width:"+aW[0]+"px;height:"+aW[3]+"px;clear:both;'></div>";
      cHTML += "<div style='float:left;background-image:url("+cTemplate+"bm.png);width:"+(w-aW[0]-aW[2])+"px;height:"+aW[3]+"px;'></div>";
      cHTML += "<div style='float:left;background-image:url("+cTemplate+"br.png);width:"+aW[2]+"px;height:"+aW[3]+"px;'></div>";
      
      if (nModal!=1) {
        var bw = $(cGlobalBody).width();
        var bh = $(cGlobalBody).height();
        
        // Coloca uma barreira para impossibiltar o acesso aos items que ficarão em segundo plano, criando um efeito de janela modal
        $(cGlobalBody).append("<div id='"+cIdPanel+"_back' style='position: absolute; z-index:"+(nZOrder-1)+"; left:"+0+"px; top:"+0+"px; width:"+bw+"px; height:"+bh+"px;background-image:url(/img/blackshadow.png);'></div>");
      }
        
      // Adiciona a janela à estrutura da página
      $(cGlobalBody).append("<div id='"+cIdPanel+"' style='position: absolute; z-index:"+nZOrder+"; left:"+x+"px; top:"+y+"px; width:"+w+"px; height:"+h+"px;'>"+cHTML+"</div>");
      
      // Torna a janela arrastável
      $('#'+cIdPanel).draggable({handle:('#'+cIdPanel+'Title')});

    }    
    
    function jsRemoveWindow(cIdPanel) {
      $('#'+cIdPanel).remove();
      if ($('#'+cIdPanel+'_back').length>0)  $('#'+cIdPanel+'_back').remove();
    }
    
    
function jsFormKeyDown(e,cNext,cSubmitFunc,cWindow) {
  var nAction = 0;
  if (window.event) { // IE
    if (e.keyCode==13) nAction = 13;
    if (e.keyCode==27) nAction = 27;
  }
  else if(e.which) {// Netscape/Firefox/Opera
    if (e.which==13) nAction = 13;
    if (e.which==27) nAction = 27;
  }
  if (nAction==13) {
    if (cNext=="") {
      eval(cSubmitFunc);
    }
    else {
      $("#"+cNext).focus();
    }
  }
  else if (nAction==27) {
    jsRemoveWindow(cWindow);
  }
}
   
$(document).ready(function() {
  if (typeof jsGlobalAlertDlg != 'function') {
    jsGlobalLoadScript(cGlobalFUVURL+"js/fuvdialogs.js", function() {});
  }  
});

}
/*
     FILE ARCHIVED ON 00:29:01 Jul 02, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:50:56 Jun 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 141.919
  exclusion.robots: 0.19
  exclusion.robots.policy: 0.174
  RedisCDXSource: 7.504
  esindex: 0.012
  LoadShardBlock: 117.841 (3)
  PetaboxLoader3.datanode: 115.838 (4)
  CDXLines.iter: 13.487 (3)
  load_resource: 1448.248
  PetaboxLoader3.resolve: 1422.712
*/