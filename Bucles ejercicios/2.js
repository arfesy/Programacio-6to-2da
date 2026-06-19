let resultadoPares = "";

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        if (resultadoPares === "") {
            resultadoPares = resultadoPares + i;
        } else {
            resultadoPares = resultadoPares + ", " + i;
        }
    }
}

alert("Los números pares son: " + resultadoPares);
console.log("Los números pares son: " + resultadoPares);