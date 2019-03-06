google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(donutChart);

google.charts.load("current", {packages:["corechart", "bar"]});
google.charts.setOnLoadCallback(barChart);

let pokemons = POKEMON.pokemon.map((pokemon) => pokemon);

function typeCount(requiredType) {
  let totalTypeCount = 0;
  pokemons.forEach(function (pokemon) {
    pokemon.type.forEach(function (type) {
      if (type === requiredType) {
      totalTypeCount++;
      }
    })
  })
  return totalTypeCount;
}

function weaknessesCount(requiredWeaknesses) {
  let totalWeaknesses = 0;
  pokemons.forEach(function (pokemon) {
    pokemon.weaknesses.forEach(function (weaknesses) {
        if (weaknesses === requiredWeaknesses) {
        totalWeaknesses++;
        }
      })
    })
  return totalWeaknesses;
}

function donutChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Normal", typeCount("Normal")],
    ["Fogo", typeCount("Fire")],
    ["Água", typeCount("Water")],
    ["Elétrico", typeCount("Electric")],
    ["Grama", typeCount("Grass")],
    ["Gelo", typeCount("Ice")],
    ["Lutador", typeCount("Fighting")],
    ["Venenoso", typeCount("Poison")],
    ["Terra", typeCount("Ground")],
    ["Voador", typeCount("Flying")],
    ["Psiquico", typeCount("Psychic")],
    ["Inseto", typeCount("Bug")],
    ["Pedra", typeCount("Rock")],
    ["Fantasma", typeCount("Ghost")],
    ["Dragão", typeCount("Dragon")]
  ]);

  var options = {
    pieHole: 0.4,
    "width": 1000,
    "height": 600,
    backgroundColor: { fill:"#C6E9F0" },
  };

  var chart = new google.visualization.PieChart(document.getElementById("donutchart"));
  chart.draw(data, options);
}

function barChart() {
  var data = google.visualization.arrayToDataTable([
    ["Tipo", "Quantidade", { role: "style" }],
    ["Normal", weaknessesCount("Normal"), "#407F7F"],
    ["Fogo", weaknessesCount("Fire"), "#3AB795"],
    ["Água", weaknessesCount("Water"), "#20A4F3"],
    ["Elétrico", weaknessesCount("Electric"), "#E7FF51"],
    ["Grama", weaknessesCount("Grass"), "#3AB795"],
    ["Gelo", weaknessesCount("Ice"), "#16BAC5"],
    ["Lutador", weaknessesCount("Fighting"), "#C97C5D"],
    ["Venenoso", weaknessesCount("Poison"), "#5D2E8C"],
    ["Terra", weaknessesCount("Ground"), "#47271A"],
    ["Voador", weaknessesCount("Flying"), "#566FEA"],
    ["Psiquico", weaknessesCount("Psychic"), "#F79071"],
    ["Inseto", weaknessesCount("Bug"), "#002500"],
    ["Pedra", weaknessesCount("Rock"), "#8C9A9E"],
    ["Fantasma", weaknessesCount("Ghost"), "#E1BC29"],
    ["Dragão", weaknessesCount("Dragon"), "B7245C"]
  ]);

  var options = {
    legend: "none",
    "width": 1000,
    "height": 500,
    backgroundColor: { fill:"#C6E9F0" },
  };

  var chart = new google.visualization.BarChart(document.getElementById("barchart"));
  chart.draw(data, options);
};