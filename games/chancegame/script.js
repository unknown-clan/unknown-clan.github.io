const dice = document.getElementById("dice");
const coin = document.getElementById("coin");

dice.addEventListener("click", function diceClick() {
  const diceNumber = Math.round(Math.random() * 5) + 1;

  dice.innerHTML = "";

  if (diceNumber == 1) {
    dice.style.backgroundImage = "url(pics/dice_1.png)";
  } else if (diceNumber == 2) {
    dice.style.backgroundImage = "url(pics/dice_2.png)";
  } else if (diceNumber == 3) {
    dice.style.backgroundImage = "url(pics/dice_3.png)";
  } else if (diceNumber == 4) {
    dice.style.backgroundImage = "url(pics/dice_4.png)";
  } else if (diceNumber == 5) {
    dice.style.backgroundImage = "url(pics/dice_5.png)";
  } else if (diceNumber == 6) {
    dice.style.backgroundImage = "url(pics/dice_6.png)";
  } else return;

  const diceAudio = new Audio("sounds/dice.mp3");
  diceAudio.volume = 0.5;
  diceAudio.play();

  runWiggle();
});

coin.addEventListener("click", function coinClick() {
  coin.innerHTML = "";

  const diceAudio = new Audio("sounds/coin.mp3");
  diceAudio.volume = 0.4;
  diceAudio.play();

  runFlip();
});

function runWiggle() {
  startWiggle();
  setTimeout(() => {
    endWiggle();
  }, 300);
}

function startWiggle() {
  dice.classList.add("wiggle");
}

function endWiggle() {
  dice.classList.remove("wiggle");
}

function runFlip() {
  startFlip();
  setTimeout(() => {
    endFlip();

    const coinNumber = Math.round(Math.random() * 1);

    if (coinNumber == 0) {
      coin.style.backgroundImage = "url(pics/coin0.png)";
    }
    if (coinNumber == 1) {
      coin.style.backgroundImage = "url(pics/coin1.png)";
    }
  }, 300);
}

function startFlip() {
  coin.classList.add("flip");
}

function endFlip() {
  coin.classList.remove("flip");
}
