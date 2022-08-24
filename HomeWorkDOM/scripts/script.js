const rootElem = document.querySelector('.root')

const cardElem = document.createElement('div')
const articleElem = document.createElement('p');
const nameElem = document.createElement('p');
const priceElem = document.createElement('p');
const imgElem = document.createElement('img');
const aHrefElem = document.createElement('a');

imgElem.setAttribute('src', 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/394115-01.png?$responsive$&cropPathE=mobile&fit=stretch,1&wid=640')
imgElem.setAttribute('alt', 'dyson');
aHrefElem.setAttribute('href', 'mailto:business@dyson.de');

articleElem.innerText = 'Article: Household Appliances';
nameElem.innerText = 'Name: Dyson';
priceElem.innerText = 'Price: 200.99€';
aHrefElem.innerText = 'business@dyson.de';

cardElem.classList.add('card');
imgElem.classList.add('img');





cardElem.append(imgElem, articleElem, nameElem, priceElem, aHrefElem);
rootElem.append(cardElem);