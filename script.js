/* cards is add for next version of the web site */

/* JavaScript to output the labels when the mouse is placed on them */
var labels = document.querySelectorAll(".label");
for (var i = 0; i < labels.length; i++) {
  labels[i].addEventListener("mouseover", function() {
    this.style.transform = "translateY(-20%)";
    this.style.zIndex = "1";
    this.style.animation = '';
  });
  labels[i].addEventListener("mouseout", function() {
    this.style.transform = "translateY(0)";
    this.style.zIndex = "0";
    this.style.animation = 'float 1.5s ease-in-out infinite';
    this.style.animationDelay = (i * 0.5) + "s";
  });
}

/* Use JavaScript to detect page load */
window.onload = function() {
  document.querySelector(".loading-screen").style.opacity = "1";
  document.querySelector(".loading-screen").style.visibility = "visible";
};

window.addEventListener("load", function() {
  var labels = document.querySelectorAll(".label");
  for (var i = 0; i < labels.length; i++) {
    labels[i].style.animation = "float 1.5s ease-in-out infinite";
    labels[i].style.animationDelay = (i * 0.5) + "s";
  }

/* Reitre la page de chargement */
  document.querySelector(".loading-screen").style.opacity = "0";
  document.querySelector(".loading-screen").style.visibility = "hidden";
});

/* JavaScript pour faire tourner les box vers la souris */
const backCard = document.querySelectorAll(".back-card");
const limits = 20;

// Declare an anonymous function to handle the mousemove event
backCard.forEach(back => {
  const glare = back.querySelector(".glare");
  const starsglare = back.querySelector(".stars-glare");

  back.addEventListener("mousemove", function (e) {
    // Get the bounding rectangles of the target element
    const rect = e.target.getBoundingClientRect();

    // Calculate the x and y position of the mouse within the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate the offset of the mouse within the element as a decimal
    const offsetX = x / rect.width;
    const offsetY = y / rect.height;

    // Calculate the rotateX and rotateY values based on the mouse offset
    const rotateY = (offsetX) * (limits * 2) - limits;
    const rotateX = (offsetY) * (limits * 2) - limits;

    // Calculate the shadow offset values based on the mouse offset
    const shadowOffsetX = (offsetX) * 32 - 16;
    const shadowOffsetY = (offsetY) * 32 - 16;

    // Update the element's styles to apply the shadow and rotation
    this.style.boxShadow = (1 / 6) * -shadowOffsetX + "px " + (1 / 6) * -shadowOffsetY + "px 3px rgba(0, 0, 0, 0.051), " +
      (2 / 6) * -shadowOffsetX + "px " + (2 / 6) * -shadowOffsetY + "px 7.2px rgba(0, 0, 0, 0.073), " +
      (3 / 6) * -shadowOffsetX + "px " + (3 / 6) * -shadowOffsetY + "px 13.6px rgba(0, 0, 0, 0.09), " +
      (4 / 6) * -shadowOffsetX + "px " + (4 / 6) * -shadowOffsetY + "px 24.3px rgba(0, 0, 0, 0.107), " +
      (5 / 6) * -shadowOffsetX + "px " + (5 / 6) * -shadowOffsetY + "px 45.5px rgba(0, 0, 0, 0.129), " +
      -shadowOffsetX + "px " + -shadowOffsetY + "px 109px rgba(0, 0, 0, 0.18)";

    this.style.transform = "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)";

    // Déplace la div "glare" en fonction de l'offsetX et de l'offsetY
    glare.style.transform = `translate(${offsetX * 40 - 20}px, ${offsetY * 40 - 20}px)`;
    starsglare.style.transform = `translate(${offsetX * 40 - 20}px, ${offsetY * 40 - 20}px)`;

    // Affiche la div "glare" en fonction de l'offsetY
    glare.style.opacity = offsetY;
    starsglare.style.opacity = Math.clamp(offsetY,0.3,0.6);
  });

  back.addEventListener("mouseleave", function (e) {
    this.style.boxShadow = "0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), 0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)";
    this.style.transform = "scale(1.0)";
    glare.style.opacity = "0.3";
    starsglare.style.opacity = "0.3";
  });
});

/* make a clamp method for glare of cards */
Math.clamp = function(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/* JavaScript pour faire tourner les cartes vers la souris */
const cards = document.querySelectorAll(".card");

// Declare an anonymous function to handle the mousemove event
cards.forEach(card => {
  card.addEventListener("mouseover", function(e) {
    this.parentNode.className = "backlight-card";
  });

  card.addEventListener("mouseleave", function (e) {
    this.parentNode.className = "back-card";
  });
});

/* Utiliser JavaScript pour mettre chaque charactere du titre dans une balise span */
var balise = document.querySelector('.char-to-char');

if (balise != null) {
  var text = balise.innerHTML;
  balise.innerHTML = ""; // Supprime le texte précédent

  for (var i = 0; i < text.length; i++) {
    var letter = document.createElement("span");
    letter.style.animationDelay = (i * 0.1) + "s";
    letter.innerHTML = text[i];
    balise.appendChild(letter);
  }
}

/* Utiliser JavaScript pour mettre chaque balise du parent */
var baliseTab = document.querySelector('.balise-to-balise');
if (baliseTab != null) {
  for (var i = 0; i < baliseTab.children.length; i++) {
    baliseTab.children[i].style.animationDelay = (i * 0.5) + "s";
  }
}


