document.addEventListener("DOMContentLoaded", function() {
  const holes = document.querySelectorAll(".hole");
  // this make an array of the holes
  const scoreDisplay = document.getElementById("score-value");
  const timerDisplay = document.getElementById("timer-value");
  const gameStartButton = document.getElementById("startGame");
  const gameStopButton = document.getElementById("stopGame");
  const mole = document.createElement("img");
  let gametimeout = 0;
  mole.setAttribute("src", "assets/green_bug.png");
  mole.id = "mole";

  // let gameArea = document.getElementById("game-area");
  let score = 0;
  let time = 30;
  let isGameRunning = false;

  function resetGame() {
    score = 0;
    time = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = time;
  }

  function stopGame() {
    // resetGame();
    clearTimeout(gametimeout);
    isGameRunning = false;
    alert("Game Over! Your score: " + score + " | There is no level 2 yet!");
    gameStartButton.classList.remove("hidden");
    gameStopButton.classList.add("hidden");
  }

  // this make moles appear
  function randomMole() {
    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    // selecting the holes from an array, this method is scaleable
    randomHole.classList.add("mole");
    randomHole.appendChild(mole);
    // this set timeout makes it so the mole appears for a set period
    setTimeout(
        () => {
          randomHole.classList.remove("mole");
          if (randomHole.contains(mole)) {
            randomHole.removeChild(mole);
          }
          if (isGameRunning) {
            randomMole();
          // this recursive, triggers the mole to spawn again.
          }
        },
        // below defines the speed of the moles to disappear
        (Math.random() * 2000) + 500,
    ); // Moles appear randomly between 0.5 to 2.5 second
  }

  // make the timer go down, then stops it at 0
  function startTimer() {
    const timer = setInterval(() => {
      time--;
      timerDisplay.textContent = time;
      if (time <= 0 || isGameRunning == false) {
        clearInterval(timer); // this is here to fix timer bug not resetting to 30
        // resetGame();
      }
    }, 1000);
  }

  function startGame() {
    resetGame();
    if (isGameRunning == false) {
      isGameRunning = true;
      randomMole();
      gametimeout = setTimeout(stopGame, 30100);
      // 30 seconds, the extra 100 value needed to make it hit 0
      startTimer();
    } else {
      alert("game is already running");
    }
  }

  // this function tracks mouse input to "whack" the "bug"
  holes.forEach(function(hole) {
    hole.addEventListener("mousedown", function() {
      if (isGameRunning && hole.classList.contains("mole")) {
        hole.classList.remove("mole");
        hole.removeChild(mole);
        score++;
        scoreDisplay.textContent = score;
      }
    });
  });


  // mole.addEventListener("mousedown", function() {
  //   console.log("click is woking");
  //   if (isGameRunning) {
  //     console.log("if statement is working");
  //     // const removeMole = randomHole.querySelector("img");
  //     randomHole.removeChild(removeMole);
  //     score++;
  //     scoreDisplay.textContent = score;
  //   }
  // });

  // a button to start the game
  gameStartButton.addEventListener("click", function() {
    startGame();
    gameStartButton.classList.add("hidden");
    gameStopButton.classList.remove("hidden");
  });

  // the button to force stop the game
  gameStopButton.addEventListener("click", function() {
    stopGame();
  });
});
