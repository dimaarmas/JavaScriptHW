const users = [
    {
        first_name: 'Ivan',
        last_name: 'Ivanov',
        age: 20,
        salary: 500
    },
    {
        first_name: 'Olga',
        last_name: 'Petrova',
        age: 12,
        salary: 250
    },
    {
        first_name: 'Irina',
        last_name: 'Alexandrova',
        age: 46,
        salary: 1500
    },
    {
        first_name: 'Denis',
        last_name: 'Sokolov',
        age: 30,
        salary: 760
    }
];


// 1. Проверьте, что этот объект не пустой - в нем есть хотя бы один объект с ключом age.

let isNotEmpty = users.map(elem => elem.age);
console.log(isNotEmpty);

users.forEach(el => console.log(el.age));

//2. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль

users.forEach(elem => {
    console.log(elem)
});

//3. Получите из всех объектов значения last_name и сформируйте из этих имен массив

let userLastName = users.map(elem => elem.last_name);
console.log(userLastName);

//4. Сформируйте новый массив без объекта, где first_name == "Irina".

let userFirstName = users.filter(elem => elem.first_name !== 'Irina');
console.log(userFirstName);

//5. Добавьте в конец нового массива объект со значениями:

const newObject = {
    first_name: 'Anton',
    last_name: 'Gribov',
    age: 36,
    salary: 1760
}

userFirstName.push(newObject);


//Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.
//({ 'key': 'property' }, 'key') => 'property'

const objectValue = (obj, key) => {
    return obj[key];
}

console.log(objectValue({ 'firstname': 'Dima' }, 'firstname'));


