// JavaScript kodlarini shu yerga yozing
const canvasPlayer1 = document.getElementById('canvasPlayer1');
const canvasPlayer2 = document.getElementById('canvasPlayer2');
const contextPlayer1 = canvasPlayer1.getContext('2d');
const contextPlayer2 = canvasPlayer2.getContext('2d');
const readyPlayer1 = document.getElementById('readyPlayer1');
const readyPlayer2 = document.getElementById('readyPlayer2');
const startGameButton = document.getElementById('startGame');
const timeSelect = document.getElementById('timeSelect');

let isPlayer1Ready = false;
let isPlayer2Ready = false;
let drawingTime = 60; // Default drawing time in seconds

readyPlayer1.addEventListener('click', () => {
    isPlayer1Ready = true;
});

readyPlayer2.addEventListener('click', () => {
    isPlayer2Ready = true;
});

startGameButton.addEventListener('click', () => {
    if (isPlayer1Ready && isPlayer2Ready) {
        drawingTime = parseInt(timeSelect.value, 10);
        startGame(drawingTime);
    } else {
        alert('Both players must be ready to start the game.');
    }
});

function startGame(timeInSeconds) {
    let timeLeft = timeInSeconds;
    let interval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval);
            alert('Time\'s up!');
            return;
        }
        console.log(`${timeLeft} seconds remaining.`);
        timeLeft--;
    }, 1000);

    // Drawing functionality for both players
    drawCanvas(contextPlayer1, canvasPlayer1);
    drawCanvas(contextPlayer2, canvasPlayer2);
}

function drawCanvas(context, canvas) {
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.addEventListener('mouseout', () => {
        isDrawing = false;
    });
    // JavaScript kodlarini shu yerga yozing
// Pre-existing code...

const clearCanvasButton1 = document.createElement('button');
clearCanvasButton1.textContent = 'Clear Canvas';
document.querySelector('.player1').appendChild(clearCanvasButton1);

const clearCanvasButton2 = document.createElement('button');
clearCanvasButton2.textContent = 'Clear Canvas';
document.querySelector('.player2').appendChild(clearCanvasButton2);

clearCanvasButton1.addEventListener('click', () => {
    clearCanvas(contextPlayer1, canvasPlayer1);
});

clearCanvasButton2.addEventListener('click', () => {
    clearCanvas(contextPlayer2, canvasPlayer2);
});

function clearCanvas(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

}
