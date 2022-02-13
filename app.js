const display = document.querySelector('.display');
const count = document.querySelector('.count');
const reset = document.querySelector('.reset');

let add = 0

count.addEventListener('click', function () {
    add++
    if (add === 34) {
        add = 0
    }
    display.textContent = add
})

reset.addEventListener('click', function () {
    add = 0
    display.textContent = add
})