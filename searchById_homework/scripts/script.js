const form = document.querySelector('.form')
const rootElem = document.querySelector('#root');




form.addEventListener('submit', (event) => {
    event.preventDefault();

    const render = (json) => {
        const searchById = json.map(({ name, email }) => {
            const card = document.createElement('div');
            const fullNameElem = document.createElement('p');
            const emailElem = document.createElement('a');

            fullNameElem.innerText = name;
            emailElem.innerText = email;

            emailElem.href = `mailto:${email}`;

            card.append(fullNameElem, emailElem)
            return card
        })

        rootElem.append(...searchById);

    }

    const { id } = event.target

    fetch(`https://jsonplaceholder.typicode.com/users${id.value}`)
        .then(resp => resp.json())
        .then(json => render(json))

})




