const users = [
    {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        active: true
    },
    {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        active: false
    },
    {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        active: true
    }
];

const rootElem = document.querySelector('#root');
rootElem.classList.add('cards-container');

const activeUsers = users.filter(elem => elem.active);

activeUsers.forEach(({ id, email, first_name, last_name, avatar }) => {

    const card = document.createElement('div');
    const idElem = document.createElement('p');
    const firstNameElem = document.createElement('p');
    const lastNameElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const emailTextElem = document.createElement('p');
    const imgElem = document.createElement('img');

    imgElem.setAttribute('src', avatar)
    imgElem.setAttribute('alt', 'user photo')
    emailElem.setAttribute('href', `mailto:${email}`)


    idElem.innerText = `ID: ${id}`;
    emailTextElem.innerText = 'Email: ';
    emailElem.innerText = email;
    firstNameElem.innerText = `FirstName: ${first_name}`;
    lastNameElem.innerText = `LastName: ${last_name}`;

    card.classList.add('card');
    emailTextElem.classList.add('email-text-elem')
    imgElem.classList.add('avatar');


    card.append(imgElem, idElem, emailTextElem, emailElem, firstNameElem, lastNameElem);
    rootElem.append(card);
});


