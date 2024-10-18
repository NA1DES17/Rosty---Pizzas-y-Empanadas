import Producto from "./producto.js";
import {getProductos} from "./sheet.js";
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
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=5491131533709&text=${mensajeCodificado}`;

        alert("Pedido realizado\n(La página se recargará)");
        setTimeout(window.open(urlWhatsApp, "_blank"), 10000);
        window.scrollTo(0, 0);
        window.location.reload();
      });
    }
  });
});
// --------------Botones y display---------------

let listaProductos = [];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Obtener los productos de la hoja de cálculo
    listaProductos = await getProductos();

    // Actualizar la interfaz con los productos obtenidos
    actualizarInterfaz();

    // ... (resto del código existente)
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
});
function actualizarInterfaz() {
  const titulos = document.querySelectorAll(".title");
  const precios = document.querySelectorAll(".price");
  const descripciones = document.querySelectorAll(".description");

  listaProductos.forEach((producto, index) => {
    if (titulos[index]) titulos[index].innerHTML = producto.sabor;
    if (precios[index]) precios[index].innerHTML = producto.precio;
    // Nota: Las descripciones no están disponibles en la hoja de cálculo,
    // así que esta parte se omite o se podría dejar en blanco
  });
}

// --------------Productos---------------
const prePizzaTomate = new Producto(
  "Prepizza de tomate",
  "$00.00",
  "Pizza cubierta c/tomate, pre cocinada lista para hornear y disfrutar."
);
const prePizzaCebolla = new Producto(
  "Prepizza de Cebolla",
  "$00.00",
  "Pizza con cebolla, pre cocinada lista para hornear y disfrutar."
);
const pizzetas = new Producto(
  "Pizzetas",
  "$00.00",
  "Mini pizzas listas para disfrutar con salsa de tomate, ideales para añadir tus ingredientes preferidos."
);
const pizzetasCMuzza = new Producto(
  "Pizzetas c/muzza",
  "$00.00",
  "Mini pizzas listas para disfrutar con salsa de tomate, con la cantidad ideal de muzzarella."
);
const muzzarella = new Producto(
  "Pizza de Muzzarella",
  "$00.00",
  "Tradicional pizza de muzzarella con aceitunas."
);
const jamonYmorrones = new Producto(
  "Pizza de jamón y morrones",
  "$00.00",
  " Exquisita pizza con jamón y morrones asados, una combinación clásica con muzzarella."
);
const empCarneHorno = new Producto(
  "Empanada de Carne al horno",
  "$00.00",
  "Empanada de carne con abundante relleno, hechas con huevo y aceitunas.<br> Cocida al horno."
);
const empCarneFrita = new Producto(
  "Empanada frita de Carne",
  "$00.00",
  "Empanada frita de carne con abundante relleno, hechas con huevo y aceitunas."
);
const empJyQ = new Producto(
  "Empanada de jamón y queso",
  "$00.00",
  "Clásicas empanadas rellenas de jamón, queso y muzzarella."
);
const empPolloHorno = new Producto(
  "Empanada de pollo al horno",
  "$00.00",
  "Jugosa empanada de pollo al horno con abundante relleno."
);
const tostado = new Producto(
  "Tostado de jamón y queso",
  "$00.00",
  "Tostado caliente relleno de jamón y queso, hecho con pan casero."
);
const pDePapa = new Producto(
  "Pastel de papa",
  "$00.00",
  "Pastel de papa relleno de carne."
);
const tortillaDePapa = new Producto(
  "Tortilla de papa",
  "$00.00",
  "Tortilla rellena de jamón y queso."
);
const milaCFritas = new Producto(
  "Milanesa c/ papas fritas",
  "$00.00",
  "Milanesa de carne con un acompañamiento de papas fritas."
);
const pastafrola = new Producto(
  "Pastafrola",
  "$00.00",
  "Masa esponjosa, rellena con membrillo derretido y tiras de masa decorativas."
);
const alfMaicena = new Producto(
  "Alfajor de maicena grande",
  "$00.00",
  "Alfajor gigante, con tapas de maicena y abundante dulce de leche, recubierto con coco rallado."
);
const tortaDeRicota = new Producto(
  "Tarta de ricota",
  "$00.00",
  "Postre tradicional de la cocina argentina, suave, cremoso y ligero, ideal para acompañar tu merienda."
);
const sangucheMila = new Producto(
  "Sándwich de milanesa completo",
  "$00.00",
  "Sándwich de milanesa de carne con lechuga, tomate, jamón y queso, con el más rico pan."
);

listaProductos = [
  prePizzaTomate,
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
  pDePapa,
  tortillaDePapa,
  milaCFritas,
  sangucheMila,
  pastafrola,
  alfMaicena,
  tortaDeRicota,
];
const valores = [];

function mostrarPedido(idPedido) {
  // Lógica para cargar o mostrar el pedido correspondiente
  // Puedes hacer una consulta o búsqueda en tu base de datos o contenido
  console.log("Mostrando detalles del pedido: " + idPedido);
}
