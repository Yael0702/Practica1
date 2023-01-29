let limite = (prompt("ingresa el limite"));
let lectura =new array (limite);

for(i=0; i<limite; i++){
    lectura[i] = prompt("ingresa los numeros a leer");
console.log(lectura)
}
let numcomparar= prompt("ingresa el numero con cual comparar");
let mayor =0;
for(i=0; i<lectura.length; i++){
    if (lectura[i] > numcomparar)
    {mayor++;}}
console.log("De tu lista",mayor,"Valores son mayor a", numcomparar);    