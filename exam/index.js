let box = document.getElementById("box")

box.innerHTML = "<button onclick = 'buy()'>Buy!</button>"


function buy() {
    box.innerHTML = "<p>Thanks for buying!</p>"
}