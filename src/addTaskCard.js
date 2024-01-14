export default function createTaskCard(){
    const taskCard = document.getElementById('task-card');
    const addTaskBtnDiv = document.getElementById('add-task-btn');
    const addTaskBtn = document.getElementById('add-task')
    // taskCard.style.display = 'block'

    const addTaskContainer = document.createElement('div')
    addTaskContainer.classList.add('add-task-container')

    const addTaskName = document.createElement('div')
    addTaskName.classList.add('add-task-name')

    const inputName = document.createElement('input')
    inputName.id = 'add-task-name'
    inputName.type = 'text'
    inputName.placeholder = 'Task Name'

    addTaskName.append(inputName)

    const addTaskDate = document.createElement('div')
    addTaskDate.classList.add('add-task-date')

    const inputDate = document.createElement('input')
    inputDate.id = 'add-task-date'
    inputDate.type = 'date'

    addTaskDate.append(inputDate)

    const buttonsDiv = document.createElement('div')
    const addButton = document.createElement('input')
    addButton.type = "button"
    addButton.value = "Add"

    const cancelButton = document.createElement('button')
    cancelButton.innerHTML = 'Cancel'



    buttonsDiv.append(addButton,cancelButton)

    addTaskContainer.append(addTaskName,addTaskDate,buttonsDiv)

    taskCard.append(addTaskContainer)

    cancelButton.addEventListener('click',() => {
        addTaskContainer.remove()
        addTaskBtnDiv.append(addTaskBtn)
    })

    return taskCard
}
