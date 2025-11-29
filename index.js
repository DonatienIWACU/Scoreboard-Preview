let homeScore = 0;
let guestScore = 0;


const homeDisplay = document.getElementById("home-score");
const guestDisplay = document.getElementById("guest-score");


function addPoints(team, points) {
     if (team === "home") {
    homeScore += points;
    homeDisplay.textContent = homeScore;
  }else if (team === "guest") {
    guestScore += points;
    guestDisplay.textContent = guestScore;
  }
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  homeDisplay.textContent = homeScore;
  guestDisplay.textContent = guestScore;
}


