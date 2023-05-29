async function fetchWorks() {
  try {
    const response = await fetch("http://localhost:5678/api/works");
    const works = await response.json();

    // Création de l'objet catégories
    const categories = new Set();

    for (let i = 0; i < works.length; i++) {
      const work = works[i];
      const category = work.category.name;

      categories.add(category); // Ajout de la catégorie à l'objet Set pour obtenir les catégories uniques
    }

    // Création de la barre de filtres
    const filterBar = document.querySelector(".filter");

    // Création bouton TOUS
    const tousButton = document.querySelector("p");
    tousButton.textContent = "Tous";
    filterBar.appendChild(tousButton);

    tousButton.addEventListener("click", () => {
      const galleryWorks = document.querySelector(".gallery");
      galleryWorks.innerHTML = ""; // permet de vider le resultat entre chaque catégorie (ca evite l'acummulation du résultat a chaque clic)

      for (let i = 0; i < works.length; i++) {
        const element = works[i];

        // Création de la fiche pour un work
        const workElement = document.createElement("figure");
        // Création des éléments composant la fiche
        const imageElement = document.createElement("img");
        imageElement.src = element.imageUrl;
        imageElement.setAttribute("alt", `${element.title}`);
        const titreElement = document.createElement("figcaption");
        titreElement.innerText = element.title;

        // Rattachement des balises
        // On rattache la balise article à la section Fiches
        galleryWorks.appendChild(workElement);
        workElement.appendChild(imageElement);
        workElement.appendChild(titreElement);
      }
    });

    // Appel à la fonction de filtrage "TOUS" au chargement de la page
    tousButton.click();

    // Création des boutons de filtre pour chaque catégorie
    categories.forEach((category) => {
      const filterButton = document.createElement("p");
      filterButton.textContent = category;

      filterBar.appendChild(filterButton);

      filterButton.addEventListener("click", () => {
        // Filtrer les works en fonction de la catégorie sélectionnée
        filteredWorks = works.filter((work) => category === work.category.name);

        const galleryWorks = document.querySelector(".gallery");
        galleryWorks.innerHTML = ""; // permet de vider le resultat entre chaque catégorie (ca evite l'acummulation du résultat a chaque clic)

        // Afficher les works filtrés
        for (let i = 0; i < filteredWorks.length; i++) {
          const element = filteredWorks[i];

          // Création de la fiche pour un work
          const workElement = document.createElement("figure");
          // Création des éléments composant la fiche
          const imageElement = document.createElement("img");
          imageElement.src = element.imageUrl;
          imageElement.setAttribute("alt", `${element.title}`);
          const titreElement = document.createElement("figcaption");
          titreElement.innerText = element.title;

          // Rattachement des balises
          // On rattache la balise article à la section Fiches
          galleryWorks.appendChild(workElement);
          workElement.appendChild(imageElement);
          workElement.appendChild(titreElement);
        }
      });
    });
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la récupération des travaux :",
      error
    );
  }
}

fetchWorks();
