/* JavaScript pour faire sortir les étiquettes lorsque la souris est placée dessus */
var labels = document.querySelectorAll(".label");
for (var i = 0; i < labels.length; i++) {
  labels[i].addEventListener("mouseover", function() {
    this.style.transform = "translateY(-100%)";
    this.style.zIndex = "1";
  });
  labels[i].addEventListener("mouseout", function() {
    this.style.transform = "translateY(0)";
    this.style.zIndex = "0";
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

var reader = new FileReader();
reader.onload = function() {
  var data = JSON.parse(reader.result);
  data.pages.forEach(page => {
    console.log("Creating li for: " + page.name);
    let li = document.createElement("li");
    li.href = page.url;
    li.innerHTML = page.name;
    sidebar.appendChild(li);
  });
};
reader.readAsText("./pages.json");