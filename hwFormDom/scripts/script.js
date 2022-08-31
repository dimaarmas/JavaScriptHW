const form = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards-container');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const card = document.createElement('div');
    const fullNameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const salaryElem = document.createElement('p');

    const { fullname, age, rate, days } = event.target;

    fullNameElem.innerText = `Full Name: ${fullname.value}`;
    ageElem.innerText = `Age: ${age.value}`;
    salaryElem.innerText = `Salary: ${rate.value * days.value}$`;

    card.classList.add('card');

    form.reset();

    card.append(fullNameElem, ageElem, salaryElem);
    cardsContainer.append(card);
});

//reset the form after submitting
// const btn = document.querySelector('#btn');

// btn.addEventListener('click', (event) => {
//     event.preventDefault();

//     const inputs = document.querySelectorAll('#fullname, #age, #rate, #days');

//     inputs.forEach(input => {
//         input.value = '';
//     })

// })


