var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;

do{
    var peso_tierra = parseFloat(prompt("Peso en la Tierra = "));
}while(peso_tierra < 0 || isNaN(peso_tierra));

var peso_marte = (peso_tierra * g_marte)/g_tierra;
var peso_jupiter = (peso_tierra * g_jupiter)/g_tierra;

document.writeln("<p>Tu peso en la tierra es de = " + peso_tierra + " Kg</p>");
document.writeln("<p>Tu peso en la marte es de = " + peso_marte.toFixed(2) + " Kg</p>");
document.writeln("<p>Tu peso en la jupiter es de = " + peso_jupiter.toFixed(2) + " Kg</p>");