let edad = Number(prompt("edad:"));
if (edad < 18 || edad > 65) {
    console.log("es menor de edad o mayor de 65");
}

let nota1 = Number(prompt("Nota 1:"));
let nota2 = Number(prompt("Nota 2:"));
if (nota1 >= 6 || nota2 >= 6) {
    console.log("al menos una nota es mayor o igual a 6");
}

let num = Number(prompt("Numero:"));
if (num == 0 || num < 0) {
    console.log("es cero o negativo");
}

let usuario = prompt("Usuario:");
if (usuario == "admin" || usuario == "Admin") {
    console.log("acceso permitido");
}