var valores = [true, 10, false, "codigo", "herramientas", 7];

    // 1. Elementos de texto
    var textoMayor = valores[3] > valores[4] ? valores[3] : valores[4];
    alert("El texto mayor es: " + textoMayor);

    // 2. Valores booleanos
    var nu1 = 3;
    var nu2 = 5;
    var rT = nu2 > nu1;
    var rT;
    var rF = nu2 < nu1;
    var rT;
    alert("Resultado con booleanos\n"+nu2+">"+nu1+" : " + rT +"\n"+nu2+"<"+nu1+ " : " + rF);

    // 3. Operaciones matemáticas 
    var suma = valores[1] + valores[5];
    var resta = valores[1] - valores[5];
    var multiplicacion = valores[1] * valores[5];
    var division = valores[1] / valores[5];
    alert("Operaciones matemáticas - Suma: " + suma + ", Resta: " + resta + ", Multiplicación: " + multiplicacion + ", División: " + division.toFixed(2));