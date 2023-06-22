document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.getElementById("game-board");
    const avatar = document.getElementById("avatar");
    let score = 0;

    // Function to create a gem at a random position on the game board
    function createGem() {
        const gem = document.createElement("div");
        gem.className = "gem";

        // Generate random position
        const xPos = Math.floor(Math.random() * (gameBoard.clientWidth - gem.clientWidth));
        const yPos = Math.floor(Math.random() * (gameBoard.clientHeight - gem.clientHeight));
        gem.style.left = xPos + "px";
        gem.style.top = yPos + "px";

        // Increment score on gem click and remove gem
        gem.addEventListener("click", function() {
            score++;
            updateScore();
            gem.remove();
        });

        gameBoard.appendChild(gem);
    }

    // Function to update the score on the page
    function updateScore() {
        const scoreElement = document.getElementById("score");
        scoreElement.innerText = "Score: " + score;
    }

    // Function to move the avatar
    function moveAvatar(direction) {
        const avatarRect = avatar.getBoundingClientRect();
        const gameBoardRect = gameBoard.getBoundingClientRect();

        // Calculate new position based on the current position and direction
        let newLeft = avatarRect.left;
        let newTop = avatarRect.top;
        const step = 10;

        if (direction === "left" && avatarRect.left > gameBoardRect.left) {
            newLeft -= step;
        } else if (direction === "right" && avatarRect.right < gameBoardRect.right) {
            newLeft += step;
        } else if (direction === "up" && avatarRect.top > gameBoardRect.top) {
            newTop -= step;
        } else if (direction === "down" && avatarRect.bottom < gameBoardRect.bottom) {
            newTop += step;
        }

        // Move the avatar to the new position
        avatar.style.left = newLeft + "px";
        avatar.style.top = newTop + "px";
    }

    // Handle arrow key presses to move the avatar
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            moveAvatar("left");
        } else if (event.key === "ArrowRight") {
            moveAvatar("right");
        } else if (event.key === "ArrowUp") {
            moveAvatar("up");
        } else if (event.key === "ArrowDown")
