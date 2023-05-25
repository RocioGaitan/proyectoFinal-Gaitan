let productos = [];

fetch("../scripts/producto.json")
 .then(response => response.json())
 
 .then(data => {
  productos = data;
  cargarProducto(productos);
 })


//DOM
const contenedorProductos = document.getElementById("todos-los-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");



function cargarProducto(productosElegidos) {

  /*contenedorProductos.innerHTML = "";*/

  productosElegidos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-detalle">
    <h3 class="producto-titulo">${producto.titulo}</h3>
    <p class="producto-precio">$${producto.precio}</p>
    <button class="producto-agregar" id= "${producto.id}">AGREGAR AL CARRITO</button>
    </div>
    `;

     contenedorProductos.append(div); 
  })
 
  botonesAgregarActualizar();
}


function botonesAgregarActualizar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

botonesAgregar.forEach(boton => {
  boton.addEventListener("click", agregarAlCarrito);
});
}

//cargar mas productos al carrito de compras

let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-el-carrito"));

if(productosEnCarritoLS) {
  productosEnCarrito = productosEnCarritoLS;
} else {
  productosEnCarrito = [];
};

//Agregar al carrito

function agregarAlCarrito(e) {

 const idBoton = e.currentTarget.id;
 const productoAgregado = productos.find(producto => producto.id === idBoton);
 
 if(productosEnCarrito.some(producto => producto.id === idBoton)) {
   const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
   productosEnCarrito[index].cantidad++;
} else {
   productoAgregado.cantidad = 1;
   productosEnCarrito.push(productoAgregado);
 }
 
 window.localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito));
 
 
}

//eliminar carrito









