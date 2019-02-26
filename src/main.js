const resultOne = document.querySelector('#result-one');
const resultTwo = document.querySelector('#result-two');
const resultThree = document.querySelector('#result-three');

const srcBar = document.querySelector('#src-bar');
const srcBtn = document.querySelector('#src-btn');

function findType(requiredType) {
  for (pokemon of POKEMON['pokemon']) {
    for (pokeType of pokemon['type']) {
      if (requiredType.toUpperCase() === pokeType.toUpperCase()) {
        let newLi = document.createElement('li');
        newLi.textContent = pokemon['name'] + ' -> type: ' + pokemon['type'];
        
        resultOne.appendChild(newLi);  
      }
    }
  }
}

findType('Grass')


function findWeakness(requiredWeakness) {
  for (pokemon of POKEMON['pokemon']) {
    for (pokeWeakness of pokemon['weaknesses']) {
      if (requiredWeakness.toUpperCase() === pokeWeakness.toUpperCase()) {
        let newLi = document.createElement('li');
        newLi.textContent = pokemon['name'] + ' -> weakenesses: ' + pokemon['weaknesses'];
        
        resultTwo.appendChild(newLi);  
      }
    }
  }
}

findWeakness('Fire');


function findName() {
  let requiredName = srcBar.value;

  for (pokemon of POKEMON['pokemon']) {
    let pokeName = pokemon['name'];
    if (requiredName.toUpperCase() === pokeName.toUpperCase()) {
      let newLi = document.createElement('li');
      newLi.textContent = pokemon['name'];
      
      resultThree.appendChild(newLi);  
    }
  }
  // let newLi = document.createElement('li');
  // newLi.textContent = ':/ Pokemon não encontrado...';
  
  // resultThree.appendChild(newLi);  
}

srcBtn.addEventListener('click', findName);