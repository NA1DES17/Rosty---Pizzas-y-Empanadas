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
  imgPrincipal.srcset = `
    src/fotosPrueba/400x300/frita.jpg 320w,
    src/fotosPrueba/800x600/frita.jpg 768w,
    src/fotosPrueba/frita.jpg 1200w`;
  imgPrincipal.sizes = "(max-width: 768px) 100vw, (min-width: 768px) 50vw";

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
          //---
          imgPrincipal.src = "src/fotosPrueba/tostado.jpg.jpg";
          imgPrincipal.srcset = `
            src/fotosPrueba/400x300/tostado.jpg 320w,
            src/fotosPrueba/800x600/tostado.jpg 768w,
            src/fotosPrueba/tostado.jpg 1200w`;
          botonFotoPrincipal.href = "pedidos#p11";
          break;
        case "pastPapa":
          //---
          imgPrincipal.src = "src/fotosPrueba/pastelDePapa.jpg.jpg";
          imgPrincipal.srcset = `
            src/fotosPrueba/400x300/pastelDePapa.jpg 320w,
            src/fotosPrueba/800x600/pastelDePapa.jpg 768w,
            src/fotosPrueba/pastelDePapa.jpg 1200w`;
          botonFotoPrincipal.href = "pedidos#p12";
          break;
        case "tortilla":
          //---
          imgPrincipal.src = "src/fotosPrueba/tortilla.jpg.jpg";
          imgPrincipal.srcset = `
                      src/fotosPrueba/400x300/tortilla.jpg 320w,
                      src/fotosPrueba/800x600/tortilla.jpg 768w,
                      src/fotosPrueba/tortilla.jpg 1200w`;
          botonFotoPrincipal.href = "pedidos#p13";
          break;
        case "empanadaPollo":
          imgPrincipal.src = "src/fotosPrueba/pollo.jpg.jpg";
          imgPrincipal.srcset = `
                      src/fotosPrueba/400x300/pollo.jpg 320w,
                      src/fotosPrueba/800x600/pollo.jpg 768w,
                      src/fotosPrueba/pollo.jpg 1200w`;
          botonFotoPrincipal.href = "pedidos#p10";
          break;
        case "empanadaJYQ":
          //---
          imgPrincipal.src = "src/fotosPrueba/jyq.jpg.jpg";
          imgPrincipal.srcset = `
                      src/fotosPrueba/400x300/jyq.jpg 320w,
                      src/fotosPrueba/800x600/jyq.jpg 768w,
                      src/fotosPrueba/jyq.jpg 1200w`;
          botonFotoPrincipal.href = "pedidos#p9";
          break;
        case "empanadaFrita":
          //---
          imgPrincipal.src = "src/fotosPrueba/frita.jpg.jpg";
          imgPrincipal.srcset = `
                      src/fotosPrueba/400x300/frita.jpg 320w,
                      src/fotosPrueba/800x600/frita.jpg 768w,
                      src/fotosPrueba/frita.jpg 1200w`;
          botonFotoPrincipal.href = "pedidos#p8";
          break;
      }
    });
  });
});
// --------------Galeria---------------

document.querySelectorAll(".youtube-video").forEach(function (video) {
  video.addEventListener("click", function () {
    var iframe = document.createElement("iframe");
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" + this.dataset.id + "?autoplay=1"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    this.innerHTML = ""; // Limpiamos el contenedor
    this.appendChild(iframe); // Agregamos el iframe
  });
});
