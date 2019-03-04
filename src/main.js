const returnHome = document.querySelector("#return-home");
const selectedLetter = document.querySelector("#selected-letter");
const typeMenu = document.querySelector("#type-menu");
const weaknessesMenu = document.querySelector("#weaknesses-menu");


const srcBar = document.querySelector("#src-bar");
const srcBtn = document.querySelector("#src-btn");

const resultHeader = document.querySelector("#result-header")
const srcResult = document.querySelector("#search-result");


let pokemons = POKEMON.pokemon.map((pokemon) => pokemon);


function showAllCards() {
  srcResult.innerHTML = `
  ${pokemons.map((pokemon) => `
    <div class="pokemon-card">
      <img src="${pokemon["img"]}"></img>
    </div>
    <div class="pokemon-name">
    <h3>${pokemon["name"]}</h3>
    </div>
    <div class="pokemon-info">
      <ul>
        <li>Tipo: ${pokemon["type"]}</li>
        <li>Altura: ${pokemon["height"]}</li>
        <li>Peso: ${pokemon["weight"]}</li>
        <li>Egg: ${pokemon["egg"]}</li>
        <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
        <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
        <li>Spawns time: ${pokemon["spawn_time"]}</li>
        <li>Fraquezas: ${pokemon["weaknesses"]}</li>
      </ul>
    </div>
  `).join("")}
  `
}

function filterFirstLetter() {
  let getFirstLetter = selectedLetter.value;
  let totalFirstLetter = [];

  pokemons.forEach(function (pokemon) {
    if (pokemon.name[0] === getFirstLetter) {
      totalFirstLetter.push(pokemon.name);

      let newArticle = document.createElement("article");

      newArticle.innerHTML =
        `
      <div class="pokemon-card">
        <img src="${pokemon["img"]}"></img>
      </div>
      <div class="pokemon-name">
      <h3>${pokemon["name"]}</h3>
      </div>
      <div class="pokemon-info">
        <ul>
          <li>Tipo: ${pokemon["type"]}</li>
          <li>Altura: ${pokemon["height"]}</li>
          <li>Peso: ${pokemon["weight"]}</li>
          <li>Egg: ${pokemon["egg"]}</li>
          <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
          <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
          <li>Spawns time: ${pokemon["spawn_time"]}</li>
          <li>Fraquezas: ${pokemon["weaknesses"]}</li>
        </ul>
      </div>
    `
      srcResult.appendChild(newArticle);
    }
  })

  let total = totalFirstLetter.length;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`
  resultHeader.appendChild(newH);
}

function findType() {
  let requiredType = typeMenu.value;
  let totalType = 0;

  pokemons.forEach(function (pokemon) {
    pokemon.type.forEach(function (type) {
      if (type === requiredType) {
        totalType++;

        let newArticle = document.createElement("article");

        newArticle.innerHTML =
          `
        <div class="pokemon-card">
          <img src="${pokemon["img"]}"></img>
        </div>
        <div class="pokemon-name">
        <h3>${pokemon["name"]}</h3>
        </div>
        <div class="pokemon-info">
          <ul>
            <li>Tipo: ${pokemon["type"]}</li>
            <li>Altura: ${pokemon["height"]}</li>
            <li>Peso: ${pokemon["weight"]}</li>
            <li>Egg: ${pokemon["egg"]}</li>
            <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
            <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
            <li>Spawns time: ${pokemon["spawn_time"]}</li>
            <li>Fraquezas: ${pokemon["weaknesses"]}</li>
          </ul>
        </div>
      `
        srcResult.appendChild(newArticle);
      }
    })
  })

  let total = totalType;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`
  resultHeader.appendChild(newH);
}



function findWeakness() {
  let requiredWeakness = weaknessesMenu.value;
  let totalWeaknesses = 0;

  pokemons.forEach(function (pokemon) {
    pokemon.weaknesses.forEach(function (weaknesses) {
      if (weaknesses === requiredWeakness) {
        totalWeaknesses++;

        let newArticle = document.createElement("article");

        newArticle.innerHTML =
          `
        <div class="pokemon-card">
          <img src="${pokemon["img"]}"></img>
        </div>
        <div class="pokemon-name">
        <h3>${pokemon["name"]}</h3>
        </div>
        <div class="pokemon-info">
          <ul>
            <li>Tipo: ${pokemon["type"]}</li>
            <li>Altura: ${pokemon["height"]}</li>
            <li>Peso: ${pokemon["weight"]}</li>
            <li>Egg: ${pokemon["egg"]}</li>
            <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
            <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
            <li>Spawns time: ${pokemon["spawn_time"]}</li>
            <li>Fraquezas: ${pokemon["weaknesses"]}</li>
          </ul>
        </div>
        `
        srcResult.appendChild(newArticle);
      }
    })
  })
  let total = totalWeaknesses;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`
  resultHeader.appendChild(newH);
}

function findName() {
  let requiredName = srcBar.value;
  let names = pokemons.map((pokemon) => pokemon.name);
  let match = names.filter((name) => name.toUpperCase() === requiredName.toUpperCase());

  if (match.length !== 0) {
    for (item of match) {
      pokemons.forEach(function(pokemon) {
        if (pokemon.name === item) {
          let newArticle = document.createElement("article");

          newArticle.innerHTML =
            `
          <div class="pokemon-card">
            <img src="${pokemon["img"]}"></img>
          </div>
          <div class="pokemon-name">
          <h3>${pokemon["name"]}</h3>
          </div>
          <div class="pokemon-info">
            <ul>
              <li>Tipo: ${pokemon["type"]}</li>
              <li>Altura: ${pokemon["height"]}</li>
              <li>Peso: ${pokemon["weight"]}</li>
              <li>Egg: ${pokemon["egg"]}</li>
              <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
              <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
              <li>Spawns time: ${pokemon["spawn_time"]}</li>
              <li>Fraquezas: ${pokemon["weaknesses"]}</li>
            </ul>
          </div>
          `
          srcResult.appendChild(newArticle);
        }
      })
    }
  } else {
    let newArticle = document.createElement("article");
    newArticle.innerHTML = `<p>Ops! Não encontramos nenhum resultado...</p>`
    srcResult.appendChild(newArticle);
  }
}


srcBtn.addEventListener("click", () => {
  resultHeader.innerHTML = "";
  srcResult.innerHTML = "";
  selectedLetter.selectedIndex = "order";
  weaknessesMenu.value = "type";
  typeMenu.value = "type";
  findName()
});

returnHome.addEventListener("click", () => {
  resultHeader.innerHTML = "";
  srcResult.innerHTML = "";
  selectedLetter.selectedIndex = "order";
  weaknessesMenu.selectedIndex = "type";
  typeMenu.selectedIndex = "type";
  srcBar.value = "";
  showAllCards()
});

selectedLetter.addEventListener("change", () => {
  srcResult.innerHTML = "";
  resultHeader.innerHTML = "";
  weaknessesMenu.selectedIndex = "type";
  typeMenu.selectedIndex = "type";
  srcBar.value = "";
  filterFirstLetter()
});

typeMenu.addEventListener("change", () => {
  srcResult.innerHTML = "";
  resultHeader.innerHTML = "";
  selectedLetter.selectedIndex = "order";
  weaknessesMenu.selectedIndex = "type";
  srcBar.value = "";
  findType();
});

weaknessesMenu.addEventListener("change", () => {
  resultHeader.innerHTML = "";
  srcResult.innerHTML = "";
  selectedLetter.selectedIndex = "order";
  typeMenu.selectedIndex = "type";
  srcBar.value = "";
  findWeakness()
});