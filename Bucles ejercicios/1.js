let valorMaximo = parseInt(prompt("Ingrese un valor entero:"));

let resultado = "";

for (let i = 0; i <= valorMaximo; i++) {
    
    if (i === 0) {

        resultado = resultado + i;
    } else {
     
        resultado = resultado + ", " + i;
    }
}

alert(resultado);
console.log(resultado);