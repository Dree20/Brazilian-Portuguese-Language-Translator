function newLanguage(event) {
  event.preventDefault();
  new Typewriter("#new-word", {
    strings: "Como vai voce?",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let formElement = document.querySelector("#language-form");
formElement.addEventListener("submit", newLanguage);
