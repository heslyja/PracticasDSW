//Arreglo vacio
var diasSemana = [];
    //Se ejecuta 7 veces
    for(var i = 0; i < 7; i++) {
        var dia = prompt("Ingrese el día " + (i + 1) + " de la semana:");
        //Agregamos al arreglo con el .push()
        diasSemana.push(dia);
    }
    alert("Los días capturados son: " + diasSemana.join(', '));