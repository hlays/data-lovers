google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(donutChart);

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(barChart);

const pokemons = POKEMON.pokemon.map((pokemon) => pokemon);

const typeCount = (requiredType) => {
  let totalTypeCount = 0;
  pokemons.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      if (type === requiredType) {
        totalTypeCount++;
      }
    });
  });
  return totalTypeCount;
}

const weaknessesCount = (requiredWeaknesses) => {
  let totalWeaknesses = 0;
  pokemons.forEach((pokemon) => {
    pokemon.weaknesses.forEach((weaknesses) => {
      if (weaknesses === requiredWeaknesses) {
        totalWeaknesses++;
      }
    });
  });
  return totalWeaknesses;
}

const donutChart = () => {
  const data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Normal', typeCount('Normal')],
    ['Fogo', typeCount('Fire')],
    ['Água', typeCount('Water')],
    ['Elétrico', typeCount('Electric')],
    ['Grama', typeCount('Grass')],
    ['Gelo', typeCount('Ice')],
    ['Lutador', typeCount('Fighting')],
    ['Venenoso', typeCount('Poison')],
    ['Terra', typeCount('Ground')],
    ['Voador', typeCount('Flying')],
    ['Psiquico', typeCount('Psychic')],
    ['Inseto', typeCount('Bug')],
    ['Pedra', typeCount('Rock')],
    ['Fantasma', typeCount('Ghost')],
    ['Dragão', typeCount('Dragon')]
  ]);

  const options = {
    pieHole: 0.4,
    'width': 1000,
    'height': 600,
    backgroundColor: { fill: '#C6E9F0' },
  };

  const chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

const barChart = () => {
  const data = google.visualization.arrayToDataTable([
    ['Tipo', 'Quantidade', { role: 'style' }],
    ['Normal', weaknessesCount('Normal'), '#407F7F'],
    ['Fogo', weaknessesCount('Fire'), '#3AB795'],
    ['Água', weaknessesCount('Water'), '#20A4F3'],
    ['Elétrico', weaknessesCount('Electric'), '#E7FF51'],
    ['Grama', weaknessesCount('Grass'), '#3AB795'],
    ['Gelo', weaknessesCount('Ice'), '#16BAC5'],
    ['Lutador', weaknessesCount('Fighting'), '#C97C5D'],
    ['Venenoso', weaknessesCount('Poison'), '#5D2E8C'],
    ['Terra', weaknessesCount('Ground'), '#47271A'],
    ['Voador', weaknessesCount('Flying'), '#566FEA'],
    ['Psiquico', weaknessesCount('Psychic'), '#F79071'],
    ['Inseto', weaknessesCount('Bug'), '#002500'],
    ['Pedra', weaknessesCount('Rock'), '#8C9A9E'],
    ['Fantasma', weaknessesCount('Ghost'), '#E1BC29'],
    ['Dragão', weaknessesCount('Dragon'), 'B7245C']
  ]);

  const options = {
    legend: 'none',
    'width': 1000,
    'height': 500,
    backgroundColor: { fill: '#C6E9F0' },
  };

  const chart = new google.visualization.BarChart(document.getElementById('barchart'));
  chart.draw(data, options);
}
