const btn = document.querySelector('.btn');
const showTextInput = document.querySelector('.showText');

btn.addEventListener('click', () => console.log(showTextInput.value));


const changeBtn = document.querySelector('.changeTextBtn');
const changeText = document.querySelector('.changeTextInput');

changeBtn.addEventListener('click', () => changeText.value = '!!!');