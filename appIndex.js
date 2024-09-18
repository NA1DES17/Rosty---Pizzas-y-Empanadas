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
