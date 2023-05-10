let buttonsList = Array.from(document.querySelectorAll('button'));
buttonsList.splice(0,2);

let allClearButton = document.querySelector('.ac-operation');
let deleteButton = document.querySelector('.delete-operation');

buttonsList.forEach(element => {element.addEventListener("click", () => {
    if (document.querySelector('.display-text').textContent == 0) {
        document.querySelector('.display-text').textContent = '';
    }
    document.querySelector('.display-text').textContent += element.textContent; 
    }
)});

deleteButton.addEventListener('click', () => {
    if (document.querySelector('.display-text').textContent == 0) {
        return;
    }
    document.querySelector('.display-text').textContent = document.querySelector('.display-text').textContent.slice(0, -1);
})
    
allClearButton.addEventListener('click', () => {
    document.querySelector('.display-text').textContent = 0;
})