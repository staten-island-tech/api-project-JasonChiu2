import "./style.css";

const URL = "https://www.breakingbadapi.com/api/characters";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
      const data = await response.json();
      document.getElementById("app").textContent = data.name;
      console.log(`good`);
    }
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
