function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function clearEntry() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === '.' && display.innerText.includes('.')) {
        return;
    }
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    display.innerText = Math.sqrt(parseFloat(display.innerText));
}

function calculateSquare() {
    const display = document.getElementById('display');
    display.innerText = Math.pow(parseFloat(display.innerText), 2);
}

function calculatePercentage() {
    const display = document.getElementById('display');
    display.innerText = parseFloat(display.innerText) / 100;
}

function calculateReciprocal() {
    const display = document.getElementById('display');
    display.innerText = 1 / parseFloat(display.innerText);
}

function negateValue() {
    const display = document.getElementById('display');
    display.innerText = parseFloat(display.innerText) * -1;
}