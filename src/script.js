function translateWords(response) {
  console.log("poem generated");
  new Typewriter("#new-word", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function newLanguage(event) {
  event.preventDefault();
  let newWordInput = document.querySelector("#input-word");
  let apiKey = "babdtd562ab541fbc49o01aca733b4ff";
  let context =
    " You are a Brazilian Portuguese language expert and are phemonomal at translating words and sentences. Your mission is to translate the words and short sentences entered. Please only show the translated word and sentence. Please follow the user instructions. Please sign the translation with a <br/> 'SheCodes AI'  at the bottom inside a <strong> element with font-size 20px";
  let prompt = ` User instructions are: Please translate ${newWordInput.value} to Brazilian Portuguese`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);
  axios.get(apiUrl).then(translateWords);
}
let formElement = document.querySelector("#language-form");
formElement.addEventListener("submit", newLanguage);
