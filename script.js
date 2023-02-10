/* JavaScript pour faire sortir les étiquettes lorsque la souris est placée dessus */
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

/* JavaScript pour faire suivre le défilement du titre */
var header = document.querySelector(".fixed-header");
var sticky = header.offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

/* Utiliser JavaScript pour détecter le défilement de la page */
window.onscroll = function() {
  if (window.pageYOffset > 500) {
    document.querySelector(".scroll-top-button").style.opacity = "1";
    document.querySelector(".scroll-top-button").style.visibility = "visible";
  } else {
    document.querySelector(".scroll-top-button").style.opacity = "0";
    document.querySelector(".scroll-top-button").style.visibility = "hidden";
  }

  var mainContent = document.querySelector('.main-content');
  var sidebar = document.querySelector('.sidebar');

  sidebar.style.height = mainContent.offsetHeight + 'px';
};

/* Utiliser JavaScript pour détecter le chargement de la page */
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

  /* Utiliser JavaScript pour gerer la neige */

  var snowflakesContainer = document.querySelector('.snowflakes-container');
  var totalSnowflakes = 200;

  for (let i = 0; i < totalSnowflakes; i++) {
    var snowflake = document.createElement("div");
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    snowflakesContainer.appendChild(snowflake);
  }

/* Reitre la page de chargement */
  document.querySelector(".loading-screen").style.opacity = "0";
  document.querySelector(".loading-screen").style.visibility = "hidden";
});


/* JavaScript pour faire tourner les box vers la souris */
const boxes = document.querySelectorAll(".box");
const limits = 20;

// Declare an anonymous function to handle the mousemove event
boxes.forEach(box => {
  box.addEventListener("mousemove", function (e) {
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

     // Calculate the glare position based on the rotation values
    const glarePos = rotateX + rotateY + 90;
    const glare = this.querySelector(".glare");
    glare.style.left = glarePos + "%";
  });

  box.addEventListener("mouseleave", function (e) {
    this.style.boxShadow = "0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), 0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)";
    this.style.transform = "scale(1.0)";
    const glare = this.querySelector(".glare");
    glare.style.left = "100%";
  });
});

/* Utiliser JavaScript pour mettre chaque charactere du titre dans une balise span */
var balise = document.querySelector('.char-to-char');
var text = balise.innerHTML;
balise.innerHTML = ""; // Supprime le texte précédent

for (var i = 0; i < text.length; i++) {
  var letter = document.createElement("span");
  letter.style.animationDelay = (i * 0.1) + "s";
  letter.innerHTML = text[i];
  balise.appendChild(letter);
}

/* Utiliser JavaScript pour mettre chaque balise du parent */
var baliseTab = document.querySelector('.balise-to-balise');
if (baliseTab != null) {
  for (var i = 0; i < baliseTab.children.length; i++) {
    baliseTab.children[i].style.animationDelay = (i * 0.5) + "s";
  }
}


