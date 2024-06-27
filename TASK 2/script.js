// script.js

let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let lapList = [];
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapListElement = document.getElementById('lap-list');

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', addLap);

function startStopwatch() {
    if (!isRunning) {
        intervalId = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes >= 60) {
                hours++;
                minutes = 0;
            }
            displayTime();
        }, 1000);
        isRunning = true;
        startBtn.disabled = true;
        pauseBtn.disabled = false;
    }
}

function pauseStopwatch() {
    clearInterval(intervalId);
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetStopwatch() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    lapList = [];
    displayTime();
    lapListElement.innerHTML = '';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    isRunning = false;
}

function addLap() {
    const lapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    lapList.push(lapTime);
    const lapListItem = document.createElement('li');
    lapListItem.textContent = lapTime;
    lapListElement.appendChild(lapListItem);
}

function displayTime() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}