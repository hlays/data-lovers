const returnHome = document.querySelector('#return-home');
const sortMenu = document.querySelector('#sort-menu');
const letterMenu = document.querySelector('#selected-letter');
const typeMenu = document.querySelector('#type-menu');
const weaknessesMenu = document.querySelector('#weaknesses-menu');

const srcBar = document.querySelector('#src-bar');
const srcBtn = document.querySelector('#src-btn');

const resultHeader = document.querySelector('#result-header');
const resultInfo = document.querySelector('#result-info');
const srcResult = document.querySelector('#search-result');

const pokemons = POKEMON.pokemon.map((pokemon) => pokemon);

const postCards = (pokemon) => {
  const newArticle = document.createElement('article');

  newArticle.innerHTML = `
    <div class="pokemon-card">
      <img src="${pokemon['img']}"></img>
      <h3>${pokemon['name']}</h3>
      <ul class="info-list">
        <li>Tipo: ${pokemon['type']}</li>
        <li>Altura: ${pokemon['height']}</li>
        <li>Peso: ${pokemon['weight']}</li>
        <li>Egg: ${pokemon['egg']}</li>
        <li>Spaw chance: ${pokemon['spawn_chance']}</li>
        <li>AVG Spawns: ${pokemon['avg_spawns']}</li>
        <li>Spawns time: ${pokemon['spawn_time']}</li>
        <li>Fraquezas: ${pokemon['weaknesses']}</li>
      </ul>
    </div>`;

  srcResult.appendChild(newArticle);
}

const showAllCards = () => {
  resultHeader.textContent = 'Todos os pokemons:';

  pokemons.forEach((pokemon) => {
    postCards(pokemon);
  });
}

const findSort = () => {
  const sortPokemons = sortMenu.value;

  if (sortPokemons === 'az') {
    sortAZ();
  } else {
    sortZA();
  }
}

const sortAZ = () => {
  resultHeader.textContent = 'Pokemons ordenados de A a Z';

  const namesAZ = [...pokemons].sort((pokemonA, pokemonB) => {
    const nameA = pokemonA.name.toUpperCase();
    const nameB = pokemonB.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  namesAZ.forEach((pokemon) => {
    postCards(pokemon);
  });
  const total = 151;
  const newH = document.createElement('h1');
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons.`;
  resultInfo.appendChild(newH);
}

const sortZA = () => {
  resultHeader.textContent = 'Pokemons ordenados de Z a A';

  const namesAZ = [...pokemons].sort((pokemonA, pokemonB) => {
    const nameA = pokemonA.name.toUpperCase();
    const nameB = pokemonB.name.toUpperCase();
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  });

  namesAZ.forEach((pokemon) => {
    postCards(pokemon);
  });

  const total = 151;
  const newH = document.createElement('h1');
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons.`;
  resultInfo.appendChild(newH);
}

const filterFirstLetter = () => {
  const getFirstLetter = letterMenu.value;
  const totalFirstLetter = [];

  resultHeader.textContent = `Pokemons que começam com a letra ${getFirstLetter}`;

  pokemons.forEach((pokemon) => {
    if (pokemon.name[0] === getFirstLetter) {
      totalFirstLetter.push(pokemon.name);
      postCards(pokemon);
    }
  });

  const total = totalFirstLetter.length;
  const newH = document.createElement('h1');
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`;
  resultInfo.appendChild(newH);
}

const findType = () => {
  const requiredType = typeMenu.value;
  let totalType = 0;

  resultHeader.textContent = `Pokemons do tipo: ${requiredType}`;

  pokemons.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      if (type === requiredType) {
        totalType++;
        postCards(pokemon);
      }
    });
  });

  const total = totalType;
  const newH = document.createElement('h1');
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`;
  resultInfo.appendChild(newH);
}

const findWeakness = () => {
  const requiredWeakness = weaknessesMenu.value;
  let totalWeaknesses = 0;

  resultHeader.textContent = `Pokemons com fraqueza: ${requiredWeakness}`;

  pokemons.forEach((pokemon) => {
    pokemon.weaknesses.forEach((weaknesses) => {
      if (weaknesses === requiredWeakness) {
        totalWeaknesses++;
        postCards(pokemon);
      }
    });
  });
  const total = totalWeaknesses;
  const newH = document.createElement('h1');
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`;
  resultInfo.appendChild(newH);
}

const findName = () => {
  const requiredName = srcBar.value;

  resultHeader.textContent = `Pokemons com o nome ${requiredName.toUpperCase()}`;

  const names = pokemons.map((pokemon) => pokemon.name);
  const match = names.filter((name) => name.toUpperCase() === requiredName.toUpperCase());

  if (match.length !== 0) {
    for (let item of match) {
      pokemons.forEach((pokemon) => {
        if (pokemon.name === item) {
          postCards(pokemon);
        }
      });
    }
  } else {
    const newArticle = document.createElement('article');
    newArticle.innerHTML = '<p>Ops! Não encontramos nenhum resultado...</p>';
    srcResult.appendChild(newArticle);
  }
}


returnHome.addEventListener('click', () => {
  resultInfo.innerHTML = '';
  srcResult.innerHTML = '';
  sortMenu.selectedIndex = 'sort';
  letterMenu.selectedIndex = 'select-letter';
  weaknessesMenu.selectedIndex = 'type';
  typeMenu.selectedIndex = 'type';
  srcBar.value = '';
  showAllCards();
});

sortMenu.addEventListener('change', () => {
  resultInfo.innerHTML = '';
  srcResult.innerHTML = '';
  letterMenu.selectedIndex = 'select-letter';
  weaknessesMenu.selectedIndex = 'type';
  typeMenu.selectedIndex = 'type';
  srcBar.value = '';
  findSort();
});

letterMenu.addEventListener('change', () => {
  srcResult.innerHTML = '';
  resultInfo.innerHTML = '';
  sortMenu.selectedIndex = 'sort';
  weaknessesMenu.selectedIndex = 'type';
  typeMenu.selectedIndex = 'type';
  srcBar.value = '';
  filterFirstLetter();
});

typeMenu.addEventListener('change', () => {
  srcResult.innerHTML = '';
  resultInfo.innerHTML = '';
  sortMenu.selectedIndex = 'sort';
  letterMenu.selectedIndex = 'select-letter';
  weaknessesMenu.selectedIndex = 'type';
  srcBar.value = '';
  findType();
});

weaknessesMenu.addEventListener('change', () => {
  resultInfo.innerHTML = '';
  srcResult.innerHTML = '';
  sortMenu.selectedIndex = 'sort';
  letterMenu.selectedIndex = 'select-letter';
  typeMenu.selectedIndex = 'type';
  srcBar.value = '';
  findWeakness();
});

srcBtn.addEventListener('click', () => {
  resultInfo.innerHTML = '';
  srcResult.innerHTML = '';
  sortMenu.selectedIndex = 'sort';
  letterMenu.selectedIndex = 'select-letter';
  weaknessesMenu.value = 'type';
  typeMenu.value = 'type';
  findName();
});
