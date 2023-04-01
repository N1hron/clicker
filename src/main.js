import './style.scss';

const startButton = document.querySelector('.clicker__btn-start'),
      timerField = document.querySelector('.clicker__timer'),
      zone = document.querySelector('.clicker__zone'),
      scoreField = document.querySelector('.clicker__score'),
      resultTime = document.querySelector('.statistics__time'),
      resultScore = document.querySelector('.statistics__score'),
      resultCPS = document.querySelector('.statistics__cps'),
      liveCps = document.querySelector('.clicker__cps'),
      target = createTarget();

const data = {
    startTime: 60000,
    current: 0,
    passed: 0,
    minutesLeft: 0,
    secondsLeft: 0,
    minutesPassed: 0,
    secondsPassed: 0,
    onlySeconds: 0,
    left: 0,
    score: 0,
    intervalId: null,
    intervalCpsId: null,
    clicksPerSecond: 0
}

zone.appendChild(target);

updateTimer(data.startTime);

zone.addEventListener('click', (event) => {
    if (event.target == target) {
        if (data.intervalId) {
            increaseScore(1)
            relocateTarget(target);
        }
    } else {
        if (data.intervalId) {
            increaseScore(-1)
        }
    }
});

startButton.addEventListener('click', () => {
    if (data.intervalId) {
        onStop();
    } else {
        onStart();
    }
});

// Functions

function setResults() {
    resultTime.textContent = `${data.minutesPassed}:${data.secondsPassed}`;
    resultScore.textContent = data.score;
    resultCPS.textContent = data.clicksPerSecond;
}

function onStop() {
    calcClicksPerSecond();
    setResults();
    clearInterval(data.intervalId);
    data.intervalId = null;
    clearInterval(data.intervalCpsId);
    data.intervalCpsId = null;
    target.style.display = 'none';
    startButton.textContent = 'START';
    resetScore();
    resetCps();
    updateTimer(data.startTime);
}

function onStart() {
    initTimer();
    relocateTarget();
    target.style.display = 'block';
    startButton.textContent = 'STOP';
}

function initTimer() {
    const start = Date.parse(new Date());

    data.intervalCpsId = setInterval(() => {
        calcClicksPerSecond();
        liveCps.textContent = 'CPS: ' + data.clicksPerSecond;
    }, 100)
    
    data.intervalId = setInterval(() => {
        data.current = Date.parse(new Date());
        data.passed = data.current - start;
        data.left = data.startTime - data.passed;
        data.onlySeconds = (Math.floor(data.passed  / 1000));

        data.minutesPassed = insertZeros(Math.floor(data.passed / 60000));
        data.secondsPassed = insertZeros(Math.floor((data.passed % 60000) / 1000));

        if (data.passed === data.startTime) {
            onStop();
        }

        updateTimer(data.left);
    }, 1000)
}

function calcClicksPerSecond() {
    if (data.onlySeconds != 0) {
        data.clicksPerSecond = (data.score / data.onlySeconds).toFixed(2);
    } else {
        data.clicksPerSecond = '0.00';
    }
}

function updateTimer(milliseconds) {
    data.minutesLeft = insertZeros(Math.floor(milliseconds / 60000));
    data.secondsLeft = insertZeros(Math.floor((milliseconds % 60000) / 1000));
    timerField.textContent = `${data.minutesLeft} : ${data.secondsLeft}`;
}

function resetCps() {
    data.clicksPerSecond = '0.00';
    liveCps.textContent = 'CPS: ' + data.clicksPerSecond;
}

function resetScore() {
    data.score = 0;
    scoreField.textContent = 'SCORE: ' + data.score;
}

function increaseScore(num) {
    data.score += num;
    scoreField.textContent = 'SCORE: ' + data.score;
}

function relocateTarget() {
    target.style.left = generateCoordinate();
    target.style.bottom = generateCoordinate();
}

function generateCoordinate() {
    return (Math.floor(Math.random() * (497 - 15) + 15) - 15) + 'px';
}

function insertZeros(time) {
    return (time+'').length < 2 ? '0' + time : time;
}

function createTarget() {
    const target = document.createElement('div');
    target.classList.add('target');
    target.style.display = 'none';
    return target;
}
