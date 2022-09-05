const form = document.querySelector('.form');
const rootElem = document.querySelector('#root');


let arrWorkers = [];

let renderCard = () => {
    arrWorkers.forEach(({ firstname, lastname, age, rate, days, email, photo }) => {
        const card = document.createElement('div');
        const firstNameElem = document.createElement('p');
        const lastNameElem = document.createElement('p');
        const ageElem = document.createElement('p');
        const salaryElem = document.createElement('p');
        const emailElem = document.createElement('a');
        const imgElem = document.createElement('img');

        firstNameElem.innerText = `Full Name: ${firstname} ${lastname}`;
        ageElem.innerText = `Age: ${age}`;
        salaryElem.innerText = `Salary: ${rate * days}`;
        emailElem.innerText = email;

        emailElem.setAttribute('href', `mailto:${email}`);
        imgElem.setAttribute('src', photo);
        imgElem.setAttribute('alt', 'Photo User');

        card.classList.add('card');

        card.append(imgElem, firstNameElem, lastNameElem, ageElem, salaryElem, emailElem);
        rootElem.append(card);
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { firstname, lastname, age, rate, days, email, photo } = event.target;

    arrWorkers.push({
        firstname: firstname.value,
        lastname: lastname.value,
        age: age.value,
        rate: rate.value,
        days: days.value,
        email: email.value,
        photo: photo.value
    });

    firstname.value = '';
    lastname.value = '';
    age.value = '';
    rate.value = '';
    days.value = '';
    email.value = '';
    photo.value = '';

    renderCard();
})