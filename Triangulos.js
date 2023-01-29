//Ejercicio de que triangulo se trata
var txt1, txt2, txt3;

txt1 = parseInt(prompt("Favor de ingresar lado 1:"));
txt2 = parseInt(prompt("Favor de ingresar lado 2:"));
txt3 = parseInt(prompt("Favor de ingresar lado 3:"));

if(txt1 == txt1 && txt2 == txt3)

console.log("Los lados corresponden a un lado equilatero");

else if(txt1 == txt2||  txt1 == txt3|| txt2 == txt3)

console.log("Los lados correponden a un triangulo Isoceles");

else

console.log("Los lados equivalen a un triangulo escaleno");