// Currency inputs
const inputs = document.querySelectorAll('input');

// Clear button
const clearBtn = document.querySelector('#clear-btn');

// Currency conversions from USD
const USDto = {
    'usd': 1,
    'eur': 0.874857,
    'gbp': 0.794519,
    'jpy': 107.118987,
    'aud': 1.429565,
    'cad': 1.352531,
    'chf': 0.944527,
    'cnh': 6.994215,
    'sek': 9.054072,
    'nzd': 1.525687,
    'inr': 75.168975,
    'sgd': 1.391400,
    'myr': 4.268514
}

// Add input (change) listeners
inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        inputs.forEach(otherInput => {
            if (otherInput !== input) {
                otherInput.value = currencyChange(input.value, input.id, otherInput.id);
            }
        });
    });
});

// Clear button listener
clearBtn.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = '';
    });
});

// Currency change (fromCurrency -> USD -> toCurrency)
function currencyChange(input, fromCurrency, toCurrency) {
    value = parseFloat(input);
    conversion = value * (1 / USDto[fromCurrency]) * USDto[toCurrency];
    return conversion.toFixed(3);
}