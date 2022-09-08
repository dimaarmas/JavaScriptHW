const btnBgColor = document.querySelector('.changeBgColor');

btnBgColor.addEventListener('click', () => document.body.style.backgroundColor = 'black');

const btnSize = document.querySelector('.changeBtnSize');
let incrBtnParams = 30;

const incrBtnRender = (size) => {
    btnSize.style.width = size + 'px';
    btnSize.style.height = size + 'px';
}

incrBtnRender(incrBtnParams);

btnSize.addEventListener('click', () => {
    incrBtnParams += 10;
    incrBtnRender(incrBtnParams);
});

const btnColor = document.querySelector('.changeBtnColor');

btnColor.addEventListener('click', (event) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = '#' + randomColor;
})

const randomBodyColor = document.querySelector('.btnBodyColor');

const getBodyColor = () => Math.round(Math.random() * 255);

randomBodyColor.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${getBodyColor()}, ${getBodyColor()}, ${getBodyColor()} )`;
});


const words = ['...', '!!!', '&&&', '***', '+++'];
let wordIndex = 0;

const changeButton = document.querySelector('.changeText');
const changeInput = document.querySelector('.changeInput');

changeButton.addEventListener('click', () => {
    changeInput.value = words[wordIndex++ % words.length]
})


//////////////////////////////////////////////////////////////////

const photos = [
    'https://reqres.in/img/faces/1-image.jpg',
    'https://reqres.in/img/faces/2-image.jpg',
    'https://reqres.in/img/faces/3-image.jpg',
    'https://reqres.in/img/faces/4-image.jpg',
    'https://reqres.in/img/faces/5-image.jpg'
]

let photoIndex = 0;

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (event) => {
    event.target.src = photos[photoIndex++ % photos.length]
});


const newGallery = document.querySelector('.newGallery');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');

rightBtn.addEventListener('click', () => {
    newGallery.src = photos[++photoIndex % photos.length]
})

leftBtn.addEventListener('click', () => {

    if (photoIndex <= 0) {
        photoIndex = photos.length;
    }
    newGallery.src = photos[--photoIndex % photos.length]
})


