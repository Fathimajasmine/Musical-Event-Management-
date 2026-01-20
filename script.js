function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}

// Default page load – HOME show
window.onload = () => {
  showSection("home");
};

// Countdown (optional extra)
const eventDate = new Date("2025-03-30T18:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}, 1000);
