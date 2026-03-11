document.getElementById("lineupForm").addEventListener("submit", myLineUp);

function myLineUp(event) {

    // Prevents page reload
    event.preventDefault();

    // Pulls the data
    let status = document.querySelector('input[name="status"]:checked').value;
    let gameDate = document.getElementById("gameDate").value;
    let checkedPlayers = document.querySelectorAll('input[name="players"]:checked');
    let players = [];

    // Formats the Player data
    checkedPlayers.forEach(function(player) {
        players.push(player.value);
    });

    // Sets the output paragraph to the output values
    document.getElementById("output").textContent =
        "Status: " + status + ", Date: " + gameDate + ", Players: " + players.join(", ");
}