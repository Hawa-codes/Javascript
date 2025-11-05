let fighter = ["🧶", "🐥", "🐻‍❄️", "🦁", "🐌", "🐫", "🐊", "🐟", "🍀", "🐲", "🦔", "🐉", "🌞", "🐘", "🐦‍⬛", "🐛", "🪱", "🦐", "🐢", "🦀"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let randomIndexOne = Math.floor(Math.random() * fighter.length)
    let randomIndexTwo = Math.floor(Math.random() * fighter.length) 
    stageEl.textContent = fighter[randomIndexOne] + " vs " + fighter[randomIndexTwo]
})