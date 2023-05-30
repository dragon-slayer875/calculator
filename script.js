let numberButtonsList = Array.from(document.querySelectorAll('.number'));
let operationButtonList = Array.from(document.querySelectorAll('.math-operation'));

let allClearButton = document.querySelector('.ac-operation');
let deleteButton = document.querySelector('.delete-operation');

numberButtonsList.forEach(element => {element.addEventListener("click", () => {
    if (document.querySelector('.display-text').textContent == 0) {
        document.querySelector('.display-text').textContent = '';
    }
    /[-*+\/%]/.test(document.querySelector('.display-text').textContent.slice(-1))? 
    document.querySelector('.display-text').textContent += ' ' + element.textContent: 
    document.querySelector('.display-text').textContent += element.textContent;
    }
)});

operationButtonList.forEach(element => {
    element.addEventListener("click", () => {
        /[-*+\/%]/.test(document.querySelector('.display-text').textContent.slice(-1))?
        document.querySelector('.display-text').textContent += '':
        document.querySelector('.display-text').textContent += ' ' + element.textContent; 
        }
)});

deleteButton.addEventListener('click', () => {
    if (document.querySelector('.display-text').textContent.length == 1) {
        document.querySelector('.display-text').textContent = 0;
    }
    if (document.querySelector('.display-text').textContent == 0) {
        return;
    }
    document.querySelector('.display-text').textContent = document.querySelector('.display-text').textContent.slice(0, -1);
})
    
allClearButton.addEventListener('click', () => {
    document.querySelector('.display-text').textContent = 0;
})