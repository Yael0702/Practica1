let limite = (prompt("¿Cuantos datos ingresara?"));
let lectura = new Array(limite);
for(i=0; i<limite; i++){
    lectura[i]= parseFloat(prompt("Ingresa las calificaciones"));
console.log("calificaciones"+lectura);
}
let promedio=0;
for(i=0; i<=lectura.length; i ++){
    if(lectura[i] >=6){promedio++}
}
console.log(promedio,"Datos son mayor que el promedio")        