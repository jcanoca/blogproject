function movr(k) {
 if (document.images) 
  eval('document.img'+k+'.src=img'+k+'_on.src');
}

function mout(k) {
 if (document.images) 
  eval('document.img'+k+'.src=img'+k+'_off.src');
}

function handleOver() {
 if (document.images) 
  document.imgName.src=img_on.src;
}

function handleOut() {
 if (document.images) 
  document.imgName.src=img_off.src;
}

function detectBrowser() {
    var ie = document.all != undefined;
    var opera = window.opera != undefined;
    if (opera) return "opera";
    if (ie) return "ie";
    if ((window)&&(window.netscape)&&(window.netscape.security)) { return "firefox"; }
    return "ie"; 
  }
          
function cargaLegSesion(idLegislatura){
	if (document.getElementById("formLegislaturas") != null) { document.forms.formLegislaturas.idLegislatura.value = idLegislatura; }
}

function iSubmitEnterForm(oEvento, nombreForm, pathCgi){
                    
     var iAscii; 
     if (oEvento.keyCode) iAscii = oEvento.keyCode; 
     else if (oEvento.which) iAscii = oEvento.which; 
     else return false; 
     if (iAscii == 13){                            
            FormarCadenaCgi( nombreForm, pathCgi );            
            document.getElementById( nombreForm ).submit();
     }
} 

function iSubmitEnterForm(oEvento, nombreForm, pathCgi, arrayListaValores){
                    
    var iAscii; 
    if (oEvento.keyCode) iAscii = oEvento.keyCode; 
    else if (oEvento.which) iAscii = oEvento.which; 
    else return false; 
	if (iAscii == 13){                            
    	FormarCadenaCgi( nombreForm, pathCgi, arrayListaValores );            
        document.getElementById( nombreForm ).submit();
     }
} 

function iSubmitEnter(oEvento, oFormulario){

    var iAscii; 
    if (oEvento.keyCode) iAscii = oEvento.keyCode; 
    else if (oEvento.which) iAscii = oEvento.which; 
    else return false; 
	if (iAscii == 13) oFormulario.submit(); 
	return true; 
} 

function visualizarCGIpopUp(url){
 	window.opener.abrir_popUp(url);
}

function newXMLHttpRequest() {

    var xmlreq = false;
    if (window.XMLHttpRequest) {
		// Create XMLHttpRequest object in non-Microsoft browsers
        xmlreq = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		// Create XMLHttpRequest via MS ActiveX
        try {
    	    // Try to create XMLHttpRequest in later versions
	        // of Internet Explorer
			xmlreq = new ActiveXObject("Msxml2.XMLHTTP");
    	} catch (e1) {
	      	// Failed to create required ActiveXObject
          	try {
				// Try version supported by older versions
            	// of Internet Explorer
				xmlreq = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e2) {
				// Unable to create an XMLHttpRequest with ActiveX
            }
         }
    }
	return xmlreq;
}

function replaceAll(OldString,FindString,ReplaceString) {
       var SearchIndex = 0;
       var NewString = ""; 
       while (OldString.indexOf(FindString,SearchIndex) != -1) {
    		NewString += OldString.substring(SearchIndex,OldString.indexOf(FindString,SearchIndex));
	       	NewString += ReplaceString;
       		SearchIndex = (OldString.indexOf(FindString,SearchIndex) + FindString.length); 
       }
       NewString += OldString.substring(SearchIndex,OldString.length);
       return NewString;
}

function cambiarClase( inicio, fin, inicioNombreCapa, capaModificar, nombreClase ){

    for( i = inicio; i < fin; i++ ){
    
        var nombreCapa = inicioNombreCapa + i;
        var capaActual = document.getElementById( nombreCapa );
        var modificar = document.getElementById( capaModificar );
        if( capaActual != null && modificar != null ){
            if( capaActual == modificar ) modificar.className = nombreClase;
			else modificar.className = "";
        }
   }
}

function pintarAnterior(txtAnt){
    if(txtAnt.length > 0){
            txtAnt = txtAnt.substring(8, txtAnt.length - 16 );
            document.write("<a href='javascript:visualizarCGI(\""+ txtAnt + "\")'> << Anterior </a>");
    }
}

function pintarSiguiente(txtSig){
    if(txtSig.length > 0){
            txtSig = txtSig.substring(8, txtSig.length - 17 );            
            document.write("<a href=javascript:visualizarCGI('"+ txtSig + "')> Siguiente >> </a>");
    }
}


function modificarTitulo( capaSeccion, titulo ){        

    for( i = 0; i < 6; i++ ){
        if( document.getElementById( 'TITULO_SECCION' + i ) != null ){
            if( document.getElementById( 'TITULO_SECCION' + i ) == capaSeccion ){                   
                document.getElementById( 'TITULO_SECCION' + i ).style.display = 'block';
            } else {
                document.getElementById( 'TITULO_SECCION' + i ).style.display = 'none';
            }
        }
    }
}

function pintaCadena(nw, cadena){
	if( document.forms.formPopUp.abierto.value == "1") nw.document.write(cadena);
}

function ocultarCapas( anioInicial, anioFinal ){

    for( i= anioInicial; i <= anioFinal; i++ ){    
        for( j = 0; j <=11; j++ ){        
            idCapa = i + "capa" + j;
            capa = document.getElementById( idCapa );
            capa.style.display = 'none';        
        }    
    }
}

function ocultarCapa( nombre ){

    capa = document.getElementById( nombre );
    if( capa != null ){    
        capa.style.display = 'none';    
    }
}

