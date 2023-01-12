import "/style.css";
import { DOM } from "../js/DOMSelectors.js";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
      const data = await response.json();

      console.log(data);

      DOM.container.insertAdjacentHTML(
        "afterbegin",
        `  <div class="card">
      <h2 class="name">${
        data.name.charAt(0).toUpperCase() + data.name.slice(1)
      }</h2>
      <img src="${data.sprites.front_default}" alt="Pokemon" class="image">
      <ul class="abilities"></ul>
    </div>`
      );
      quereySelector(".abilities").insertAdjacentHTML("afterbegin", data.abilities.forEach((element) => element.ability.name)
  } catch (error) {
    console.log(error);
    DOM.container.insertAdjacentHTML(
      "afterbegin",
      `<h1 class="name">(·_·) ermm what the heck</h1>`
    });
  }
}

function clear() {
  DOM.name.value = "";
  DOM.container.innerHTML = "";
}

DOM.form.addEventListener("submit", function () {
  event.preventDefault();
  let pokemon = DOM.name.value.toLowerCase();
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  getData(URL);
  clear();
});
