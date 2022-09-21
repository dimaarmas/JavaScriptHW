const rootElem = document.querySelector('#root');

const render = (json) => {
    json.forEach((todos) => {
        const card = document.createElement('div');
        const titleElem = document.createElement('p');
        const statusElem = document.createElement('p');

        titleElem.innerText = `Title: ${todos.title}`;

        card.classList.add('card')

        if (todos.completed === true) {
            statusElem.innerText = 'Status: done';
            card.style.backgroundColor = 'green';
        } else {
            statusElem.innerText = 'Status: not done';
            card.style.backgroundColor = 'gray';
        }


        card.append(titleElem, statusElem);
        rootElem.append(card);
    })
}


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp => resp.json())
    .then(json => render(json))