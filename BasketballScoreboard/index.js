let increase1 = document.getElementById("count")
let increase2 = document.getElementById("count")
let increase3 = document.getElementById("count")


let count = 0;
function increment1() {
    count += 1
    increase1.innerText = count
}

function increment2() {
    count += 2
    increase2.innerText = count
}

function increment3() {
    count += 3
    increase3.innerText = count
}