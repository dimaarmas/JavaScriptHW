const rootElem = document.querySelector('#root');

let idSwitcher = 1;

const render = ({ title, body }) => {
    rootElem.innerText = '';
    const card = document.createElement('div');
    const titleElem = document.createElement('p');
    const bodyElem = document.createElement('p');

    titleElem.innerText = `Title: ${title}`;
    bodyElem.innerText = `Body: ${body}`;

    card.classList.add('card')

    card.append(titleElem, bodyElem);
    rootElem.append(card);
}

const request = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => resp.json())
        .then(json => render(json))
}

request(idSwitcher)

const [leftBtn, rightBtn] = document.querySelectorAll('.triggers button');

leftBtn.addEventListener('click', () => {
    if (idSwitcher === 1) {
        idSwitcher = 11
    }

    request(--idSwitcher);
})

rightBtn.addEventListener('click', () => {
    if (idSwitcher === 10) {
        idSwitcher = 0
    }
    request(++idSwitcher)
});
