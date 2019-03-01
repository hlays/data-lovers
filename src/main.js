window.onload = function() {
  getPokemons();
};

const returnHome = document.querySelector("#return-home");
const typeMenu = document.querySelector("#type-menu");
const weaknessesMenu = document.querySelector("#weaknesses-menu");
const weaknessesBtn = document.querySelector("#weaknesses-btn");
const srcBar = document.querySelector("#src-bar");
const srcBtn = document.querySelector("#src-btn");

const resultAll = document.querySelector("#show-all-cards");
const searchResult = document.querySelector("#search-result");


function getPokemons() {
  return POKEMON["pokemon"];
}


function showAllCards() {
  resultAll.style.display = "block";
  searchResult.style.display = "none";

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



function findType() {
  let requiredType = typeMenu.value;
  searchResult.style.display = "block";
  
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
        searchResult.appendChild(newArticle);  
      }
    }
  }
}



function findWeakness() {
  let requiredWeakness = weaknessesMenu.value;
  searchResult.style.display = "block";
  resultAll.style.display = "none";
  
  for (pokemon of POKEMON["pokemon"]) {
    for (pokeWeakness of pokemon["weaknesses"]) {
      if (requiredWeakness.toUpperCase() == pokeWeakness.toUpperCase()) {
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
        searchResult.appendChild(newArticle); 

      }
    }
  }
}

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
      searchResult.appendChild(newArticle); 
    }
  }
  
  // newLi.textContent = ":/ Pokemon não encontrado...";
  
  
}

function clear() {
  searchResult.style.display = "none";
  resultAll.style.display = "none";
}

srcBtn.addEventListener("click", findName);
typeMenu.addEventListener("change", findType);
weaknessesMenu.addEventListener("change", findWeakness);
returnHome.addEventListener("click", showAllCards);