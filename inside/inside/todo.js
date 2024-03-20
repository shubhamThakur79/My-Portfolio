
const checkBoxList = document.querySelectorAll(".custom-checkbox")
const inputBox = document.querySelectorAll("input");
const err = document.querySelector(".error-label");
const progressValue = document.querySelector(".progress-value");
const progressBar = document.querySelector(".progress-bar");
let progressLabel= document.querySelector(".progress-label");

const allQuotes = [
    'Raise the bar by completing your goals! &#128513;',
    'well begun is half done!&#128512;',
    'just a step away, keep going! &#128517;',
    "Whoa! you just completed all the goals, times for chill &#128512;",
];


checkBoxList.forEach((checkBox) => {
    checkBox.addEventListener("click", (e) => {
        let inputchecker = [...inputBox].every((input) => {
            return input.value;
        })
        if (inputchecker) {

            checkBox.parentElement.classList.toggle("doneTask");

            const inputId = checkBox.nextElementSibling.id;

            allGoals[inputId].doneTask = !allGoals[inputId].doneTask;

            localStorage.setItem("allGoals", JSON.stringify(allGoals));

            let completedGoals = Object.values(allGoals).filter((goal) => goal.doneTask).length;

            progressValue.style.width = `${completedGoals / 3 * 100}%`;

            progressValue.firstElementChild.innerHTML = `${completedGoals}/3 Completed`;
           progressLabel.innerHTML = `${allQuotes[completedGoals]}`
        }
        else {
            err.style.display = "block";

        }


    })
})

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};
let completedGoals = Object.values(allGoals).filter((goal) => goal.doneTask).length;
progressValue.style.width = `${completedGoals / 3 * 100}%`;
progressValue.firstElementChild.innerHTML = `${completedGoals}/3 Completed`;
progressLabel.innerHTML = `${allQuotes[completedGoals]}`



inputBox.forEach((input) => {
    input.value = allGoals[input.id].name;

    if (allGoals[input.id].doneTask) {
        input.parentElement.classList.add("doneTask");


    }
    input.addEventListener("focus", () => {
        err.style.display = "none";
    })
    input.addEventListener("input", (e) => {
        if(allGoals[input.id].doneTask){
            input.value = allGoals[input.id].name;
           progressLabel.innerHTML = `${allQuotes[completedGoals]}`

            return;
        }
        
        allGoals[input.id] = {
            name: e.target.value,
            doneTask: false,
        }

        localStorage.setItem("allGoals", JSON.stringify(allGoals));

    })
})




