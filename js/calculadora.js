//tam = Tamanho do campo
//fld = input
//e = evento
function ConsisteNumerico(tam, fld, e) {
    var key = '';
    var i = 0;
    var len = 0;
    var strCheck = '0123456789:';
    var aux = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;
    if (whichCode == 13 || whichCode == 8 || whichCode == 0)
        return true;  // Enter
    key = String.fromCharCode(whichCode);  // Armazena em key o código da tecla
    if (strCheck.indexOf(key) == -1)
        return false; // Teste retorna false quando não encontra a tecla na lista
    len = tam -1;
    aux = '';
    for(; i < len; i++)
        if (strCheck.indexOf(fld.value.charAt(i))!=-1)
            aux += fld.value.charAt(i);
    aux += key;
    fld.value = '';
    fld.value += aux;
    return false;
}


function mascHora(campoHora){
	
   	var hora = campoHora.value;
   	if (hora.length == 2){
  		hora = hora + ':';
   		document.forms[0].hora.value = hora;
   		// return true;
	}

    var hor = hora.substring(2, 0);
	var min = hora.substring(5, 3);

	if (min>59) {
		location.reload();
		alert("Valor dos minutos incorretos!");
	} else {
		calcular(hor, hor, min, min);
	}

}

function calcular(hora1, hora2, minuto1, minuto2){

    var nada = " ";

	var decimal = minuto1/60;
    var decimal = decimal.toFixed(2);
	var decimal = decimal.substring(2, 4);
	var resultadoDecimal = hora1+","+decimal;

	var resultadoMinutos = (parseInt(hora2)*60) + parseInt(minuto2);

    if (isNaN(resultadoMinutos)==true) {
        document.getElementById("horaDecimal").innerHTML = nada;
        document.getElementById("horaMinuto").innerHTML = nada;
    } else {
	   document.getElementById("horaDecimal").innerHTML = resultadoDecimal;
	   document.getElementById("horaMinuto").innerHTML = resultadoMinutos;
    }
}