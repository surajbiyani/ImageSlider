const scrollContainer = document.querySelector(".slider-track");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollBy({
    left: e.deltaY,
    behavior: "smooth",
  });
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});
