//JSON

const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-el-carrito"));

//const de elementos para llamar del DOM

const carritoVacio = document.getElementById("carrito-vacio");
const carritoProductos = document.getElementById("carrito-productos");
const carritoAcciones = document.getElementById("carrito-acciones");
const carritoComprado = document.getElementById("carrito-comprado");

const botonVaciar = document.getElementById("carrito-vaciar");

const contenedorTotal = document.getElementById("total");

const botonComprar = document.getElementById("boton-comprar");



//DOM
function CargarProductosAlCarrito() {


 if (productosEnCarrito) {
    
    carritoVacio.classList.add("disable");
    carritoComprado.classList.remove("disable");
    carritoProductos.classList.remove("disable");
    carritoAcciones.classList.add("disable");

    carritoProductos.innerHTML= "";

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");

        div.innerHTML = `
        <img class="carrito-img" src="${producto.imagen}" alt="${producto.titulo}">
           
            
        <div class="carrito-titulo">
         <h3>Producto</h3>
         <p>${producto.titulo}</p>
        </div>

        <div class="carrito-precio">
            <h3>Precio</h3>
            <p>${producto.precio}</p>
        </div>

        <div class="carrito-cantidad">
            <h3>Cantidad</h3>
            <p>"${producto.cantidad}"</p>
        </div>

        <div class="carrito-subtotal">
            <h3>Subtotal</h3>
            <p>${producto.precio * producto.cantidad}</p>
        </div>

        <button class="carrito-eliminar" id= ${producto.id}>Eliminar</button>
        `;
        
     carritoProductos.append(div);
     
     const botonEliminar = document.querySelectorAll(".carrito-eliminar");

     botonEliminar.forEach((boton) => {
        boton.addEventListener("click", eliminarProductoCarrito);
     });
       
     actualizarTotal();
     
    });

 } else {
    
    carritoVacio.classList.add("disable");
    carritoComprado.classList.remove("disable");
    carritoProductos.classList.remove("disable");
    carritoAcciones.classList.add("disable");
}

}

CargarProductosAlCarrito();

//eliminar productos
function eliminarProductoCarrito(e){

 const idBoton = e.currentTarget.id;
 const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

 productosEnCarrito.splice(index, 1);
 CargarProductosAlCarrito();
 actualizarTotal();

 localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito));

}

//vaciar carrito
botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito));
    CargarProductosAlCarrito();
    actualizarTotal();
}

//funcion total
function actualizarTotal(){
    total.innerText = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  
}


botonComprar.addEventListener("click", compra);


function compra() {
    Swal.fire({
        icon: 'success',
        title: 'Muchas gracias por tu compra. Te enviaremos via email el detalle de la compra',
        showConfirmButton: false,
        timer: 1500
      })
}




