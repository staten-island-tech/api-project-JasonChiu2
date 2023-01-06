import "./style.css";
let pokemon = "ditto";
const URL = "https://pokeapi.co/api/v2/pokemon/${pokemon}";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
      const data = await response.json();
      document.getElementById("app").insertAdjacentHTML(
        "afterbegin",
        `  <div class="card">
      <h2>${data.name}</h2>
      <img src="${data.sprites.front_default}" alt="Pokemon">
    </div>`
      );
    }
  } catch (error) {
    console.log(error);
    console.log(response.status);
  }
}
getData(URL);
