// window.onload = function() {
//   showAllCards();
// };

const resultAll = document.querySelector("#show-all-cards");
const searchResul = document.querySelector("#search-result");

const srcBar = document.querySelector("#src-bar");
const srcBtn = document.querySelector("#src-btn");

function getPokemons() {
  return POKEMON["pokemon"];
}


function showAllCards() {
  resultAll.innerHTML = `
  ${getPokemons().map((pokemon) => `
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



function findType(requiredType) {
  for (pokemon of POKEMON["pokemon"]) {
    for (pokeType of pokemon["type"]) {
      if (requiredType.toUpperCase() === pokeType.toUpperCase()) {
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
        searchResul.appendChild(newArticle);  
      }
    }
  }
}

findType("Grass")


function findWeakness(requiredWeakness) {
  for (pokemon of POKEMON["pokemon"]) {
    for (pokeWeakness of pokemon["weaknesses"]) {
      if (requiredWeakness.toUpperCase() === pokeWeakness.toUpperCase()) {
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
        searchResul.appendChild(newArticle); 

      }
    }
  }
}

// findWeakness("Fire");

function findName() {
  let requiredName = srcBar.value;

  for (pokemon of POKEMON["pokemon"]) {
    let pokeName = pokemon["name"];
    if (requiredName.toUpperCase() === pokeName.toUpperCase()) {
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
      searchResul.appendChild(newArticle); 
    }
  }
  
  // newLi.textContent = ":/ Pokemon não encontrado...";
  
  
}

srcBtn.addEventListener("click", findName);