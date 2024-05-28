function validarNumeroPositivo(){
   
    var numero = document.getElementById("numero").value;

    if (numero > 0){
        alert ("positivo");
    }
    if (numero < 0){
        alert ("negativo");

    } else{
        alert("zero");
    }

}