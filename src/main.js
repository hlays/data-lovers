window.onload = function() {
  showCards();
};

const result = document.querySelector("#result");

const srcBar = document.querySelector("#src-bar");
const srcBtn = document.querySelector("#src-btn");

function getPokemons() {
  return POKEMON["pokemon"];
}

function showCards() {
  result.innerHTML = `${getPokemons().map((pokemon) => `
    <div class="pokemon-card">
      <img src="${pokemon['img']}"></img>
    </div>
    <div class="pokemon-name">
    <h3>${pokemon["name"]}</h3>
    </div>
    <div class="pokemon-info">
      <ul>
        <li>Tipo: ${pokemon['type']}</li>
        <li>Altura: ${pokemon['height']}</li>
        <li>Peso: ${pokemon['weight']}</li>
        <li>Fraquezas: ${pokemon['weaknesses']}</li>
        <li>Evoluções: ${pokemon['next_exolution']}</li>
        <li>Egg: ${pokemon['egg']}</li>
        <li>Spaw chance: ${pokemon['spawn_chance']}</li>
        <li>AVG Spawns: ${pokemon['avg_spawns']}</li>
        <li>Spawns time: ${pokemon['spawn_time']}</li>
        <li>Multipliers: ${pokemon['multipliers']}</li>
      </ul>
    </div>
  `  
  ).join('')}`
}

function findType(requiredType) {
  for (pokemon of POKEMON["pokemon"]) {
    for (pokeType of pokemon["type"]) {
      if (requiredType.toUpperCase() === pokeType.toUpperCase()) {
        let newLi = document.createElement("li");
        newLi.textContent = pokemon["name"] + " -> type: " + pokemon["type"];
        
        resultOne.appendChild(newLi);  
      }
    }
  }
}

// findType("Grass")


function findWeakness(requiredWeakness) {
  for (pokemon of POKEMON["pokemon"]) {
    for (pokeWeakness of pokemon["weaknesses"]) {
      if (requiredWeakness.toUpperCase() === pokeWeakness.toUpperCase()) {
        let newLi = document.createElement("li");
        newLi.textContent = pokemon["name"] + " -> weakenesses: " + pokemon["weaknesses"];
        
        result.appendChild(newLi);  
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
      let newLi = document.createElement("li");
      newLi.textContent = pokemon["name"];
      
      result.appendChild(newLi);  
    }
  }
  // let newLi = document.createElement("li");
  // newLi.textContent = ":/ Pokemon não encontrado...";
  
  // resultThree.appendChild(newLi);  
}

srcBtn.addEventListener("click", findName);