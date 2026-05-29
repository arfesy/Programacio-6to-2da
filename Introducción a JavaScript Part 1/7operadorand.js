let n1 = Number(prompt("numero 1:"));
let n2 = Number(prompt("numero 2:"));
if (n1 > 10 && n2 > 10) {
    console.log("Ambos son mayores a 10");
}

let edad = Number(prompt("edad:"));
let tieneLicencia = prompt("tiene licencia? (si/no)");
if (edad >= 18 && tieneLicencia == "si") {
    console.log("Puede conducir");
}

let nota1 = Number(prompt("nota 1:"));
let nota2 = Number(prompt("nota 2:"));
if (nota1 > 6 && nota2 > 6) {
    console.log("ambas notas son mayores a 6");
}

let num = Number(prompt("numero:"));
if (num >= 10 && num <= 20) {
    console.log("Esta entre 10 y 20");
}