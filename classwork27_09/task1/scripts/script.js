const rootElem = document.querySelector('#root');
let idNum = 1;

const render = (data) => {
    rootElem.innerText = '';
    const card = document.createElement('div');
    const taskElem = document.createElement('p');
    const statusElem = document.createElement('p');

    const status = data.completed ? 'done' : 'not done';
    const backGroundColor = data.completed ? 'green' : 'lightgray';

    taskElem.innerText = `Title: ${data.title}`;
    statusElem.innerText = `Status: ${status}`;


    card.classList.add('card');

    card.style.backgroundColor = backGroundColor;

    card.append(taskElem, statusElem);
    rootElem.append(card);
}


const request = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(resp => resp.json())
        .then(json => render(json))
}

request(idNum);

const [left_btn, right_btn] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () => request(--idNum))
right_btn.addEventListener('click', () => request(++idNum))
