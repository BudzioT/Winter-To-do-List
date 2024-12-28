let button = document.getElementById("add-task");
const initialTasks = 4;
let tasks = initialTasks;
let newTasksList = [];
let newTask = document.getElementById("task-name");

function checkTasksStatus() {
    const checkboxes = document.querySelectorAll(".tasks input[type='checkbox']");
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    document.getElementById("good").style.display = allChecked ? "block" : "none";
    document.getElementById("bad").style.display = allChecked ? "none" : "block";
}

button.onclick = () => {
    if (newTask.value !== '') {
        ++tasks;
        newTasksList.push(newTask.value);
        document.getElementById("tasks").innerHTML +=
            "<div><input id='task" + tasks + "' type='checkbox' /><label for='task" + tasks + "'>" + newTasksList[tasks - initialTasks - 1] + "</label></div>";

        document.querySelectorAll(".tasks input[type='checkbox']").forEach(checkbox => {
            checkbox.addEventListener("change", function() {
                const label = this.nextElementSibling;
                if (this.checked) {
                    label.classList.add("strikethrough");
                }
                else {
                    label.classList.remove("strikethrough");
                }

                checkTasksStatus()
            });
        });
    }
}

document.querySelectorAll(".tasks input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", function() {
        const label = this.nextElementSibling;
        if (this.checked) {
            label.classList.add("strikethrough");
        }
        else {
            label.classList.remove("strikethrough");
        }

        checkTasksStatus();
    });
});

for (let i = 0; i < 40; i++) {
    let snowflake = document.createElement("div")
    snowflake.classList.add("snowflake")
    snowflake.innerHTML += "❅";

    snowflake.style.setProperty("--random-x", Math.random());
    snowflake.style.setProperty("--random-duration", Math.random());
    snowflake.style.setProperty("--random-delay", Math.random());

    document.body.appendChild(snowflake);
}