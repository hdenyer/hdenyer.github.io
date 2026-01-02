const modal = document.getElementById("carousel-modal");
const modalImg = document.querySelector(".carousel-image");
const closeBtn = document.querySelector(".carousel-close");

const images = Array.from(document.querySelectorAll(".project-image img"));
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.onclick = () => modal.style.display = "none";

document.getElementById("prev").onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
};

document.getElementById("next").onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
};
