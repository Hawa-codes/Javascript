let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;

let isAlive = true;
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')

function startGame() {
    renderGame()
}

function renderGame() {
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
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
}

function newCard() {
    console.log("Draw a new card from the deck")
    let card = 6;
    sum += card;

    cards.push(card)
    console.log(cards)
    renderGame()
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
