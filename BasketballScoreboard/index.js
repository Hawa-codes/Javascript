let homeCount = 0;
let guestCount = 0;

let homeDisplay = document.getElementById("count");
let guestDisplay = document.getElementById("countt");

function homeIncrement1() {
  homeCount += 1;
  homeDisplay.innerText = homeCount;
}

function homeIncrement2() {
  homeCount += 2;
  homeDisplay.innerText = homeCount;
}

function homeIncrement3() {
  homeCount += 3;
  homeDisplay.innerText = homeCount;
}

function guestIncrement1() {
  guestCount += 1;
  guestDisplay.innerText = guestCount;
}

function guestIncrement2() {
  guestCount += 2;
  guestDisplay.innerText = guestCount;
}

function guestIncrement3() {
  guestCount += 3;
  guestDisplay.innerText = guestCount;
}

let counter = document.getElementById("new");

function newGame() {
    document.getElementById("count").innerText = 0;
    document.getElementById("countt").innerText = 0;
}