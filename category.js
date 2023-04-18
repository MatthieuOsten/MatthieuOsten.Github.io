const categories = [
  {
    name: 'Game',
    projects: [
      { name: 'AssaultOfOrder', url:"https://evil0games.itch.io/assault-of-order" },
      { name: 'Bordelania', url:"https://evil0games.itch.io/bordelania" }
    ]
  },
  {
    name: 'Landscape',
    projects: [
      { name: 'PirateIsland', url:"https://www.artstation.com/artwork/4XJX2q" }
    ]
  }
];

const favoriteProjects = [
  {
    category: 'Landscape',
    project: 'PirateIsland',
  },
  {
    category: 'Game',
    project: 'AssaultOfOrder',
  },
  {
    category: 'Game',
    project: 'Bordelania',
  }
]

function GetProject(nameCategorie, nameProject) {
  const categorie = categories.find(element => element.name === nameCategorie);
  if (!categorie) return null;
  return categorie.projects.find(project => project.name === nameProject) || null;
}

function GetCategorie(nameCategorie) {
  return categories.find(element => element.name === nameCategorie) || null;
}

function GenerateBox(parent) {

  /* Genere les cartes et leurs enfants */
  for (let i = 0; i < favoriteProjects.length; i++) {

    var element = "Projects/" + favoriteProjects[i].category + "/" + favoriteProjects[i].project;

    /* -- BOX -- */

    const box = document.createElement("a");
    box.className = "box";
    box.setAttribute('href',GetProject(favoriteProjects[i].category,favoriteProjects[i].project).url);
    box.setAttribute('target',"_blank");

    /* -- CATEGORY -- */

    var categorieBar = document.createElement("div");
    categorieBar.className = "category";
    categorieBar.innerHTML = favoriteProjects[i].category;

    /* -- IMAGE -- */

    var pathBackground = element + '/background.jpg';
    var image = document.createElement("img");
    image.className = "background";
    try {
      image.src = pathBackground;
    } catch (error) {
      console.log("Background doesn't exist : ", favoriteProjects, i);
      image.src = "Image/Default.jpg";
    }

    var pathTitle = element + '/title.png';
    var imageTitle = document.createElement("img");
    imageTitle.className = "title";
    try {
      imageTitle.src = pathTitle;
    } catch (error) {
      console.log("Image for title doesn't exist : ", favoriteProjects, i);
    }

    var pathBox = element + '/box.png';
    const imageBox = document.createElement("img");
      try {
        imageBox.src = pathBox;
      } catch (error) {
        console.log("Image for box doesn't exist : ", favoriteProjects, i);
      }


    /* ------ PARENT ------ */

    box.appendChild(image);
    box.appendChild(imageBox);
    box.appendChild(imageTitle);
    box.appendChild(categorieBar);
    parent.appendChild(box);

  }

}


function GenerateCards(parent, elements) {

  /* Genere les cartes et leurs enfants */
  for (let i = 0; i < elements.projects.length; i++) {

    /* -- CARD -- */

    const backcard = document.createElement("div");
    backcard.className = "back-card";

    const card = document.createElement("div");
    card.className = "card";

    /* -- GLARE -- */

    const glarecontainer = document.createElement("div");
    glarecontainer.className = "glare-container";

    const glare = document.createElement("div");
    glare.className = "glare";

    const starsglare = document.createElement("div");
    starsglare.className = "stars-glare";

    /* -- IMAGE -- */

    const image = document.createElement("img");
    if (elements !== null && elements.projects[i] !== undefined) {
      image.src = elements.projects[i].image
    } else {
      console.log("Elements is null or project doesn't exist: ", elements, i);
      image.src = "Image/Default.png";
    }

    /* ------ PARENT ------ */

    card.appendChild(image);
    card.appendChild(glarecontainer);
    glarecontainer.appendChild(glare);
    glarecontainer.appendChild(starsglare);
    backcard.appendChild(card);
    parent.appendChild(backcard);
  }
}

GenerateBox(document.querySelector(".box-container"));
//GenerateCards(document.querySelector('#Games'), GetCategorie("Games"));