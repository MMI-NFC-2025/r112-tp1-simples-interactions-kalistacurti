// TODO
// ----------------------
// Mettre le texte en rouge
// ----------------------
const paragraphe = document.querySelector("#a-mettre-en-rouge");
paragraphe.style.color = "red";

// ----------------------
// Réagir à un clic sur le bouton
// ----------------------
const bouton = document.querySelector("#en-rouge-suite-a-click");

bouton.addEventListener("click", () => {
  bouton.style.color = "red";
});

// ----------------------
// Réagir à un clic sur tous les H2
// ----------------------
const tousLesH2 = document.querySelectorAll("h2");

tousLesH2.forEach((elem) => {
  elem.addEventListener("click", (evt) => {
    // evt.target = l’élément sur lequel on a cliqué
    evt.target.style.color = "red";
    console.log("Clic sur :", evt.target);
  });
});
