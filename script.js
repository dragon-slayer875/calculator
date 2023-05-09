let buttonsList = Array.from(document.querySelectorAll('button'));
buttonsList.splice(0,1);

let allClearButton = document.querySelector('.ac-operation');


function inputVal(element) {
    document.querySelector('.display-text').textContent += element.textContent; 
}



buttonsList.forEach(element => {element.addEventListener("click", () => {
    document.querySelector('.display-text').textContent += element.textContent; 
    }
)});
    
allClearButton.addEventListener('click', () => {
    document.querySelector('.display-text').textContent = 0;
})