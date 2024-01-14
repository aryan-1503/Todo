import createProjectCard from "./addProjectCard";
import createTaskCard from "./addTaskCard";

console.log("Todo List");
let tempArray = localStorage.getItem('buttons')
tempArray = tempArray.split(',')

let buttonsArray = Array.from(tempArray)


const addProjectButton = document.getElementById("add-project-button");
const addTaskButton = document.getElementById('add-task')

addProjectButton.addEventListener("click", () => {
    createProjectCard(buttonsArray);
    addProjectButton.remove();
});


addTaskButton.addEventListener('click',() => {
    console.log('add task button clicked')
    createTaskCard();
    addTaskButton.remove();
})



document.addEventListener('DOMContentLoaded', () => {
    let buttonsArray = localStorage.getItem('buttons');
    if (buttonsArray) {
        buttonsArray = buttonsArray.split(',');
        buttonsArray.forEach((projectName) => {
            const projects = document.getElementById('add-project');
            const project = document.createElement('button');
            project.innerHTML = projectName;
            projects.append(project);
        });
    }
});


