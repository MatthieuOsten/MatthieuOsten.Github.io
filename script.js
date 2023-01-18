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

document.getElementById("file-input").addEventListener("change", function() {
  console.log("Input file changed");
  let file = this.files[0];
  console.log("File selected: " + file.name);
  let reader = new FileReader();

  reader.onloadend = function() {
      console.log("File reading completed");
      let data = JSON.parse(reader.result);
      console.log("Data parsed: " + JSON.stringify(data));
      data.pages.forEach(page => {
          console.log("Creating li for: " + page.name);
          let li = document.createElement("li");
          li.href = page.url;
          li.innerHTML = page.name;
          sidebar.appendChild(li);
      });
  }
  reader.readAsText(file);
  console.log("File reading started");
}, false);
