let firstCard = 11;
let seconCard = 15;
let sum = firstCard + seconCard;
let hasBlackJack = false;

let isAlive = true;
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')

function startGame() {
    if (sum <= 21) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + firstCard + " " + seconCard
}

// CASH OUT     
console.log(hasBlackJack)

// let age = 22;

// if (age < 21) {
//     console.log("You can not enter the nightclub")
// } else {
//     console.log("Welcome!")
// }

// let age = 100;

// if (age < 100) {
//     console.log("Not Eligible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the king")
// } else {
//     console.log("Not eligible, you've already gotten one")
// }

// let hasDiscountCode = true;

// function processOrder() {
//     if (hasDiscountCode) {
//         console.log("Discount applied to food order")
//     } else {
//         console.log("No disccount applied")
//     }
// } 