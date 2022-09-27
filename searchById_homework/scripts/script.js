const form = document.querySelector('.form')
const rootElem = document.querySelector('.root');


const getUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp => resp.json())
        .then(json => render(json))
}

getUser();


const render = (data) => {
    rootElem.innerText = '';
    const card = document.createElement('div');
    const fullNameElem = document.createElement('p');
    const emailElem = document.createElement('a');

    fullNameElem.innerText = data.name;
    emailElem.innerText = data.email;

    emailElem.href = `mailto:${data.email}`;

    card.append(fullNameElem, emailElem)
    rootElem.append(card)
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const id = event.target.id.value;
    getUser(id);
})