import Producto from "./producto.js";

//--------------Menú hamburguesa---------------
document.getElementById("menu-icon").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

//--------------Menú hamburguesa---------------

// --------------Sticky header---------------
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  var main = this.document.querySelector("main");
  header.classList.toggle("abajo", this.window.scrollY > 0);
  main.classList.toggle("abajo", this.window.scrollY > 0);
});
// --------------Sticky header---------------
// --------------No doble click zoom---------------
document.addEventListener("dblclick", function (event) {
  event.preventDefault();
});
// --------------No doble click zoom---------------
// --------------Botones y display---------------
document.addEventListener("DOMContentLoaded", () => {
  //Seleccionamos todos los <h2> de TITLE
  const titulos = document.querySelectorAll(".title");
  //Iteramos sobre los <h2> TITLE para agregar el titulo
  for (let i = 0; i < titulos.length; i++) {
    titulos[i].innerHTML = listaProductos[i].sabor;
  }

  //Seleccionamos todos los <p> de PRICE
  const precios = document.querySelectorAll(".price");
  //Iteramos sobre los <p> PRICE para agregar el precio
  for (let i = 0; i < precios.length; i++) {
    precios[i].innerHTML = listaProductos[i].precio;
  }

  //Seleccionamos todos los <p> de DESCRIPTION
  const descripciones = document.querySelectorAll(".description");
  //Iteramos sobre los <p> DESCRIPTION para agregar el precio
  for (let i = 0; i < precios.length; i++) {
    descripciones[i].innerHTML = listaProductos[i].descripción;
  }

  // Seleccionamos todos los contenedores de TARJETAS
  const tarjetas = document.querySelectorAll(".tarjeta");
  // Iteramos sobre cada TARJETAS para agregar los eventos a los botones
  tarjetas.forEach((tarjeta) => {
    const plusButton = tarjeta.querySelector(".plus");
    const delButton = tarjeta.querySelector(".del");
    const display = tarjeta.querySelector(".display");

    // Inicializamos el valor del display
    let cantidad = 0;

    // Evento para el botón de suma
    plusButton.addEventListener("click", () => {
      cantidad++;
      display.value = cantidad;
      updateValues(); // Llamar a la función para actualizar la lista de valores
    });

    // Evento para el botón de resta
    delButton.addEventListener("click", () => {
      if (cantidad > 0) {
        cantidad--;
      }
      display.value = cantidad;
      updateValues(); // Llamar a la función para actualizar la lista de valores
    });
  });

  // Función para actualizar la lista de valores de los displays
  let sumaTotal = 0; // Variable global para almacenar el total

  function updateValues() {
    sumaTotal = 0; // Reiniciamos el total
    valores.length = 0; // Limpiamos el array de valores

    tarjetas.forEach((tarjeta, index) => {
      const display = tarjeta.querySelector(".display");
      const cantidad = parseInt(display.value);
      const precio = parseFloat(
        listaProductos[index].precio.replace(/[^0-9.-]+/g, "")
      ); // Convertir el precio a número

      if (cantidad > 0) {
        valores.push(cantidad);
        sumaTotal += cantidad * precio; // Sumar el total por cada producto
      } else {
        valores.push(0);
      }
    });

    // Mostrar el total en la interfaz
    const totalDisplay = document.getElementById("totalDisplay");
    totalDisplay.innerHTML = `Total: $${sumaTotal.toLocaleString()}`;
  }

  document.getElementById("verPedido").addEventListener("click", () => {
    const nombre = document.getElementById("name").value;
    let mensaje = `<strong>Mi pedido:</strong>\n<br>`;
    let mensajeWp = `Hola, soy ${nombre}\nTe pido:\n`;

    // Recorremos cada tarjeta para obtener el sabor y cantidad
    tarjetas.forEach((tarjeta, index) => {
      const display = tarjeta.querySelector(".display");
      const cantidad = display.value;

      if (cantidad > 0) {
        const sabor = listaProductos[index].sabor;
        mensaje += `- ${sabor}: ${cantidad}\n<br>`;
        mensajeWp += `- ${sabor}: ${cantidad}\n`;
      }
    });

    // Agregar el total al mensaje
    mensaje += `<strong>Total: $${sumaTotal.toLocaleString()}</strong>`;
    mensajeWp += `Total: $${sumaTotal.toLocaleString()}`;

    if (nombre === "") {
      alert("Por favor ingrese su nombre");
    } else {
      // Codificar el mensaje para la URL
      const mensajeCodificado = encodeURIComponent(mensajeWp);
      const enviarPedido = document.getElementById("enviarPedido");
      const pedidoFinalizado = document.getElementById("pedidoFinalizado");

      // Mostramos el pedido en pantalla
      pedidoFinalizado.innerHTML = mensaje;

      // Botón de confirmación del pedido
      enviarPedido.style.display = "flex";
      enviarPedido.addEventListener("click", () => {
        // Enviamos el pedido por WhatsApp
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=5491138561101&text=${mensajeCodificado}`;

        alert("Pedido realizado\n(La página se recargará)");
        setTimeout(window.open(urlWhatsApp, "_blank"), 10000);
        window.scrollTo(0, 0);
        window.location.reload();
      });
    }
  });
});
// --------------Botones y display---------------

// --------------Productos---------------
const prePizzaTomate = new Producto(
  "Pre-pizza de tomate",
  "$1000.00",
  "Base crujiente con una capa de salsa de tomate casera. Lista para agregar tus ingredientes favoritos."
);
const prePizzaTomateCMuzza = new Producto(
  "Pre-pizza de tomate c/ muzzarella",
  "$1000.00",
  "Base crujiente con una capa de salsa de tomate casera y la mejor muzzarella. Lista hornear y disfrutar."
);
const prePizzaCebolla = new Producto(
  "Pre-pizza de Cebolla",
  "$1200.00",
  "Deliciosa base con cebolla dorada, perfecta para personalizar tu pizza en casa."
);
const pizzetas = new Producto(
  "Pizzetas",
  "$1000.00",
  "Mini pizzas listas para disfrutar con salsa de tomate, ideales para añadir tus ingredientes preferidos."
);
const pizzetasCMuzza = new Producto(
  "Pizzetas c/muzza",
  "$1500.00",
  "Pequeñas pizzas con muzzarella gratinada, perfectas para un snack rápido y sabroso."
);
const muzzarella = new Producto(
  "Pizza de Muzzarella",
  "$5500.00",
  "Tradicional pizza con abundante muzzarella derretida sobre una base crujiente. Ideal para compartir."
);
const jamonYmorrones = new Producto(
  "Pizza de jamón y morrones",
  "$8000.00",
  " Exquisita pizza con jamón y morrones asados, una combinación clásica con muzzarella."
);
const empCarneHorno = new Producto(
  "Empanada de Carne al horno",
  "$700.00",
  "Descripción para una empanada de carne."
);
const empCarneFrita = new Producto(
  "Empanada frita de Carne",
  "$700.00",
  "Descripción para una empanada de carne, pero frita."
);
const empJyQ = new Producto(
  "Empanada de jamón y queso",
  "$700.00",
  "Descripción para una empanada de jamón y queso."
);
const empPolloHorno = new Producto(
  "Empanada de pollo al horno",
  "$700.00",
  "Descripción para una empanada de pollo."
);
const tostado = new Producto(
  "Tostado de jamón y queso.",
  "$2500.00",
  "Descripción para un tostado de jamón y queso."
);

const listaProductos = [
  prePizzaTomate,
  prePizzaTomateCMuzza,
  prePizzaCebolla, //falta foto
  muzzarella, //falta foto
  jamonYmorrones, //falta foto
  pizzetas,
  pizzetasCMuzza,
  empCarneHorno,
  empCarneFrita,
  empJyQ,
  empPolloHorno,
  tostado,
];
const valores = [];