function mostrarCapa( nombre, muestro ){
    if( document.getElementById( nombre ) != null  ){
        navegador = detectBrowser();
        if( navegador == "firefox" ){
                window.addEventListener( 'load', function(){if(muestro =="false"){document.forms.formLegislaturas.idLegislatura.disabled = true;}}, false );                
        } else {              
            if( document.readyState != 'complete' ){
                setTimeout( "mostrarCapa( '" + nombre + "' , '" + muestro + "' )", 100 );
            } else {
               if( ( muestro != null ) && ( muestro == "false" ) ){
                    if( document.forms.formLegislaturas != null ){                
                        document.forms.formLegislaturas.idLegislatura.disabled = true;
                    }
                    if( document.getElementById( "botonActualizar" ) != null ){
                        document.getElementById( "botonActualizar" ).style.display = "none";
                    }
                }
            }  
        }
    }
}

function mostrarCapaLegislatura( capa, totalLeg ){
    
    for( i = 0; i <= totalLeg; i++ ){        
        idCapaActual = "capa" + i;                
        capaActual = document.getElementById( idCapaActual );        
        // Comprobamos que la capa pasada como parametro sea igual a la actual
        // en ese caso la mostramos, si no, la ocultamos
        if( capaActual != null ){                    
            if( capa == idCapaActual ){                
                capaActual.style.display = 'block';
            } else {
                capaActual.style.display = 'none';
            }
        }            
    }            
}

function mostrarCapaSesiones( capa, anioInicial, anioFinal, anioDiarios ){        
    
    idCapaBuscada = anioDiarios + capa;
    capaBuscada = document.getElementById( idCapaBuscada );
    
    for( j = anioInicial; j <= anioFinal; j++ ){
    
        for( i = 0; i <= 11; i++ ){            
            
            idCapaActual = j + "capa" + i;      
            capaActual = document.getElementById( idCapaActual );
            // Comprobamos que la capa pasada como parametro sea igual a la actual
            // en ese caso la mostramos, si no, la ocultamos
            if( capaActual != null ){                    
                if( idCapaBuscada == idCapaActual ){                            
                    capaActual.style.display = 'block';
                } else {                    
                    capaActual.style.display = 'none';
                }
            }            
        }
    }
}


function lanzarCGIEscape(cgi, nombre){
    cgiNuevo = cgi.replace( "#nombre#", escape(nombre) );
    lanzarCGI( cgiNuevo );
}

function lanzarCGI(cgi) {    
    document.forms.lanzadorCGI.DIRECCION.value = cgi;
    document.forms.lanzadorCGI.submit();
}

function ResetFormBusqueda(nombreform){

var numeroelementos=0;
var oculto;
numeroelementos=+document.getElementById(nombreform).elements.length;

    for (i = 0; i < numeroelementos; i++) {
        if (document.getElementById(nombreform).elements[i].type == "text"){  
            document.getElementById(nombreform).elements[i].value="";
            
            
        }
        if (document.getElementById(nombreform).elements[i].type == "select-one"){
            document.getElementById(nombreform).elements[i].selectedIndex=0;
        }
        
        if (document.getElementById(nombreform).elements[i].type == "hidden"){
            oculto=document.getElementById(nombreform).elements[i].name;
            oculto=oculto.substring(0,1);
            
            if (oculto=="@"){
                
                document.getElementById(nombreform).elements[i].value="";
            }
        
        }
        
    }    
}

function mostrarFotografia( url, pathWeb, nombre, circunscipcion, grupo, sexo ) {

    if(document.layers) {
        
        document.divFoto.document.images["foto"].src = url;                
        
    } else {

        foto.src = url;                
    }
    
    cambiarNombre( nombre, circunscipcion, grupo );
    document.getElementById( "nombreDiputado" ).backgroundColor = "white";
}

function mostrarFotografiaHemiciclo( url, pathWeb, nombre, circunscipcion, grupo, sexo, extension ) {

    if(document.layers) {
        
        document.divFoto.document.images["foto"].src = url;                
        
    } else {
        document.images["foto"].src = url;
         
    }
    
    cambiarNombre( nombre, circunscipcion, grupo, extension);
    document.getElementById( "nombreDiputado" ).backgroundColor = "white";
}

function diputadoNo_disp( pathWeb ){
    var aux = new Image();
    aux.src = pathWeb + "/img/diputados/nodispo.gif";
    
    if(document.layers)
        document.images["foto"].src = aux.src;
    else
        foto.src = aux.src;
}

function fotoNoDisponible( pathWeb, cadena, cadena2 ) {

    var aux = new Image();
    aux.src = pathWeb + "/img/diputados/blanco.gif";
  if(document.layers){
        document.divFoto.document.images["foto"].src = aux.src;            
    } else {
        foto.src = aux.src;
    }
    cambiarNombre( cadena, cadena2, '','' );
}

function fotoNoDisponibleHemiciclo( pathWeb, cadena, cadena2 ) {

    var aux = new Image();
    aux.src = pathWeb + "/img/diputados/blanco.gif";
  if(document.layers){
        document.divFoto.document.images["foto"].src = aux.src;            
    } else {
        document.images["foto"].src = aux.src;
    }
    cambiarNombre( cadena, cadena2, '','' );
}
function fotoGrupoNoDisponible( pathWeb ) {

    var aux = new Image();
    aux.src = pathWeb + "/img/diputados/blanco.gif";
    if(document.layers){
        document.divFoto.document.images["foto"].src = aux.src;            
    } else {
        foto.src = aux.src;
    }    
}

function inicializarImagenes( url, cadena1, cadena2 ){

    if(document.layers) {
        document.divFoto.document.images["foto"].src = url;                
    } else {
        
       foto.src = url;
    }
    cambiarNombre( cadena1, cadena2, '','' );
}

function inicializarImagenesHemiciclo( url, cadena1, cadena2 ){

    if(document.layers) {
        document.divFoto.document.images["foto"].src = url;                
    } else {
          document.images["foto"].src = url;
    }
    cambiarNombre( cadena1, cadena2, '','' );
}

