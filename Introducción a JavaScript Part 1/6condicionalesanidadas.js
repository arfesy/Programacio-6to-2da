let nota = Number(prompt("Nota:"));
if (nota >= 6) {
    console.log("Aprobado");
} else if (nota >= 4) {
    console.log("Regular");
} else {
    console.log("Desaprobado");
}

let num = Number(prompt("Numero:"));
if (num > 0) {
    console.log("Positivo");
} else if (num < 0) {
    console.log("Negativo");
} else {
    console.log("Cero");
}

let edad = Number(prompt("Edad:"));
if (edad <= 12) {
    console.log("Niño");
} else if (edad <= 17) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

let calificacion = Number(prompt("Nota (1-10):"));
if (calificacion >= 9) {
    console.log("Excelente");
} else if (calificacion >= 6) {
    console.log("Bueno");
} else {
    console.log("Malo");
}