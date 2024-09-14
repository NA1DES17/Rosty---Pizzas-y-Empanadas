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

  // Configura la imagen principal inicial
  imgPrincipal.src = "src/jyq.jpg";

  // Añade el evento de clic a cada botón de la galería
  opButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover la clase 'selected' de todos los botones
      opButtons.forEach((btn) => btn.classList.remove("selected"));

      // Agregar la clase 'selected' al botón clicado
      button.classList.add("selected");

      // Actualizar la imagen principal según el valor del botón
      switch (button.value) {
        case "ingles":
          imgPrincipal.src = "src/verd2.jpg";
          break;
        case "limon":
          imgPrincipal.src = "src/jyq3.jpg";
          break;
        case "marmolado":
          imgPrincipal.src = "src/verd.jpg";
          break;
        case "naranja":
          imgPrincipal.src = "src/tarta.jpg";
          break;
        case "vainilla":
          imgPrincipal.src = "src/jyqAbierta.jpg";
          break;
        case "chocolate":
          imgPrincipal.src = "src/jyq.jpg";
          break;
      }
    });
  });
});
// --------------Galeria---------------
