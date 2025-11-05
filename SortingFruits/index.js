let fruits = ["🍎", "🍎", "🍊", "🍎", "🍊", "🍎"]
let apple = document.getElementById("apple-shelf")
let orange = document.getElementById("orange-shelf")

function sortFruit() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "🍎") {
            apple.textContent += "🍎"
        } else if (fruits[i] === "🍊") {
            orange.textContent += "🍊"
        }
    }
}

sortFruit()