function ocultarMapa( cadena1 ){
	document.getElementById( "capaImagen" ).style.display = 'none';    
    cambiarNombre( cadena1, '', '','');

}

function cambiarNombre( nombre, circunscipcion, grupo, extension){
    
    var objeto = document.getElementById("nombreDiputado");             
    objeto.innerHTML = nombre;        
    objeto = document.getElementById("circunscripcionDiputado");             
    objeto.innerHTML = circunscipcion;
    objeto = document.getElementById("grupoDiputado");
    objeto.innerHTML = grupo;
    objeto = document.getElementById("extension");
    objeto.innerHTML = extension;
    return true; 

}

function enviarForm( formulario ){
    form = document.getElementById( formulario );
    if( validarFormulario( form ) )	form.submit();
}

function resetearForm( formulario ){
    document.getElementById( formulario ).reset();
}

function validarFecha(campo){

    if(campo.value =="") return true;
    var Fecha = new String(campo.value)   // Crea un string
    var Ano= new String(Fecha.substring(Fecha.lastIndexOf("/")+1,Fecha.length))
    var Mes= new String(Fecha.substring(Fecha.indexOf("/")+1,Fecha.lastIndexOf("/")))
    var Dia= new String(Fecha.substring(0,Fecha.indexOf("/")))
	if (isNaN(Ano) || Ano.length<4 || parseFloat(Ano)<1900) 	return false;
   	if (isNaN(Mes) || parseFloat(Mes)<1 || parseFloat(Mes)>12)	return false;
	if (isNaN(Dia) || parseInt(Dia, 10)<1 || parseInt(Dia, 10)>31)	return false;
	if (Mes==4 || Mes==6 || Mes==9 || Mes==11 || Mes==2) {
    	if (Mes==2 && Dia > 28 || Dia>30) {
        	return false;
		}
   	}
    return true;   
}

function validarHora( campo ){

    var er_fh = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24)\:([0-5]0|[0-5][1-9])$/
    if( campo.value == "" ) return true;
    if ( !(er_fh.test(campo.value )) ) return false;
    return true;
}

function validarFechaValor( valor ){ 
    
    if(valor.length == 2){
        valor = "01/01/19" + valor;
    }
    if(valor.length == 4){
        valor = "01/01/" + valor;
    }
    if ((valor.substr(2,1) == "/") && (valor.substr(5,1) == "/")){      
        for (i=0; i<10; i++){	
            if ( ( ( valor.substr(i,1)<"0" ) || ( valor.substr(i,1)>"9" ) ) && (i != 2) && (i != 5) ){
                return false;
            }  
        }

        a = valor.substr(6,4);
        m = valor.substr(3,2);
        d = valor.substr(0,2);
        
        if( (m < 1) || (m > 12) || (d < 1) || (d > 31)){
            return false;
        } else {
                // Año no bisiesto y es febrero y el día es mayor que 28
                if( (a%4 != 0) && (m == 2) && (d > 28) ){
                    return false; 
                } else {
                    if ( ( ( ( m == 4 ) || ( m == 6 ) || ( m == 9 ) || ( m==11 ) ) && ( d>30 ) ) || ( ( m==2 ) && ( d>29 ) ) ){
                        return false;
                    }
                }
        }
    } else {
        return false;
    }
    return true;
}

function validarFormulario( formulario ){

    if( ( formulario.fechaInicioDiputado.value != null ) && ( formulario.fechaInicioDiputado.value != '' ) ){                    
        if( ( !validarFecha( formulario.fechaInicioDiputado ) ) ){
            document.getElementById( "capaFechaDesde" ).style.display = 'block';
            return false;    
        }                    
    }
    if( ( formulario.fechaFinDiputado.value != null ) && ( formulario.fechaFinDiputado.value != '' ) ){
        if( ( !validarFecha( formulario.fechaFinDiputado ) ) ){
            document.getElementById( "capaFechaHasta" ).style.display = 'block';
            return false;    
        }
    }
    return true;
}

function validarFormularioHistorico( formulario ){
    
    if( ( formulario.fechaAltaDesde.value != null ) && ( formulario.fechaAltaDesde.value != '' ) ){                    
        if( ( !validarFecha( formulario.fechaAltaDesde ) ) ){
            document.getElementById( "capaFechaAltaDesde" ).style.display = 'block';
            return false;    
        }                    
    }
    if( ( formulario.fechaAltaHasta.value != null ) && ( formulario.fechaAltaHasta.value != '' ) ){
        if( ( !validarFecha( formulario.fechaAltaHasta ) ) ){
            document.getElementById( "capaFechaAltaHasta" ).style.display = 'block';
            return false;    
        }
    }
    if( ( formulario.fechaBajaDesde.value != null ) && ( formulario.fechaBajaDesde.value != '' ) ){                    
        if( ( !validarFecha( formulario.fechaBajaDesde ) ) ){
            document.getElementById( "capaFechaBajaDesde" ).style.display = 'block';
            return false;    
        }                    
    }
    if( ( formulario.fechaBajaHasta.value != null ) && ( formulario.fechaBajaHasta.value != '' ) ){
        if( ( !validarFecha( formulario.fechaAltaHasta ) ) ){
            document.getElementById( "capaFechaBajaHasta" ).style.display = 'block';
            return false;    
        }
    }
    return true;
}

