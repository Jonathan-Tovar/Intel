const producto = {nombre : "jabon", precio : 75, cantidad : 10};

const subtotal = producto.precio * producto.cantidad;
const IVA = producto.precio * 0.16;
const Tp = subtotal + IVA;

console.log("nombre", producto.nombre);
console.log("subtotal ", subtotal);
console.log("Iva ", IVA);
console.log("Total a Pagar ", Tp);