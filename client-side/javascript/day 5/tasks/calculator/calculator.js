let answer = document.getElementById('Answer')
let equalBtn = document.querySelector("[value = '=']")
let currentInput = ''

function EnterNumber(value) {
    currentInput += value
    answer.value = currentInput
}

function EnterOperator(operator) {
    currentInput += operator
    answer.value = currentInput
}


function EnterEqual() {
    var result = eval(answer.value)
    currentInput = result

    if (!isFinite(result)) {
        currentInput = "Error"
    }

    answer.value = currentInput
    result = 0
    currentInput = ""
}

function EnterClear()  {
    answer.value = ''
}

