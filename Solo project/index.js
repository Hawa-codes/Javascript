let input = document.getElementById("input-btn")
let btn = document.getElementById("btn")
let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")

btn.addEventListener("click", function() {
    const value = Number(input.value)

    answer1.textContent = `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`;
    answer2.textContent = `${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`;
    answer3.textContent = `${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilos`;
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallons
1 kilogram = 2.204 pounds 
*/
