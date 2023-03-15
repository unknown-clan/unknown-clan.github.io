const maxGames = 3;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomGame() {
  const selectedGame = randomIntFromInterval(1, maxGames);
  if (selectedGame == 1) {
    location.href = "../games/football";
  } else if (selectedGame == 2) {
    location.href = "../games/cookie";
  } else if (selectedGame == 3) {
    location.href = "../games/clickgame";
  } else alert("No game found!");
}
