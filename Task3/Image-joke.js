// IMAGE CAROUSEL
const images = document.querySelectorAll(".carousel img");
let current = 0;

function showSlide(index) {
  images.forEach(img => img.classList.remove("active"));
  images[index].classList.add("active");
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % images.length;
  showSlide(current);
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
});

setInterval(() => {
  current = (current + 1) % images.length;
  showSlide(current);
}, 5000);

// FETCH DATA FROM API
document.getElementById("fetchJoke").addEventListener("click", async () => {
  const jokeDisplay = document.getElementById("jokeDisplay");
  jokeDisplay.textContent = "Fetching a new joke...";
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    const data = await res.json();
    jokeDisplay.textContent = data.joke || "Couldn't load a joke 😅";
  } catch {
    jokeDisplay.textContent = "Error fetching joke!";
  }
});

// DARK/LIGHT MODE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});



