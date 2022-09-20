const rootElem = document.querySelector('#root');

const render = (json) => {
    json.forEach((user) => {
        const card = document.createElement('div');
        const nameElem = document.createElement('p');
        const phoneElem = document.createElement('p');

        nameElem.innerText = `Name: ${user.name}`;
        phoneElem.innerText = `Phone: ${user.phone}`;

        card.classList.add('card');

        card.append(nameElem, phoneElem);
        rootElem.append(card);
    })

}

fetch('https://jsonplaceholder.typicode.com/users') // send a request to server
    .then(resp => resp.json()) // answer
    .then(json => render(json))