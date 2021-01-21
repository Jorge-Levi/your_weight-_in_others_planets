var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var contador_peso = 0;
var contador_planeta = 0;

do{
    if(contador_peso > 0){
        alert("Peso no valido.");
    }
    var peso_tierra = parseFloat(prompt("Peso en la Tierra = "));
    contador_peso++;
}while(peso_tierra < 0 || isNaN(peso_tierra));

document.writeln("<p>Tu peso en la tierra es de = " + peso_tierra + " Kg</p>");

do{
    if(contador_planeta > 0){
        alert("Planeta no valido.");
    }
    var planeta = parseInt(prompt("Escoge un planeta\n1.-Jupiter\n2.-Marte"));
    contador_planeta++;
}while(isNaN(planeta) || planeta != 1 && planeta != 2)

if (planeta == 1){
    var peso_marte = (peso_tierra * g_marte)/g_tierra;
    document.writeln("<p>Tu peso en la marte es de = " + peso_marte.toFixed(2) + " Kg</p>");
}else if(planeta == 2){
    var peso_jupiter = (peso_tierra * g_jupiter)/g_tierra;
    document.writeln("<p>Tu peso en la jupiter es de = " + peso_jupiter.toFixed(2) + " Kg</p>");
}

