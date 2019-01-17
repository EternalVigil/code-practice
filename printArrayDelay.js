let testArray = [1, 2, 3, 4, 5];
let timer;
let i = 0;

function startTimer() {
    timer = setTimeout(printArray(testArray, i), 3000);
}

function printArray(array, index) {
    stopTimer();
    console.log(array, index);
    i++;
    startTimer();
}

function stopTimer() {
    clearTimeout(timer);
}

startTimer();