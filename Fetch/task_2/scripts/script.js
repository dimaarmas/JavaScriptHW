const root = document.querySelector('#root');

const render = (data) => {
    data.forEach((user) => {
        const card = document.createElement('div');
        const imgElem = document.createElement('img');
        const userName = document.createElement('p');

        imgElem.setAttribute('src', user.avatar)
        imgElem.setAttribute('alt', 'Photo')

        userName.innerText = user.first_name;

        card.append(imgElem, userName);
        root.append(card);
    })
}

fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(json => render(json.data))