function procesarHistoricoDiputados(formulario,iniciocgi){

    var dfecha=null;      
    var addia=document.getElementById('addia').value;
    var admes=document.getElementById('admes').value;
    var adano=document.getElementById('adano').value;
    var ahdia=document.getElementById('ahdia').value;
    var ahmes=document.getElementById('ahmes').value;
    var ahano=document.getElementById('ahano').value;
    
    if (addia!="" || admes!="" || adano!="" || ahdia!="" || ahmes!="" || ahano!="") {        
        if(addia!="" && admes!="" && adano!="" && ahdia!="" && ahmes!="" && ahano!=""){
        	if( addia.length == 1 ){
                addia = "0" + addia;
            }
            if( admes.length == 1 ){
                admes = "0" + admes;
            }
            if( ahdia.length == 1 ){
                ahdia = "0" + ahdia;
            }
            if( ahmes.length == 1 ){
                ahmes = "0" + ahmes;
            }
        	dfecha=adano+admes+addia;
            dfechaValidar = addia+"/"+admes+"/"+adano;
            document.getElementById('@FALT-GE').value=dfecha;
            
            if( !validarFechaValor( dfechaValidar ) ){
                document.getElementById( "capaFechaAltaDesde" ).style.display = 'none';                    
                return false;
            }
            
            dfecha=ahano+ahmes+ahdia;
            dfechaValidar = ahdia+"/"+ahmes+"/"+ahano;
            document.getElementById('@FALT-LE').value=dfecha;
            
            if( !validarFechaValor( dfechaValidar ) ){
                document.getElementById( "capaFechaAltaHasta" ).style.display = 'none';
                return false;
            }
            
        }else{            
            return false;
        }
    }
    
    var bddia=document.getElementById('bddia').value;
    var bdmes=document.getElementById('bdmes').value;
    var bdano=document.getElementById('bdano').value;    
    
    var bhdia=document.getElementById('bhdia').value;
    var bhmes=document.getElementById('bhmes').value;
    var bhano=document.getElementById('bhano').value;    

	if (bddia!="" || bdmes!="" || bdano!="" || bhdia!="" || bhmes!="" || bhano!="") {        
        if(bddia!="" && bdmes!="" && bdano!="" && bhdia!="" && bhmes!="" && bhano!=""){
        	if( bddia.length == 1 ){
                bddia = "0" + bddia;
            }
            if( bdmes.length == 1 ){
                bdmes = "0" + bdmes;
            }
            if( bhdia.length == 1 ){
                bhdia = "0" + bhdia;
            }
            if( bhmes.length == 1 ){
                bhmes = "0" + bhmes;
            }
        	dfecha=bdano+bdmes+bddia;
            dfechaValidar=bddia+"/"+bdmes+"/"+bdano;
            document.getElementById('@FBAJ-GE').value=dfecha;            
            
            if( !validarFechaValor( dfechaValidar ) ){                
                document.getElementById( "capaFechaBajaDesde" ).style.display = 'none';
                return false;
            }
            
            dfecha=bhano+bhmes+bhdia;
            dfechaValidar=bhdia+"/"+bhmes+"/"+bhano;
            document.getElementById('@FBAJ-LE').value=dfecha;            
                       
            if( !validarFechaValor( dfechaValidar ) ){                    
                document.getElementById( "capaFechaBajaHasta" ).style.display = 'none';
                return false;
            }
        }else{            
            return false;
        }
    }   
    
   return true;     
}
                
function FormarCadenaCgi(nombreform,iniciocgi){
               
    var cadenaCgi=iniciocgi;
    var origen=nombreform;
    var numeroelementos=0;
    var i =0;
    
    numeroelementos=document.getElementById(nombreform).elements.length;
    for (i = 0; i < numeroelementos; i++) {
        if (document.getElementById(nombreform).elements[i].type == "text" || document.getElementById(nombreform).elements[i].type == "hidden" || document.getElementById(nombreform).elements[i].type == "select-one"){  
            if (document.getElementById(nombreform).elements[i].name != "DIRECCION"  && document.getElementById(nombreform).elements[i].name != "ORIGEN"){   
                cadenaCgi=cadenaCgi+document.getElementById(nombreform).elements[i].name+"="+document.getElementById(nombreform).elements[i].value;
                if (i!=numeroelementos-1){
                    cadenaCgi=cadenaCgi+"&";
                }                
            }
        }
    }    
    document.getElementById(nombreform).DIRECCION.value=cadenaCgi;    
}
             
function FormarCadenaCgi(nombreform,iniciocgi, arrayListaValores){
               
    var cadenaCgi=iniciocgi;
    var origen=nombreform;
    var numeroelementos=0;
    var i =0;

    numeroelementos=(document.getElementById(nombreform)).elements.length;
    for (i = 0; i < numeroelementos; i++) {
        if (document.getElementById(nombreform).elements[i].type == "text" || document.getElementById(nombreform).elements[i].type == "hidden" || document.getElementById(nombreform).elements[i].type == "select-one"){  
            if (document.getElementById(nombreform).elements[i].name != "DIRECCION"  && document.getElementById(nombreform).elements[i].name != "ORIGEN"){   
                var entreComillas = false;
                for(j= 0; j < arrayListaValores.length; j++){
                    var valorAux = arrayListaValores[j];
                    if(valorAux == document.getElementById(nombreform).elements[i].name ){
                        entreComillas = true;
                    }
                }
                if(entreComillas && document.getElementById(nombreform).elements[i].value != "") {
                    cadenaCgi=cadenaCgi+document.getElementById(nombreform).elements[i].name + "=" + escape('"' + document.getElementById(nombreform).elements[i].value + '"') ;
                } else {
                    cadenaCgi=cadenaCgi+document.getElementById(nombreform).elements[i].name+"="+ escape(document.getElementById(nombreform).elements[i].value);
                }
                if (i != numeroelementos-1 ){
                    cadenaCgi=cadenaCgi+"&";
                }                
            }
        }
    }    
    document.getElementById(nombreform).DIRECCION.value=cadenaCgi;                 
}

