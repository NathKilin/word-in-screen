const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game settings
const boxSize = 20; // Size of each square
// Initialize the snake 🐍
let snake = [{ x: 200, y: 200 }];
let direction = "RIGHT"; // Initial direction

// Game loop 🔄
function gameLoop() {
    updateSnake();
    renderGame();
}

setInterval(gameLoop, 100); // Update game every 100ms
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

function updateSnake() {
    let head = { ...snake[0] }; // Copy the head of the snake

    // Update head position based on direction
    if (direction === "UP") head.y -= boxSize;
    if (direction === "DOWN") head.y += boxSize;
    if (direction === "LEFT") head.x -= boxSize;
    if (direction === "RIGHT") head.x += boxSize;

    snake.unshift(head); // Add the new head to the snake
    snake.pop(); // Remove the last part of the snake
}
let food = generateFood();

function generateFood() {
    return {
        x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize,
        y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize,
    };
}

function renderGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Draw the snake 🐍
    snake.forEach(part => {
        ctx.fillStyle = "green";
        ctx.fillRect(part.x, part.y, boxSize, boxSize);
    });

    // Draw the food 🍎
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, boxSize, boxSize);
}

function checkCollisions() {
    const head = snake[0];

    // Check collision with walls
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        alert("Game Over!");
        location.reload();
    }

    // Check collision with itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            alert("Game Over!");
            location.reload();
        }
    }
}
