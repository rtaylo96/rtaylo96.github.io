const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')

const createResultString = (key, displayedNum, state) => {
    const keyContent = key.textContent
    const keyType = getKeyType(key)
    const action = key.dataset.action
    const firstValue = state.firstValue
    const modValue = state.modValue
    const operator = state.operator
    const previousKeyType = state.previousKeyType

    if (keyType === 'number') {
        return displayedNum === '0' ||
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
        ? keyContent
        : displayedNum + keyContent;
    }

    if (keyType === 'decimal') {
        if (!displayedNum.includes('.')) return displayedNum + '.'
        if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
        return displayedNum
    }

    if (keyType === 'operator') {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        
        return firstValue &&
            operator &&
            previousKeyType !== 'operator' &&
            previousKeyType !== 'calculate'
            ? calculate(firstValue, operator, displayedNum)
            : displayedNum
    }

    if (keyType === 'clear') return 0

    if (keyType === 'calculate') {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const modValue = calculator.dataset.modValue
        
        return firstValue
            ? previousKeyType === 'calculate'
                ? calculate(displayedNum, operator, modValue)
                : calculate(firstValue, operator, displayedNum)
            : displayedNum
    }
}

const getKeyType = (key) => {
    const  { action } = key.dataset
    if (!action) return 'number'
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) return 'operator'
    // For everything else, return the action
    return action
}

const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
    const keyType = getKeyType(key)
    calculator.dataset.previousKeyType = keyType
    
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

    if (keyType === 'operator') {
        key.classList.add('is-depressed')
        calculator.dataset.operator = key.dataset.action
        calculator.dataset.firstValue = firstValue &&
            operator &&
            previousKeyType !== 'operator' &&
            previousKeyType !== 'calculate'
            ? calculatedValue
            : displayedNum
    }

    if (action === 'clear') {
        if (key.textContent === 'AC'){
            calculator.dataset.firstValue = ''
            calculator.dataset.modValue = ''
            calculator.dataset.operator = ''
            calculator.dataset.previousKeyType = ''
        } else {
            key.textContent = 'AC'
        }
    }

    if (action !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]')
        clearButton.textContent = 'CE'
    }

    if (keyType === 'calculate') {
        calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
            ? modValue
            : displayedNum
    }
}
keys.addEventListener('click', e =>{
    if(e.target.matches('button')) return 
    
    const key = e.target
    const displayedNum = display.textContent

    // Pure functions
    const resultString = createResultString(key, displayedNum, calculator.dataset)

    // Update states
    display.textContent = resultString

    // Pass in necessary values
    updateCalculatorState(key, calculator, resultString, displayedNum)
});

const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);

    if (operator === 'add') return firstNum + secondNum;
    if (operator === 'subtract') return firstNum - secondNum;
    if (operator === 'multiply') return firstNum * secondNum;
    if (operator === 'divide') return firstNum / secondNum;
}