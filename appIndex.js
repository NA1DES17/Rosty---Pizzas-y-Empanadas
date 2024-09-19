const acordeon = document.getElementsByClassName("contenedor-acordeon");

for (i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function () {
    this.classList.toggle("activa");
  });
}
//------------------

//------------------
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

// --------------Galeria---------------
document.addEventListener("DOMContentLoaded", function () {
  const opButtons = document.querySelectorAll(".op");
  const imgPrincipal = document.getElementById("imgPrincipal");
  const botonFotoPrincipal = document.getElementById("botonFotoPrincipal");

  // Configura la imagen principal inicial
  imgPrincipal.src = "src/fotosPrueba/frita.jpg";

  // Añade el evento de clic a cada botón de la galería
  opButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover la clase 'selected' de todos los botones
      opButtons.forEach((btn) => btn.classList.remove("selected"));

      // Agregar la clase 'selected' al botón clicado
      button.classList.add("selected");

      // Actualizar la imagen principal según el valor del botón
      switch (button.value) {
        case "tostado":
          imgPrincipal.src = "src/fotosPrueba/tostado.jpg";
          botonFotoPrincipal.href = "pedidos.html#p12";
          break;
        case "pastPapa":
          imgPrincipal.src = "src/fotosPrueba/pastelDePapa.jpg";
          botonFotoPrincipal.href = "pedidos.html#p13";
          break;
        case "tortilla":
          imgPrincipal.src = "src/fotosPrueba/tortilla.jpg";
          botonFotoPrincipal.href = "pedidos.html#p14";
          break;
        case "empanadaPollo":
          imgPrincipal.src = "src/fotosPrueba/pollo.jpg";
          botonFotoPrincipal.href = "pedidos.html#p11";
          break;
        case "empanadaJYQ":
          imgPrincipal.src = "src/fotosPrueba/jyq.jpg";
          botonFotoPrincipal.href = "pedidos.html#p10";
          break;
        case "empanadaFrita":
          imgPrincipal.src = "src/fotosPrueba/frita.jpg";
          botonFotoPrincipal.href = "pedidos.html#p9";
          break;
      }
    });
  });
});
// --------------Galeria---------------

document.addEventListener("DOMContentLoaded", function () {
  // Para el iframe del mapa
  const mapa = document.createElement("iframe");
  mapa.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.288011741564!2d-58.25847210160984!3d-34.74169874733671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f56953773ab%3A0xedd1486102cc66d3!2sRosty%20pizzas%20y%20empanadas!5e1!3m2!1ses!2sar!4v1726093228226!5m2!1ses!2sar";
  mapa.width = "600";
  mapa.height = "450";
  mapa.style.border = "0";
  mapa.allowFullscreen = "";
  mapa.loading = "lazy";
  mapa.referrerPolicy = "no-referrer-when-downgrade";
  document.querySelector("#benefits").appendChild(mapa);

  // Para el iframe del video de YouTube
  const video = document.createElement("iframe");
  video.src = "https://www.youtube.com/embed/8X9y_49p6do?si=sBiXKzqnjKHey-xu";
  video.className = "videoContainer";
  video.title = "YouTube video player";
  video.frameBorder = "0";
  video.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  video.allowFullscreen = true;
  document.querySelector(".videoContainer").replaceWith(video);
});
