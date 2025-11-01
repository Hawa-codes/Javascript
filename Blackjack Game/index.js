let firstCard = 11;
let seconCard = 10;
let sum = firstCard + seconCard;
let hasBlackJack = false;

let isAlive = true;

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack")
    hasBlackJack = true;
} else {
    console.log("You're out of the game!")
    isAlive = false;
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