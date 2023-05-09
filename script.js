let buttonsList = Array.from(document.querySelectorAll('button'));
buttonsList.splice(0,1);

let allClearButton = document.querySelector('.ac-operation');

buttonsList.forEach(element => {element.addEventListener("click", () => {
    if (document.querySelector('.display-text').textContent == 0) {
        document.querySelector('.display-text').textContent = '';
    }
    document.querySelector('.display-text').textContent += element.textContent; 
    }
)});
    
allClearButton.addEventListener('click', () => {
    document.querySelector('.display-text').textContent = 0;
})