function FormarCadenaCgiConExcluidos(nombreform,iniciocgi, arrayListaValores, arrayListaValoresExcluidos){
               
    var cadenaCgi=iniciocgi;
    var origen=nombreform;
    var numeroelementos=0;
    var numeroelementosExcluidos=0;
    var i =0;
   
   	numeroelementos=(document.getElementById(nombreform)).elements.length;
    numeroelementosExcluidos=arrayListaValoresExcluidos.length;

    for (i = 0; i < numeroelementos; i++) {
        if (document.getElementById(nombreform).elements[i].type == "text" || document.getElementById(nombreform).elements[i].type == "hidden" || document.getElementById(nombreform).elements[i].type == "select-one"){  
			 // comprobamos que no este en las lista de valores excluidos. En caso de que no este se añade a la cadena
            insertar = true;
            for( j = 0; j < numeroelementosExcluidos ; j++  ){
                if( document.getElementById(nombreform).elements[i].name == arrayListaValoresExcluidos[j] ){
                    insertar = false;
                    j = numeroelementosExcluidos;
                }
            }
            if( insertar ){
				if (document.getElementById(nombreform).elements[i].name != "DIRECCION"  && document.getElementById(nombreform).elements[i].name != "ORIGEN"){   
					var entreComillas = false;
					for(j= 0; j < arrayListaValores.length; j++){
						var valorAux = arrayListaValores[j];
						if(valorAux == document.getElementById(nombreform).elements[i].name ){
							entreComillas = true;
						}
					}
					if(entreComillas && document.getElementById(nombreform).elements[i].value != "") {
						cadenaCgi=cadenaCgi+document.getElementById(nombreform).elements[i].name + "=" + escape('"' + document.getElementById(nombreform).elements[i].value + '"') ;
					} else {
						cadenaCgi=cadenaCgi+document.getElementById(nombreform).elements[i].name+"="+ escape(document.getElementById(nombreform).elements[i].value);
					}
					if (i != numeroelementos-1 ){
						cadenaCgi=cadenaCgi+"&";
					}                
				}
			}
        }
    }    
    document.getElementById(nombreform).DIRECCION.value=cadenaCgi;                 
}

function FormarCadenaCgiPublicaciones(nombreform,iniciocgi, arrayListaValores, arrayListaValoresExcluidos){
               
    var cadenaCgi=iniciocgi;
    var origen=nombreform;
    var numeroelementos=0;
    var numeroelementosExcluidos=0;
    var i =0;   

    numeroelementos=(document.getElementById(nombreform)).elements.length;
    numeroelementosExcluidos=arrayListaValoresExcluidos.length;
    
    for (i = 0; i < numeroelementos; i++) {
    
        if (document.getElementById(nombreform).elements[i].type == "text" || document.getElementById(nombreform).elements[i].type == "hidden" || document.getElementById(nombreform).elements[i].type == "select-one"){  
          // comprobamos que no este en las lista de valores excluidos. En caso de que no este se añade a la cadena
            insertar = true;
            for( j = 0; j < numeroelementosExcluidos ; j++  ){
                if( document.getElementById(nombreform).elements[i].name == arrayListaValoresExcluidos[j] ){
                    insertar = false;
                    j = numeroelementosExcluidos;
                }
            }
            if( insertar ){
                if (document.getElementById(nombreform).elements[i].name != "DIRECCION"  && document.getElementById(nombreform).elements[i].name != "ORIGEN"){   
                    var entreComillas = false;
                    for(j= 0; j < arrayListaValores.length; j++){
                        var valorAux = arrayListaValores[j];
                        if(valorAux == document.getElementById(nombreform).elements[i].name ){
                            entreComillas = true;
                        }
                    }
                    if(entreComillas && document.getElementById(nombreform).elements[i].value != "") {
                        cadenaCgi=cadenaCgi+document.getElementById(nombreform).elements[i].name + "=" + escape('"' + document.getElementById(nombreform).elements[i].value + '"') ;
                    } else {
                        cadenaCgi=cadenaCgi+document.getElementById(nombreform).elements[i].name+"="+ escape(document.getElementById(nombreform).elements[i].value);
                    }
                    
                    if (i != numeroelementos-1 ){
                        cadenaCgi=cadenaCgi+"&";
                    }
                    
                }
            }
        }
        
    }     
    if( cadenaCgi.lastIndexOf( "&" ) == cadenaCgi.length-1 ){
        cadenaCgi = cadenaCgi.substring( 0,cadenaCgi.length-1 ); 
    }    
    document.getElementById(nombreform).DIRECCION.value=cadenaCgi;                 
}
  
function validarFormularioHistorico( formulario ){

    if( ( formulario.fechaAltaDesde.value != null ) && ( formulario.fechaAltaDesde.value != '' ) ){                    
        if( ( !validarFecha( formulario.fechaAltaDesde ) ) ){
            alert( 'La fecha de alta inicial no es una fecha válida o no tiene el formato dd/mm/aaaa' );
            return false;    
        }                    
    }
    if( ( formulario.fechaAltaHasta.value != null ) && ( formulario.fechaAltaHasta.value != '' ) ){
        
        if( ( !validarFecha( formulario.fechaAltaHasta ) ) ){
            alert( 'La fecha de alta final no es una fecha válida o no tiene el formato dd/mm/aaaa' );
            return false;    
        }
    }
    if( ( formulario.fechaBajaDesde.value != null ) && ( formulario.fechaBajaDesde.value != '' ) ){                    
        if( ( !validarFecha( formulario.fechaBajaDesde ) ) ){
            alert( 'La fecha de baja inicial no es una fecha válida o no tiene el formato dd/mm/aaaa' );
            return false;    
        }                    
    }
    if( ( formulario.fechaAltaHasta.value != null ) && ( formulario.fechaBajaHasta.value != '' ) ){
        if( ( !validarFecha( formulario.fechaAltaHasta ) ) ){
            alert( 'La fecha de baja final no es una fecha válida o no tiene el formato dd/mm/aaaa' );
            return false;    
        }
    }
    return true;
}

