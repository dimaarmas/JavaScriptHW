const form = document.querySelector('.form');
const rootElem = document.querySelector('#root');
const containerElem = document.querySelector('#root')

let workersArr = [];

const cardRender = () => {
    containerElem.innerText = '';
    workersArr.forEach(({ firstname, lastname, salary, email, photo, progress }) => {
        const card = document.createElement('div');
        const firstNameElem = document.createElement('p');
        const lastNameElem = document.createElement('p');
        const salaryElem = document.createElement('p');
        const emailElem = document.createElement('a');
        const emailTextElem = document.createElement('p');
        const imgElem = document.createElement('img');
        const progressContainer = document.createElement('div');
        const progressLine = document.createElement('div');
        const progressValue = document.createElement('p');

        firstNameElem.innerText = `First Name: ${firstname}`;
        lastNameElem.innerText = `Last Name: ${lastname}`;
        salaryElem.innerText = `Salary: ${salary}`;
        emailElem.innerText = email;
        emailTextElem.innerText = 'Email: '
        progressValue.innerText = progress + '%';


        emailElem.setAttribute('href', `mailto:${email}`);
        imgElem.setAttribute('src', photo);
        imgElem.setAttribute('alt', 'Photo User');

        emailTextElem.classList.add('email-text-elem');
        card.classList.add('card');
        progressContainer.classList.add('progress-container');
        progressLine.classList.add('progress-line');
        progressValue.classList.add('progress-value');

        progressLine.style.width = progress + '%';

        progressContainer.append(progressLine, progressValue)
        card.append(imgElem, firstNameElem, lastNameElem, salaryElem, emailElem, emailTextElem, progressContainer);
        rootElem.append(card);

    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { firstname, lastname, salary, email, photo, progress } = event.target;

    workersArr.push({
        firstname: firstname.value,
        lastname: lastname.value,
        salary: salary.value,
        email: email.value,
        photo: photo.value,
        progress: progress.value
    });


    firstname.value = '';
    lastname.value = '';
    salary.value = '';
    email.value = '';
    photo.value = '';
    progress.value = '';

    cardRender();
});