const input = document.getElementById("input");
const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;

    span.addEventListener("click", function () {
    span.classList.toggle("done");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    result.appendChild(li);

    input.value = "";
});