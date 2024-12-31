let counter = 0;

const counterDisplay = document.getElementById('counter');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

function updateCounter() {
    counterDisplay.textContent = counter;
}

decrementButton.addEventListener('click', () => {
    counter--;
    updateCounter();
});

incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});
