function iniciar(){
   var  start = Number(document.getElementById("numero1").value);
	while (start == 1){
		window.location.href = "index.html"
		start++

	} 
}

function controle(){
   var zezo = window.event.keyCode;
   if(zezo==97){
        window.location.href = "adição.html";
    }
    if(zezo==115){
        window.location.href = "subtração.html";
    }
    if(zezo==109){
        window.location.href = "multi.html";
    }
    if(zezo==100){
        window.location.href = "divisão.html";
    }
    if(zezo==101){
       window.location.href = "elevar.html";
    }
     
}      	
  






function ola(){
	numero = []
    numero[0] = Number(document.getElementById("numero1").value);
    numero[1] = Number(document.getElementById("numero2").value);
    
	
	var total = numero[0] + numero[1];

	document.getElementById("resposta").innerText = `A soma dos valores é igual a ${total}` ;
}

function ola2(){
    numero = [[],[]];
	var i; 
    for(i = 0; i<2 ;i ++)

    if(i == 0){
    numero[i][0] = Number(document.getElementById("numero1").value);
    }else{
    numero[i][0] = Number(document.getElementById("numero2").value);    
    }
    
    var total = numero[0][0] - numero[1][0];
	
	document.getElementById("resposta").innerText = `A subtração de ${numero[0][0]} menos ${numero[1][0]} é igual a ${total}` ;



}




function ola3(){
	var x; 
    var y;
    var total;

	x = Number(document.getElementById("numero1").value);
    y = Number(document.getElementById("numero2").value);
	
	total = x * y;

	document.getElementById("resposta").innerText = `A multiplicação de ${x} por ${y} é igual a ${total}` ;
}

function ola4(){
	var x; 
    var y;
    var total;

	x = Number(document.getElementById("numero1").value);
    y = Number(document.getElementById("numero2").value);
	
	total = x / y;

	document.getElementById("resposta").innerText = `A divisão de ${x} por ${y} é igual a ${total}` ;
}

function ola5(){
 var x;
 var i;
 var total;


x = Number(document.getElementById("numero1").value);
y = Number(document.getElementById("numero2").value);

total = Math.pow(x, y);

document.getElementById("resposta").innerText = `O valor de ${x}  elevado por ${y} é igual a ${total}` ;

}
	




function ola3(){
	var x; 
    var y;
    var total;

	x = Number(document.getElementById("numero1").value);
    y = Number(document.getElementById("numero2").value);
	
	total = x * y;

	document.getElementById("resposta").innerText = `A multiplicação de ${x} e ${y} é igual a ${total}` ;
}

function alerta_tecla_pressionada(){
    var tecla_pressionada = window.event.keyCode;
    document.getElementById("resposta").innerText = ` é igual a ${tecla_pressionada}` ; 
    }
    





    
    




