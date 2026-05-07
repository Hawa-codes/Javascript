const clearBtn = document.getElementById("clear-btn");
const input = document.getElementById("input");
const addBtn = document.getElementById("addTask");
const shoppingList = document.getElementById("shopping-list");

addBtn.addEventListener("click", function () {
    const item = input.value.trim();

    if (item === "") {
        alert("Please enter the item")
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = item;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

     deleteBtn.classList.add("delete-btn");
    
    deleteBtn.addEventListener("click", function () {
        li.remove();
    })
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    shoppingList.appendChild(li);

    input.value = "";
    input.focus();

})

clearBtn.addEventListener("click", function () {
    shoppingList.innerHTML = "";
});

input.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        addBtn.click();
    }

});