function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function resetScore() {
    score = 0;
    console.log(`Score reset`);
  }

  function getScore() {
    return score;
  }

  return {
    increaseScore,
    decreaseScore,
    resetScore,
    getScore,
  };
}

// Game logic
const game = createGame();

const countLabel = document.getElementById("countLabel");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateScoreDisplay() {
  countLabel.textContent = game.getScore();
}

increaseBtn.addEventListener("click", () => {
  game.increaseScore(1);
  updateScoreDisplay();
});

decreaseBtn.addEventListener("click", () => {
  game.decreaseScore(1);
  updateScoreDisplay();
});

resetBtn.addEventListener("click", () => {
  game.resetScore();
  updateScoreDisplay();
});

// Initialize score display
updateScoreDisplay();
