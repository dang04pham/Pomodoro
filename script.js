const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');

const startBtn = document.getElementById('startBtn')

let minutes = 24;
let seconds = 59;
let milliseconds = 0;
let interval; 

startBtn.addEventListener('click', startTimer);

function padTime(time){
    return time.toString().padStart(2, '0');
}
function displayTimer(){
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds--;
        if(seconds < 0){
            seconds = 59;
            minutes --;
        }
    }
    displayTimer();
}

function startTimer(){
    interval = setInterval(updateTimer, 10);
    if(minutes === 0 && seconds === 0){
        alert("Break time");
        clearInterval(interval);
    }
}