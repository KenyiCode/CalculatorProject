function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(op, a, b){
    switch (op){
        case "+": 
            return add(a, b);
            break;
        case "-":
            return sub(a, b);
            break;
        case "*":
            return mult(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return "Operator error";
            break;
    }
}

//Displays numbers clicked on screen
document.getElementById('button_layout').addEventListener('click', function(e){
    if (e.target && e.target.matches('.number')){
        if (calcInput.value == "0" || opBool){
            calcInput.value = e.target.textContent;
            console.log(calcInput.value);
            opBool = false;
        }
        else{
            calcInput.value += e.target.textContent;
        }
    }
});

//Function for operator choice
document.getElementById('button_layout').addEventListener('click', function(e){
    if (e.target && e.target.matches('.operator')){
        currentOp = e.target.textContent;
        console.log(currentOp);
        opBool = true;
    }
})

let opBool = false;
let tempValue = 0, operator = '';
let btnValues = [0,1,2,3,4,5,6,7,8,9];
let btnNumbers = document.getElementsByClassName("number");

//Operator buttons
let calcInput = document.getElementById("textField");
let operators = document.getElementsByClassName('operator');
let equals = document.getElementById('equal');
let currentOp = "";

//Event for clear button function
let clearBtn = document.getElementById("clear").addEventListener('click', function(){
    calcInput.value = '0';
})
