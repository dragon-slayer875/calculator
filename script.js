let numberButtonsList = Array.from(document.querySelectorAll('.number'));
let operationButtonList = Array.from(document.querySelectorAll('.math-operation'));
let result = '';
let allClearButton = document.querySelector('.ac-operation');
let deleteButton = document.querySelector('.delete-operation');
let evalButton = document.querySelector('.eval-operation');
let operations = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
    '%': function (x, y) { return x * y / 100 }
};


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
    /\s/.test(document.querySelector('.display-text').textContent.slice(-2))?
    document.querySelector('.display-text').textContent = document.querySelector('.display-text').textContent.slice(0, -2):
    document.querySelector('.display-text').textContent = document.querySelector('.display-text').textContent.slice(0, -1);    
})
    
allClearButton.addEventListener('click', () => {
    document.querySelector('.display-text').textContent = 0;
})

evalButton.addEventListener('click', () => {
    let operationStack = document.querySelector('.display-text').textContent.split(' ');
    for (let index = 0; index < operationStack.length; index++) {
        if (operationStack[index] in operations) {
            result = operations[operationStack[index]](new Number(operationStack[index-1]), new Number(operationStack[index+1]));
            operationStack.splice(0, 3, result);
            index-=1;
        }
    }
    document.querySelector('.display-text').textContent = result;
})

document.querySelector('body').addEventListener('keypress', (e) => {
    if (!(/[a-zA-Z\\=`,';\[\]]/.test(e.key))){
        if (document.querySelector('.display-text').textContent == 0) {
            document.querySelector('.display-text').textContent = '';
        }    
        if (/[-*+\/%]/.test(e.key)) {
            /[-*+\/%]/.test(document.querySelector('.display-text').textContent.slice(-1))?
            document.querySelector('.display-text').textContent += '':
            document.querySelector('.display-text').textContent += ' ' + e.key;
        } 
        else {
            if (e.key == '.') {
                if (document.querySelector('.display-text').textContent.indexOf('.') >= 0) {
                    return};
            } 
            /[-*+\/%]/.test(document.querySelector('.display-text').textContent.slice(-1))? 
            document.querySelector('.display-text').textContent += ' ' + e.key: 
            document.querySelector('.display-text').textContent += e.key;
        }}
       
    if (e.key == 'Enter') { 
        let operationStack = document.querySelector('.display-text').textContent.split(' ');
        for (let index = 0; index < operationStack.length; index++) {
            if (operationStack[index] in operations) {
                result = operations[operationStack[index]](new Number(operationStack[index-1]), new Number(operationStack[index+1]));
                operationStack.splice(0, 3, result);
                index-=1;
            }
        }
        document.querySelector('.display-text').textContent = result;
    }   
})

document.querySelector('body').addEventListener('keydown', (e) => {
    if (e.key == 'Backspace' || e.key == 'Delete') {
        if (document.querySelector('.display-text').textContent.length == 1) {
            document.querySelector('.display-text').textContent = 0;
        }
        if (document.querySelector('.display-text').textContent == 0) {
            return;
        }
        /\s/.test(document.querySelector('.display-text').textContent.slice(-2))?
        document.querySelector('.display-text').textContent = document.querySelector('.display-text').textContent.slice(0, -2):
        document.querySelector('.display-text').textContent = document.querySelector('.display-text').textContent.slice(0, -1);
    }  
})