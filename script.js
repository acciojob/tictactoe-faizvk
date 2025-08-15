//your JS code here. If required.
let currentPlayer = "X";
let player1 = "";
let player2 = "";
let gameActive = true;
const cells = document.querySelectorAll(".cell");
const messageDiv = document.querySelector(".message");


document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    player1 = document.getElementById("player-1").value.trim();
    player2 = document.getElementById("player-2").value.trim();

    if (player1 && player2) {
        document.getElementById("tictactoe").style.display = "grid";
        messageDiv.textContent = `${player1}, you're up`;
    }
});

cells.forEach(cell => {
    cell.addEventListener("click", function () {
        if (!gameActive || cell.textContent) return;

        cell.textContent = currentPlayer;

        if (checkWin()) {
            const winnerName = currentPlayer === "X" ? player1 : player2;
            messageDiv.textContent = `${winnerName}, congratulations you won!`;
            gameActive = false;
        } else if (Array.from(cells).every(c => c.textContent)) {
            messageDiv.textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            const nextPlayerName = currentPlayer === "X" ? player1 : player2;
            messageDiv.textContent = `${nextPlayerName}, you're up`;
        }
    });
});

function checkWin() {
    const winPatterns = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return (
            document.getElementById(a).textContent &&
            document.getElementById(a).textContent === document.getElementById(b).textContent &&
            document.getElementById(a).textContent === document.getElementById(c).textContent
        );
    });
}

