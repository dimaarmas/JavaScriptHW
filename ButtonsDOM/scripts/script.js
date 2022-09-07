const btnBgColor = document.querySelector('.changeBgColor');

btnBgColor.addEventListener('click', () => document.body.style.backgroundColor = 'black');

const btnSize = document.querySelector('.changeBtnSize');

btnSize.addEventListener('click', () => {
    btnSize.style.width = '10px';
});

const btnColor = document.querySelector('.changeBtnColor');

btnColor.addEventListener('click', (event) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = '#' + randomColor;
})