function FormarFechasIniAv(formulario,pathcgi){

    var dfecha=null;
    var valorcombo=document.getElementById('tipoFecha').value;
    var ddia=document.getElementById('ddia').value;
    var dmes=document.getElementById('dmes').value;
    var dano=document.getElementById('dano').value;
    var sacomensaje=0;
    
    document.getElementById('PCLA').value = document.getElementById('MATERIAS').value;
    
      if(ddia!="" && dmes!="" && dano!=""&& hdia!="" && hmes!="" && hano!=""){

		arrayListaValores = new Array("SINI","TPTR","CIER","SAUT","COMI", "SATI", "PCLA");
              	arrayListaValoresExcluidos = new Array("FASEAUX","ddia","dmes","dano", "hdia", "hmes", "hano", "COMIAUX", "MATERIAS", "tipofecha");

              arrayListaValores = new Array("SINI","TPTR","CIER","SAUT","COMI", "SATI", "PCLA" );
              arrayListaValoresExcluidos = new Array("FASEAUX","ddia","dmes","dano", "hdia", "hmes", "hano", "COMIAUX", "MATERIAS", "tipofecha");

      } else {
            arrayListaValores = new Array("SINI","FASEAUX","TPTR","CIER","SAUT","COMIAUX","COMI", "PCLA");
            arrayListaValoresExcluidos = new Array("ddia","dmes","dano", "hdia", "hmes", "hano", "MATERIAS", "tipofecha");
      }

    if (ddia!="") {
		if( ddia.length == 1 ){
			ddia = "0" + ddia;
		}
		if (dmes!="" && dano!="") {
			if( dmes.length == 1 ){
				dmes = "0" + dmes;
			}
			dfecha=dano+dmes+ddia;
                        
			switch(valorcombo) {
				case "registro":
					document.getElementById('@FECH-GE').value=dfecha;
					break;
				case "calificacion":
					document.getElementById('@FCAL-GE').value=dfecha;
					break;
				case "cierre":
					document.getElementById('@FCIE-GE').value=dfecha;
					break;
			}
		} else {
			document.getElementById( "capaFechaDesde" ).style.display = 'block';
			sacomensaje++; 
		}
	} else {
		if (dmes!="" || dano!="") {
			document.getElementById( "capaFechaDesde" ).style.display = 'block';
			sacomensaje++;
		}
	}    	   

    var hdia=document.getElementById('hdia').value;
    var hmes=document.getElementById('hmes').value;
    var hano=document.getElementById('hano').value;

    if(ddia!="" && dmes!="" && dano!=""&& hdia=="" && hmes=="" && hano==""){
     
        var mydate=new Date();
        var year=mydate.getYear();
        var month=mydate.getMonth()+1;
        var daym=mydate.getDate();
        
        if (year < 1000) year+=1900;
        if (month<10) month="0"+month;
        if (daym<10) daym="0"+daym;

        document.getElementById('hdia').value = daym;
        document.getElementById('hmes').value = month;
        document.getElementById('hano').value = year
        
        hdia=document.getElementById('hdia').value;
        hmes=document.getElementById('hmes').value;
        hano=document.getElementById('hano').value;

    }

    
    if (hdia!="") {
        if( hdia.length == 1 ){
                hdia = "0" + hdia;
        }
        if (hmes!="" && hano!="") {
                if( hmes.length == 1 ){
                        hmes = "0" + hmes;
                }
                dfecha=hano+hmes+hdia;
                switch(valorcombo) {
                        case "registro":
                                document.getElementById('@FECH-LE').value=dfecha;
                                break;
                        case "calificacion":
                                document.getElementById('@FCAL-LE').value=dfecha;
                                break;
                        case "cierre":
                                document.getElementById('@FCIE-LE').value=dfecha;
                                break;
                }
        } else {
                document.getElementById( "capaFechaHasta" ).style.display = 'block';
                sacomensaje++;
        }
    } else {
            if (hmes!="" || hano!="") {
                    document.getElementById( "capaFechaHasta" ).style.display = 'block';
        sacomensaje++;
            }
    } 
    
    if(ddia!="" && dmes!="" && dano!=""&& hdia!="" && hmes!="" && hano!="" && sacomensaje == 0){
            if( comprobarNumeros( document.getElementById('ddia').value ) && comprobarNumeros( document.getElementById('dmes').value ) && comprobarNumeros( document.getElementById('dano').value ) &&            
                comprobarNumeros( document.getElementById('hdia').value ) && comprobarNumeros( document.getElementById('hmes').value ) && comprobarNumeros( document.getElementById('hano').value ) ){
        
                    if (valorcombo!=""){
                        FormarCadenaCgiConExcluidos(formulario, pathcgi, arrayListaValores, arrayListaValoresExcluidos);
			document.forms.formBuscarIniciativasAv.submit();
			
                    }else{
                        document.getElementById( "capaTipoFecha" ).style.display = 'block';
                    }
                    
            } else {
                    document.getElementById( "capaNumeros" ).style.display = "block";
            }
                    
        } else {
            if (ddia=="" && dmes=="" && dano==""&& hdia=="" && hmes=="" && hano=="" && sacomensaje == 0){
                    
                FormarCadenaCgiConExcluidos(formulario, pathcgi, arrayListaValores, arrayListaValoresExcluidos);
		document.forms.formBuscarIniciativasAv.submit();
                
            }else{
                if(sacomensaje==0){
                    document.getElementById( "capaPeriodo" ).style.display = 'block';                    
                }
            }
        }
        
}

