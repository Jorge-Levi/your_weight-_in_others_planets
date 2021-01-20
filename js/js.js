var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_tierra = 77;
var peso_marte = parseInt((peso_tierra * g_marte)/g_tierra);
var peso_jupiter = parseInt((peso_tierra * g_jupiter)/g_tierra);

document.writeln("<p>Tu peso en la tierra es de = " + peso_tierra + "</p>");
document.writeln("<p>Tu peso en la marte es de = " + peso_marte + "</p>");
document.writeln("<p>Tu peso en la jupiter es de = " + peso_jupiter + "</p>");