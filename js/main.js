'use strict'

const outputScreen = document.querySelector('.output_screen');
const switchBtn = document.querySelector('.switch_dark');

switchBtn.addEventListener('click',()=> {
    document.body.classList.toggle('dark');
    switchBtn.classList.toggle('active');
})

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}