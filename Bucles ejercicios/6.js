let contraseña = prompt("Ingrese su contraseña:");

while (contraseña != "1234") {
    alert("Contraseña incorrecta. Intente nuevamente.");
    contraseña = prompt("Ingrese su contraseña:");
}

alert("Acceso permitido");
console.log("Acceso permitido");