document.addEventListener("DOMContentLoaded", function() {
  const holes = document.querySelectorAll(".hole");
  const scoreDisplay = document.getElementById("score-value");
  const timerDisplay = document.getElementById("timer-value");
  let score = 0;
  let time = 30;
  let isGameRunning = false;

  function startGame() {
    resetGame();
    isGameRunning = true;
    randomMole();
    setTimeout(stopGame, 30100); // 30 seconds, edit 10 secs now
    startTimer();
  }

  function resetGame() {
    score = 0;
    time = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = time;
  }
  
  // this make moles appear
  function randomMole() {
    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    randomHole.classList.add("mole");  
    setTimeout(() => {
      randomHole.classList.remove("mole");
      if (isGameRunning) {
          randomMole();
      }
    },
    // below 
    Math.random() * 2000 + 500); // Moles appear randomly between 0.5 to 2.5 seconds
  }
  
  function startTimer() {
    const timer = setInterval(() => {
      time--;
      timerDisplay.textContent = time;
      if (time <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
  
  function stopGame() {
    isGameRunning = false;
    alert("Game Over! Your score: " + score);
  }
  
  // removal of mole
  holes.forEach(function(hole) {
    hole.addEventListener("click", function() {
      if (isGameRunning && hole.classList.contains("mole")) {
        hole.classList.remove("mole");
        score++;
        scoreDisplay.textContent = score;
      }
    });
  });
  
  startGame();
  });