function FormarFechasInterAv(formulario,pathcgi){

    arrayListaValores = new Array("AUTO","CALI","FASE","ORAD","SINI","SDIA");
    arrayListaValoresExcluidos = new Array("ddia","dmes","dano", "hdia", "hmes", "hano");
    
    var dfecha=null;
    
    var ddia=document.getElementById('ddia').value;
    var dmes=document.getElementById('dmes').value;
    var dano=document.getElementById('dano').value;  
    var fechaDesde = "";
    var sacomensaje=0;
    
    
    if (ddia!="") {
		if( ddia.length == 1 ){
			ddia = "0" + ddia;
		}       
		if (dmes!="" && dano!="") {
			if( dmes.length == 1 ){
				dmes = "0" + dmes;
			} 
			fechaDesde=ddia + "/"+ dmes + "/"+ dano;
			dfecha=dano+dmes+ddia;
			document.getElementById('@FDIA-GE').value=dfecha;
		} else {
			document.getElementById( "capaFechaDesde" ).style.display = 'block';
			sacomensaje++;
		}
	} else {
		if (dmes!="" || dano!="") {
			document.getElementById( "capaFechaDesde" ).style.display = 'block';
			sacomensaje++;
		}
	}    	   

    var hdia=document.getElementById('hdia').value;
    var hmes=document.getElementById('hmes').value;
    var hano=document.getElementById('hano').value;    
    var fechaHasta = "";
    
    
    if(ddia!="" && dmes!="" && dano!=""&& hdia=="" && hmes=="" && hano==""){
     
        var mydate=new Date();
        var year=mydate.getYear();
        var month=mydate.getMonth()+1;
        var daym=mydate.getDate();
        
        if (year < 1000) year+=1900;
        if (month<10) month="0"+month;
        if (daym<10) daym="0"+daym;

        document.getElementById('hdia').value = daym;
        document.getElementById('hmes').value = month;
        document.getElementById('hano').value = year
        
        hdia=document.getElementById('hdia').value;
        hmes=document.getElementById('hmes').value;
        hano=document.getElementById('hano').value;

    }
    
     if (hdia!="") {                
		if( hdia.length == 1 ){
			hdia = "0" + hdia;
		} 
		if (hmes!="" && hano!="") {
			if( hmes.length == 1 ){
				hmes = "0" + hmes;
			}
	
			var fechaHasta=hdia + "/"+ hmes + "/"+ hano;
			dfecha=hano+hmes+hdia;                
            document.getElementById('@FDIA-LE').value=dfecha;
		} else {
			document.getElementById( "capaFechaHasta" ).style.display = 'block';
			sacomensaje++;
		}
	} else {
		if (hmes!="" || hano!="") {
			document.getElementById( "capaFechaHasta" ).style.display = 'block';
			sacomensaje++;
		}
	}                
        
	if(ddia!="" && dmes!="" && dano!=""&& hdia!="" && hmes!="" && hano!=""){
		
		if( comprobarNumeros( document.getElementById('ddia').value ) && comprobarNumeros( document.getElementById('dmes').value ) && comprobarNumeros( document.getElementById('dano').value ) &&            
			comprobarNumeros( document.getElementById('hdia').value ) && comprobarNumeros( document.getElementById('hmes').value ) && comprobarNumeros( document.getElementById('hano').value ) ){
		
				FormarCadenaCgiConExcluidos(formulario, pathcgi, arrayListaValores, arrayListaValoresExcluidos);
				document.forms.formBuscarIntervAv.submit();
				
		} else {
				document.getElementById( "capaNumeros" ).style.display = "block";
		}
	} else {
		if (ddia=="" && dmes=="" && dano==""&& hdia=="" && hmes=="" && hano==""){
			FormarCadenaCgiConExcluidos(formulario, pathcgi, arrayListaValores, arrayListaValoresExcluidos);
			document.forms.formBuscarIntervAv.submit();
		} else {
			if(sacomensaje==0){
				document.getElementById( "capaPeriodo" ).style.display = 'block';
			}
		}
	}
}

