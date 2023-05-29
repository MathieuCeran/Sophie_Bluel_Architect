/////////////////////////////////
//Fonction/logique de connexion
/////////////////////////////////
async function connexionUser() {
  // envoi une requête HTTP POST à l'API de connexion avec les informations d'authentification de l'architecte

  const formEl = document.querySelector("#login form");
  const formData = new FormData(formEl);
  const response = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  // traite la réponse de l'API pour savoir si connexion réussie ou non
  if (response.status === 200) {
    // stock réponse serveur qui représente les informations de l'utilisateur dans variable userInfos
    console.log("ok"); // TODO :reste a traiter les informations
  } else {
    // affiche à l'user un message d'erreur quand mdp et/ou email incorrect
    alert("Le mot de passe et/ou l'e-mail est incorrecte");
  }
}

///////////////////////////////////
//ICi on ecoute le bouton submit pour lancer la fonction connexionUser plus haut
///////////////////////////////////
const form = document.querySelector("#login form");
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // empêcher le rechargement de la page par défaut
  // paramètres d'appel du fetch

  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;

  connexionUser();
});
