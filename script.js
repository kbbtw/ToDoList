const inputField = document.getElementById('enterField')
const taskListBox = document.getElementById('bigContainer')
const enterSection = document.getElementById('enter-section')
const enterBtn = document.getElementById('enterBtn')

enterBtn.addEventListener("click", function(){
    let newTask = document.createElement('li')
    newTask.innerText = inputField.value
    taskListBox.appendChild(newTask)

    let newhr = document.createElement('hr')
    newhr.classList.add('newhr')
    taskListBox.appendChild(newhr)
    
    let delBtn = document.createElement('button')
    newTask.append(delBtn)
    delBtn.innerText = "\u00d7"
    delBtn.classList.add('delBtn')
    
    inputField.value = ""
    

    console.log(newTask)
    
    delBtn.addEventListener("click", function(){
        newTask.remove()
        newhr.remove()
        localStorage.removeItem('data', newTask)

        
    })
})

