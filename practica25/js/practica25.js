function OperacionesMatematicas(operacion, a, b) {
    switch (operacion) {
      case 'sumar':
        return a + b;
      case 'restar':
        return a - b;
      case 'multiplicar':
        return a * b;
      case 'dividir':
        return b !== 0 ? a / b : 'No se puede dividir por cero';
      case 'residuo':
        return a % b;
      default:
        return 0;
    }
}

function ejecutarOperacion() {
    //Tomamos el valor del elemento id 'operaciones' y lo guardamos en variable 'operacion'
    var operacion = document.getElementById('operacion').value;
    //Tomamos el valor del elemento id 'primero' y lo guardamos en variable 'a'
    var a = parseInt(document.getElementById('primero').value);
    //Tomamos el valor del elemento id 'segundo' y lo guardamos en variable 'b'
    var b = parseInt(document.getElementById('segundo').value);
    //Llamamos al metodo de la operaciones y el resultado lo guardamos en 'resultado'
    var resultado = OperacionesMatematicas(operacion, a, b);
    //Utilizamos el .innerText para mostrar el texto solo el texto visible para el usuario
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
  }