function FormarFechasPubli(formulario,pathcgi, idLegislatura){
    
    arrayListaValores = new Array("SUDE");
    arrayExcluidos    = new Array( "ddia", "dmes", "dano", "hdia", "hmes", "hano" );
    
    var dfecha=null;
    
    var ddia=document.getElementById('ddia').value;
    var dmes=document.getElementById('dmes').value;
    var dano=document.getElementById('dano').value;
    var sacomensaje=0;
    
    
    if (ddia!="") {
		if( ddia.length == 1 ){
        	ddia = "0" + ddia;
		}
        if (dmes!="" && dano!="") {
			if( dmes.length == 1 ){
				dmes = "0" + dmes;
			}
            dfecha=dano+dmes+ddia;
			document.getElementById('@FECH-GE').value=dfecha;
		} else {
			document.getElementById( "capaFechaDesde" ).style.display = 'block';
			sacomensaje++;
		}
	} else {
		if (dmes!="" || dano!="") {
			document.getElementById( "capaFechaDesde" ).style.display = 'block';
			sacomensaje++;
		}
	}    	   
    
    var hdia=document.getElementById('hdia').value;
    var hmes=document.getElementById('hmes').value;
    var hano=document.getElementById('hano').value;

     if (hdia!="") {
		if( hdia.length == 1 ){
			hdia = "0" + hdia;
		}
		if (hmes!="" && hano!="") {
			if( hmes.length == 1 ){
				hmes = "0" + hmes;
			}
            dfecha=hano+hmes+hdia;
            document.getElementById('@FECH-LE').value=dfecha;
		} else {
			document.getElementById( "capaFechaHasta" ).style.display = 'block';
            sacomensaje++;
		}
	} else {
		if (hmes!="" || hano!="") {
			document.getElementById( "capaFechaHasta" ).style.display = 'block';
            sacomensaje++;
		}
	}                
        
	if(ddia!="" && dmes!="" && dano!=""&& hdia!="" && hmes!="" && hano!=""){        
		if( comprobarNumeros( document.getElementById('ddia').value ) && comprobarNumeros( document.getElementById('dmes').value ) && comprobarNumeros( document.getElementById('dano').value ) &&            
			comprobarNumeros( document.getElementById('hdia').value ) && comprobarNumeros( document.getElementById('hmes').value ) && comprobarNumeros( document.getElementById('hano').value ) ){
				FormarCadenaCgiPublicaciones(formulario, pathcgi, arrayListaValores, arrayExcluidos);
				if( document.forms.formBuscarPublicaciones.TIPOB != null && (document.forms.formBuscarPublicaciones.TIPOB.selectedIndex == "0" || document.forms.formBuscarPublicaciones.TIPOB.selectedIndex == "1")){
						if( idLegislatura == "6" || idLegislatura == "7" || idLegislatura == "8") {
									document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "BASE=", "BASE=PUW");
							} else {
									document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "BASE=", "BASE=PUF");
									document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "PUWTXLTS.fmt", "PUFTXLTS.fmt");
									document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "PUBTXLTS.fmt", "PUFTXLTS.fmt");
							}
				} else {
							if( idLegislatura == "6" || idLegislatura == "7" || idLegislatura == "8") {
									document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "BASE=", "BASE=pub");
							} else {
									document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "BASE=", "BASE=PUF");
									document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "PUWTXLTS.fmt", "PUFTXLTS.fmt");
									document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "PUBTXLTS.fmt", "PUFTXLTS.fmt");
							}
				}
				document.forms.formBuscarPublicaciones.submit();
		} else {
				document.getElementById( "capaNumeros" ).style.display = "block";
		}
	}else{
		if (ddia=="" && dmes=="" && dano==""&& hdia=="" && hmes=="" && hano==""){
			FormarCadenaCgiPublicaciones(formulario, pathcgi, arrayListaValores, arrayExcluidos);
			if( document.forms.formBuscarPublicaciones.TIPOB != null && (document.forms.formBuscarPublicaciones.TIPOB.selectedIndex == "0" || document.forms.formBuscarPublicaciones.TIPOB.selectedIndex == "1")){
				if( idLegislatura == "6" || idLegislatura == "7" || idLegislatura == "8") {
					document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "BASE=", "BASE=PUW");
				} else {
					document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "BASE=", "BASE=PUF");
					document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "PUWTXLTS.fmt", "PUFTXLTS.fmt");
					document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "PUBTXLTS.fmt", "PUFTXLTS.fmt");
				}
			} else {
				if( idLegislatura == "6" || idLegislatura == "7" || idLegislatura == "8") {
					document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "BASE=", "BASE=pub");
				} else {
					document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "BASE=", "BASE=PUF");
					document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "PUWTXLTS.fmt", "PUFTXLTS.fmt");
					document.forms.formBuscarPublicaciones.DIRECCION.value  = replaceAll(document.forms.formBuscarPublicaciones.DIRECCION.value, "PUBTXLTS.fmt", "PUFTXLTS.fmt");
				}
			}
			document.forms.formBuscarPublicaciones.submit();
	
		} else {
			if(sacomensaje==0){
				document.getElementById( "capaPeriodo" ).style.display = 'block';
			}
		}
	}
}

function comprobarNumeros( value ) {    
    
    valido = true;
    for( i = 0; i < value.length; i++ ){
        
        if( !( value.charAt(i) == "0" || value.charAt(i) == "1" || value.charAt(i) == "2" || value.charAt(i) == "3" || value.charAt(i) == "4" || 
               value.charAt(i) == "5" || value.charAt(i) == "6" || value.charAt(i) == "7" || value.charAt(i) == "8" ||  value.charAt(i) == "9" ) ){
                valido = false;
                break;
        }
    }
    return valido;
}

function soloNumeros(e, object) {
	var correctos = new Array("1","2","3","4","5","6","7","8","9","0")
	var estado = false;
	var codigoTecla, cadenaTecla;

	if (document.all) {
		codigoTecla = event.keyCode
		cadenaTecla = (String.fromCharCode(event.keyCode));			  
	} else if (document.layers) {
		codigoTecla = e.which
		cadenaTecla = String.fromCharCode(e.which);
	} else if (document.getElementById)	{
		codigoTecla = (window.Event) ? e.which : e.keyCode;
		cadenaTecla=(String.fromCharCode(codigoTecla));                
	}        

	if (codigoTecla == 13 || codigoTecla == 8  ){ // codigoTecla== 8 es el caracter de la tecla borrar
		estado=true; 
	}else{
		for (i=0;i<correctos.length;i++) {
			if(cadenaTecla==correctos[i]) {
				estado=true; 
			} 	
		}
	}
        
	if (estado==false) {
		if(document.all) event.returnValue = false;
        else return false;
	}

	if (cadenaTecla == 0 && object.value.length == 0) return false;
        
        return estado;
}

function mostrarHistory(){
    if( document.getElementById("enlaceHistory") != null ){
        document.getElementById("enlaceHistory").style.display ="block";
    }
}

function ocultarPath(){
    if (document.getElementById("inicio") != null){
      document.getElementById("inicio").style.display="none";
    }
}

function paginaAnterior(pagina, paginaant,capa_paginacion){
 document.getElementById(pagina).style.display="none";
 document.getElementById(paginaant).style.display="block";
 document.getElementById(capa_paginacion).style.display="block";
}

function paginaSiguiente(pagina,paginasig,capa_paginacion){
 document.getElementById(pagina).style.display="none";
 document.getElementById(paginasig).style.display="block";
 document.getElementById(capa_paginacion).style.display="block";
}

function maskNumerico(evt){
   var charCode = (evt.which) ? evt.which : event.keyCode         
   if (charCode <= 13 || (charCode >= 48 && charCode <= 57))
        return true;
        return false;      
}