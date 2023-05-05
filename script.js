const stopwatch = document.querySelector('.stopwatch');
const timer = document.querySelector('h2');
const tracker = document.querySelector('#tracker');
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timeTracker = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(function() {
    milliseconds += 10;
    if (milliseconds === 1000) {
      seconds++;
      milliseconds = 0;
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    timer.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}:${milliseconds < 100 ? (milliseconds < 10 ? "00" : "0") + milliseconds : milliseconds}`;

    timeTracker += 10;
    tracker.textContent = `Time tracked: ${Math.floor(timeTracker / 60000) < 10 ? "0" + Math.floor(timeTracker / 60000) : Math.floor(timeTracker / 60000)}:${Math.floor((timeTracker % 60000) / 1000) < 10 ? "0" + Math.floor((timeTracker % 60000) / 1000) : Math.floor((timeTracker % 60000) / 1000)}:${timeTracker % 1000 < 100 ? (timeTracker % 1000 < 10 ? "00" : "0") + timeTracker % 1000 : timeTracker % 1000}`;
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  timeTracker = 0;
  timer.textContent = `00:00:00`;
  tracker.textContent = `Time tracked: 00:00:00`;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

