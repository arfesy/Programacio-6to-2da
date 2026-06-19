let cantidadProductos = Number(prompt("¿Cuántos productos va a cargar?"));
let totalCompra = 0;

for (let i = 1; i <= cantidadProductos; i++) {
    let nombreProducto = prompt("Ingrese el nombre del producto " + i + ":");
    let precio = Number(prompt("Ingrese el precio de " + nombreProducto + ":"));
    
    
    totalCompra = totalCompra + precio;
}

alert("Cantidad de productos: " + cantidadProductos + "\nTotal de la compra: $" + totalCompra);
console.log("Cantidad de productos: " + cantidadProductos);
console.log("Total de la compra: $" + totalCompra);