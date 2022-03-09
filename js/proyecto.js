const productos = [
  { tipo: "celular", modelo: "A22", precio: 40000 },
  { tipo: "celular", modelo: "Iphone 13", precio: 350000 },
];

const busqueda = prompt("Cual producto desea A22 o Iphone 13")

const buscarProducto = productos.find(producto => producto.modelo === busqueda)

console.log(buscarProducto.modelo)