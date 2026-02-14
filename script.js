const ouiBtn = document.querySelector("#oui");
const nonBtn = document.querySelector("#non");
const titre = document.querySelector("h1");
const body = document.body;

let fontSizeOui = 18;
let paddingOui = 14;

let fontSizeNon = 18;
let paddingNon = 14;

let compteurOui = 0;
let compteurNon = 0;

const excuses = [
  "Attends, je consulte les ancêtres vite fait 🕯️",
  "Erreur 404 : feelings not found 😭",
  "Les Razana ne sont pas d’accord 👀",
  "Mon WiFi émotionnel est instable 📶 please try again",
  "Bado loatra mauvais bouton 🤦🏾‍♂️"
];


/* Images associées aux excuses */
const imagesNon = [
  "images/regard1.png",
  "images/regard2.jpg",
  "images/regard3.png",
  "images/regard4.png",
  "images/regard5.webp"
];

/* Image finale quand OUI validé */
const imageOui = "images/victoire.png";


// ----- LOGIQUE NON -----
nonBtn.addEventListener("click", function() {

  compteurNon++;

  const index = (compteurNon - 1) % excuses.length;

  // Texte dans l’ordre
  nonBtn.textContent = excuses[index];

  // Image dans l’ordre
  body.style.background = `
    linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url('${imagesNon[index]}') center/cover no-repeat
  `;

  // OUI grandit
  fontSizeOui += 2;
  paddingOui += 2;
  ouiBtn.style.fontSize = fontSizeOui + "px";
  ouiBtn.style.padding = paddingOui + "px 28px";

  // NON diminue
  fontSizeNon -= 1;
  paddingNon -= 1;
  if (fontSizeNon < 6) fontSizeNon = 6;
  if (paddingNon < 2) paddingNon = 2;
  nonBtn.style.fontSize = fontSizeNon + "px";
  nonBtn.style.padding = paddingNon + "px 20px";



});



// ----- LOGIQUE OUI -----

ouiBtn.addEventListener("click", function() {

  compteurOui++;

  if (compteurOui === 1) {
    titre.textContent = "Mbala tsy paré e… loading… 72% ⏳";
    return;
  }

  if (compteurOui < 3) {
    return;
  }

  // À partir du 3e clic
  titre.textContent = "Akory kai 😂😂😂 bisous 🫶🏾";
  document.querySelector(".buttons").style.display = "none";
  body.style.background = `url('${imageOui}') center/cover no-repeat`;
  lancerConfetti();

  body.style.background = `
  linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
  url('${imageOui}') center/cover no-repeat
`;

});


// ----- CONFETTI -----
function lancerConfetti() {

  const container = document.createElement("div");
  container.classList.add("confetti-container");
  document.body.appendChild(container);

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    confetti.style.animationDuration = (2 + Math.random() * 2) + "s";

    container.appendChild(confetti);
  }

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "♥";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 60 + "vh";
    heart.style.color = "red";

    container.appendChild(heart);
  }

  setTimeout(() => {
    container.remove();
  }, 4000);
}
