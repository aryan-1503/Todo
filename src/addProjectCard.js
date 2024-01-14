export default function createProjectCard(buttonsArray){
    const customProjects = document.querySelector('.custom-projects')
    const addProjectButton = document.getElementById('add-project-button')
    const projectCard = document.getElementById('add-project-card');
    const projectCardDiv = document.createElement('div')
    projectCardDiv.classList.add('project-card');
    const inputDiv = document.createElement('div')
    const pName = document.createElement('input')
    pName.type = "text"
    pName.id = "p-name"
    pName.placeholder = "Project Name"

    inputDiv.append(pName)

    const buttonsDiv = document.createElement('div')
    const addButton = document.createElement('input')
    addButton.type = "button"
    addButton.value = "Add"

    const cancelButton = document.createElement('button')
    cancelButton.id = 'project-cancel-btn'
    cancelButton.innerHTML = 'Cancel'

    buttonsDiv.append(addButton,cancelButton)

    projectCardDiv.append(inputDiv,buttonsDiv)


    projectCard.append(projectCardDiv)
    addButton.addEventListener('click',() => {
        const projects = document.getElementById('add-project')

        const project = document.createElement('button')
        project.innerHTML = pName.value
        projects.append(project)
        buttonsArray.push(pName.value)
        localStorage.setItem('buttons', buttonsArray);

        projectCardDiv.remove()
        customProjects.append(addProjectButton)

    })
    cancelButton.addEventListener('click',()=>{
        projectCardDiv.remove()
        customProjects.append(addProjectButton)

    })
    return projectCard
}


