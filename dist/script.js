document.getElementById("lineupForm").addEventListener("submit", myLineUp);

function myLineUp(event) {
  event.preventDefault();

  let status = document.querySelector('input[name="status"]:checked').value;
  let gameDate = document.getElementById("gameDate").value;

  let checkedPlayers = document.querySelectorAll('input[name="players"]:checked');
  let players = [];

  checkedPlayers.forEach(function(player) {
    players.push(player.value);
  });

  console.log(status);
  console.log(gameDate);
  console.log(players);

  document.getElementById("output").textContent =
    "Status: " + status + ", Date: " + gameDate + ", Players: " + players.join(", ");
}