let cantidadAlumnos = Number(prompt("Ingrese la cantidad de alumnos:"));

let sumaNotas = 0;
let aprobados = 0;
let desaprobados = 0;


let mayorNota = 0; 
let menorNota = 11; 

for (let i = 1; i <= cantidadAlumnos; i++) {
    let nombre = prompt("Nombre del alumno " + i + ":");
    let nota = Number(prompt("Nota de " + nombre + " (1 al 10):"));

    sumaNotas = sumaNotas + nota;

    if (nota >= 7) {
        aprobados++;
    } else {
        desaprobados++;
    }

    if (nota > mayorNota) {
        mayorNota = nota;
    }

    if (nota < menorNota) {
        menorNota = nota;
    }
}
let promedioGeneral = sumaNotas / cantidadAlumnos;


let informe = "INFORME \n\n" +
              "Promedio General: " + promedioGeneral.toFixed(1) + "\n" +
              "Mayor Nota: " + mayorNota + "\n" +
              "Menor Nota: " + menorNota + "\n\n" +
              "Aprobados: " + aprobados + "\n" +
              "Desaprobados: " + desaprobados + "\n\n" +
              "================================";

alert(informe);
console.log(informe);