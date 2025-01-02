// const navbarToggle = document.querySelector(".navbar-toggler");
// const navbarCollapse = document.querySelector(".navbar-collapse");
// const body = document.querySelector("body");

// if (navbarToggle && navbarCollapse) {
//   navbarToggle.addEventListener("click", function (event) {
//     navbarCollapse.classList.toggle("show");
//   });

//   body.addEventListener("click", function (event) {
//     if (!navbarCollapse.contains(event.target) && !navbarToggle.contains(event.target)) {
//       navbarCollapse.classList.remove("show");
//     }
//   });
// }

function redirectToWhatsApp() {
  const phoneNumber = "6281315292224";

  const message = "Halo%2C%20saya%20tertarik%20menggunakan%20jasa%20tesis";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");
}

const whatsappButton = document.getElementById("whatsappButton");
if (whatsappButton) {
  whatsappButton.addEventListener("click", function (event) {
    event.preventDefault();
    redirectToWhatsApp();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".chevron-left");
  const nextButton = document.querySelector(".chevron-right");
  const imageList = document.querySelector(".slinder-warpper .image-list");
  const imageWidth = document.querySelector(".slinder-warpper .image-item").offsetWidth + 18;

  prevButton.addEventListener("click", () => {
    imageList.scrollBy({
      left: -imageWidth * 1,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    imageList.scrollBy({
      left: imageWidth * 1,
      behavior: "smooth",
    });
  });
});
