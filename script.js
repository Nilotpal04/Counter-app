let counter = 0;

let count = document.getElementById("count");

let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let increaseBtn = document.getElementById("increase");

increaseBtn.addEventListener('click', () => {
 counter++;
 count.textContent = counter;
});

decreaseBtn.addEventListener('click' , () => {
    counter--;
    count.textContent = counter;
});
resetBtn.addEventListener('click' , () => {
    counter = 0;
    count.textContent = counter;
});

