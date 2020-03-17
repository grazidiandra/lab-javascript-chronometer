const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
  // printMilliseconds()
}

function printMinutes() {
  let minutes = chronometer.getMinutes()
  let twoDigitMin = chronometer.twoDigitsNumber(minutes)
  minDec.innerHTML = twoDigitMin[0];
  minUni.innerHTML = twoDigitMin[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds()
  let twoDigitSec = chronometer.twoDigitsNumber(seconds)
  secDec.innerHTML = twoDigitSec[0];
  secUni.innerHTML = twoDigitSec[1];
}

// // ==> BONUS
// function printMilliseconds() {
//   let milli = chronometer.getMillSeconds()
//   let twoDigitMilli = chronometer.twoDigitsNumber(milli);
//   console.log(milli)
//     milDec.innerHTML = twoDigitMilli[0]
//     milUni.innerHTML = twoDigitMilli[1]
// }

function printSplit() {
  let list = document.createElement('li');
  list.innerText = chronometer.splitClick();
  splits.appendChild(list);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.setAttribute("class", "btn stop");
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.setAttribute("class", "btn start")
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.setAttribute("class", "btn reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START"){
    chronometer.startClick()
    setStopBtn();
    setSplitBtn();
    anIntervalId = setInterval(function (){
        printTime()}, 10);
}
else if (btnLeft.innerHTML === "STOP"){
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
    clearInterval(anIntervalId);
}
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.className === "btn split") {
      chronometer.splitClick();
      printSplit();
  }
  else if (btnRight.className === "btn reset") {
    chronometer.resetClick();
      clearSplits();
      setResetBtn();
      printTime();
  }
});
