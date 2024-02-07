import * as audio from './audio.js'

let originalSeconds = 25 * 60; // 25 minutos em segundos
let seconds = originalSeconds;
let timerInterval;

// Função para formatar o tempo em MM:SS
function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  minutes = String(minutes).padStart(2, '0');
  remainingSeconds = String(remainingSeconds).padStart(2, '0');

  return `${minutes}:${remainingSeconds}`;
}

// Função para atualizar o timer a cada segundo
function updateTimer() {
  seconds--;
  if (seconds < 0) {
    clearInterval(timerInterval);
    alert("HORA DA PAUSA!!");
    return;
  }
  timerElement.textContent = formatTime(seconds);
}

const timerElement = document.getElementById('timer');
timerElement.textContent = formatTime(seconds);

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function() {
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
});

const stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', function() {
  clearInterval(timerInterval);
  seconds = originalSeconds;
  timerElement.textContent = formatTime(seconds);
  startButton.disabled = false;
});

const plusFiveButton = document.getElementById('plusFive');
plusFiveButton.addEventListener('click', function() {
  seconds += 5 * 60; // Adiciona 5 minutos
  timerElement.textContent = formatTime(seconds);
});

const minusFiveButton = document.getElementById('minusFive');
minusFiveButton.addEventListener('click', function() {
  if (seconds >= 5 * 60) { // Garante que o tempo não seja negativo
    seconds -= 5 * 60; // Subtrai 5 minutos
    timerElement.textContent = formatTime(seconds);
  }
});