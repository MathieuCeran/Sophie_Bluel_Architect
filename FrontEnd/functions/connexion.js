async function connexionUser() {
  // envoi une requête HTTP POST à l'API de connexion avec les informations d'authentification de l'architecte

  const formEl = document.querySelector("#login form");
  const formData = new FormData(formEl);
  const response = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    ///Permet de pouvoir traiter les infos du formData en JSON
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  // traite la réponse de l'API pour savoir si connexion réussie ou non
  if (response.status === 200) {
    // stock réponse serveur qui représente les informations de l'utilisateur dans variable userInfos
    console.log("ok");
  } else {
    // affiche à l'user un message d'erreur quand mdp et/ou email incorrect
    alert("Le mot de passe et/ou l'e-mail est incorrecte");
    sessionStorage.setItem("isLoggedIn", false);
    sessionStorage.setItem("isLoggedOut", true);
    const isLoggedOutList = document.querySelectorAll(".isLoggedOut");
    isLoggedOutList.forEach((outList) => {
      outList.hidden = false;
    });
    const isLoggedInList = document.querySelectorAll(".isLoggedIn");
    isLoggedInList.forEach((inList) => {
      inList.hidden = true;
    });
  }

  // if loggedIn
}
