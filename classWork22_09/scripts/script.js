const cardsContainer = document.querySelector('.root');

const render = (data) => {
    cardsContainer.innerText = '';
    const cards = data.map(({ first_name, avatar }) => {
        const card = document.createElement('div');
        const imgElem = document.createElement('img');
        const nameElem = document.createElement('p');

        nameElem.innerText = first_name;
        imgElem.src = avatar;
        imgElem.alt = 'user avatar';

        card.append(imgElem, nameElem);
        return card;
    })

    cardsContainer.append(...cards);
}

const request = (id) => {
    fetch(`https://reqres.in/api/users?page=${id}`)
        .then(resp => resp.json())
        .then(json => render(json.data))
}

request(1);

const triggers = document.querySelectorAll('.triggers button');

const [first_btn, second_btn] = triggers;

first_btn.addEventListener('click', () => request(1));
second_btn.addEventListener('click', () => request(2));