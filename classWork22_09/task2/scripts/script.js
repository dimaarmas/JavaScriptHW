const rootElem = document.querySelector('#root');

const render = (data) => {
    const usersCards = data.map(({ first_name, last_name, email, avatar }) => {
        const card = document.createElement('div');
        const nameElem = document.createElement('p');
        const emailElem = document.createElement('a');
        const imgElem = document.createElement('img')

        nameElem.innerText = `${first_name} ${last_name}`;
        emailElem.innerText = email;

        imgElem.src = avatar;
        imgElem.alt = 'user avatar';
        emailElem.href = `mailto:${email}`;

        card.classList.add('card')


        card.append(nameElem, emailElem, imgElem);
        return card
    })

    rootElem.append(...usersCards);
}


fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(json => render(json.data))