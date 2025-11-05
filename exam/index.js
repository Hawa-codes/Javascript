let person = {
    name: "Hawa",
    age: 22,
    country: "nigeria"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country) 
}

logData()

let age = 22;

if (age < 6) {
    console.log("free")
} else if (age >= 6 && age <= 17) {
    console.log("Child discount")
}  else if (age >= 18 && age <= 26) {
    console.log("Student discount")
}  else if (age >= 27 && age <= 66) {
    console.log("Full Price")
} else {
    console.log("Senior citizen discount")
}

let largeCountries = [
    "China",
    "India",
    "USA",
    "Indonesia",
    "Pakistan"
]

for (let i = 0; i < largeCountries.length; i++) {
    console.log("-" + largeCountries[i])
}

largeCountries.pop()
largeCountries.push("Monaco", "Tuvalu")
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)

let dayOfMonth = 31
let weekDay ="Friday" 

if (weekDay === "Friday" && dayOfMonth === "13") {
    console.log("Trouble")
} else {
    console.log("Good")
}

let hands = ["rocks", "paper", "scissor"]

function getHand() {
    randomItem = Math.floor(Math.random() * 3) 
    return hands[randomItem]
}

console.log( getHand())