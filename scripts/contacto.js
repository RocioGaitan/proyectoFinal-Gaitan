//vinculacion del formulario
const miFormulario = document.getElementById("formulario");



//creacion clase cliente
class Cliente{

constructor(nombre, email, celular, consulta) {
    this.nombre = nombre;
    this.email = email;
    this.celular = celular;
    this.consulta = consulta;
    this.fecha = new Date();
}
}

//array clientes
let clientes = [];

miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarFormulario(e.target);
});

//recuperar los datos que selecciono el usuario, creo datos individuales
function validarFormulario(e) {
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const consulta = document.getElementById("consulta").value;
    
  
   //instaciamos que se crea un objeto con la forma de opcion
   const unCliente = new Cliente(
    nombre,
    email,
    celular,
    consulta
    );
  
   //añadir un elemento a la lista
   clientes.push(unCliente);
   console.log("Elementos que posse la consulta", clientes);

   swal.fire({
    title: "Muchas gracias por tu consulta " + nombre + " .Estaremos respondiento tu consulta via e-mail: " + email
 });

 miFormulario.reset();

}








