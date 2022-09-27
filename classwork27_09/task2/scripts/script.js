const rootElem = document.querySelector('#root');

let idSwitch = 1;

const render = ({ name, username, email, address }) => {
    rootElem.innerText = '';
    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const userNameElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const addressElem = document.createElement('p');

    nameElem.innerText = `Name: ${name}`;
    nameElem.innerText = `Username: ${username}`;
    emailElem.innerText = email;
    addressElem.innerText = `Address: ${address.suite}, ${address.street}, str., ${address.zipcode}, ${address.citz}`;


    emailElem.setAttribute('href', `mailto:${email}`);

    card.classList.add('card');


    card.append(nameElem, userNameElem, emailElem, addressElem);
    rootElem.append(card);
}

const request = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp => resp.json())
        .then(json => render(json))
}

request(idSwitch);

const [leftBtn, rightBtn] = document.querySelectorAll('.triggers button');

leftBtn.addEventListener('click', () => {
    if (idSwitch === 1) {
        idSwitch = 11
    }
    request(--idSwitch)
})

rightBtn.addEventListener('click', () => {
    if (idSwitch === 10) {
        idSwitch === 0
    }
    request(++idSwitch)
})