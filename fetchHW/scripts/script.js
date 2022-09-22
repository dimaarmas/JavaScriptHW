const rootElem = document.querySelector('#root');

const render = (json) => {
    json.forEach(({ title, completed }) => {
        const card = document.createElement('div');
        const titleElem = document.createElement('p');
        const statusElem = document.createElement('p');

        titleElem.innerText = `Title: ${title}`;

        card.classList.add('card')


        if (completed === true) {
            statusElem.innerText = 'Status: done';
            card.style.backgroundColor = 'lightgreen';
        } else {
            statusElem.innerText = 'Status: not done';
            card.style.backgroundColor = 'lightgray';
        }


        card.append(titleElem, statusElem);
        rootElem.append(card);
    })
}


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp => resp.json())
    .then(json => render(json))