const countValue = document.querySelector('#counter');

const increment = function() {
    let value = parseInt(countValue.innerText);
    value += 1;
    countValue.innerText = value;
}

const decrement = function() {
    let value = parseInt(countValue.innerText);
    value -= 1;
    countValue.innerText = value;
}