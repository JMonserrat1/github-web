document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".carousel-wrapper");
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % wrapper.children.length;
    updateCarousel();
  }

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + "%";
    wrapper.style.transform = `translateX(${translateValue})`;
  }

  setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos (ajusta según tus necesidades)
});

function mostrarTextoCompleto() {
  var parrafo = document.getElementById("parrafo");
  parrafo.classList.toggle("parrafo-full");
  var verMas = document.getElementById("ver-mas");
  verMas.style.display = "none"; // Oculta el botón después de hacer clic
}