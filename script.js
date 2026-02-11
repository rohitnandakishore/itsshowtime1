let current = 1;

// Page navigation
function nextPage() {
  document.getElementById("page" + current).classList.remove("active");
  current++;
  document.getElementById("page" + current).classList.add("active");
}

// Final answers
function yesLove() {
  document.getElementById("page5").classList.remove("active");
  document.getElementById("yesPage").classList.add("active");
}

function noLove() {
  document.getElementById("page5").classList.remove("active");
  document.getElementById("noPage").classList.add("active");
}

// Looping background emojis
const emojis = ["🌹", "🧸", "🍫", "💍", "💕", "💖"];
setInterval(() => {
  const span = document.createElement("span");
  span.className = "emoji";
  span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 6 + Math.random() * 6 + "s";
  document.body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 12000);
}, 500);
