let equipos = new Array(8);
let semifinales = new Array(4);
let final = new Array(2);
for (let i = 0 ; i < 8; i++){
    equipos[i] = prompt("Ingresa los nombres de los equipos de cuartos de final, equipo" + (i+1))
}
let res;
console.log("Cuartos de final:");
for (let i = 0 ; i < 4; i++){
    console.log("a: "+equipos[2*i]+" - b: " + equipos[2*i+1]);
    res = prompt("Ingresa el resultado");
    if(res == "a")
        semifinales[i] = 2*i;
    else
        semifinales[i] = 2*i+1;
}
console.log("Semifinalres:");
for (let i = 0 ; i < 2; i++){
    console.log("a: "+equipos[semifinales[2*i]]+" - b: " + equipos[semifinales[2*i+1]]);
    res = prompt("Ingresa el resultado");
    if(res == "a")
        final[i] = semifinales[2*i];
    else
        final[i] = semifinales[ 2*i+1];
}
console.log("La final es:")
console.log(equipos[final[0]]+ " vs " + equipos[final[1]]);
res = prompt("Ingresa el resultado");
console.log("El ganador de la copa del mundo es:")

if(res == "a")
    console.log(equipos[final[0]]);
else
    console.log(equipos[final[1]]); 