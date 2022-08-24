// class Worker {
//     constructor(name, surname, rate, date) {
//         this.name = name,
//             this.surname = surname,
//             this.rate = rate,
//             this.date = date
//     }
//     getSalary() {
//         return this.rate * this.date;
//     }

//     add_days(amount) {
//         this.date += amount;
//     }

//     delete_days(amount) {
//         this.date -= amount;
//     }

// }

// const newWorker = new Worker('Peter', 'Parker', 15, 50);
// const newWorker1 = new Worker('Dmitry', 'Armas', 30, 20);

// const findSum = newWorker.getSalary() + newWorker1.getSalary();

// console.log(newWorker.getSalary());
// console.log(newWorker1.getSalary());



// console.log(newWorker.date);
// console.log(newWorker1.date);



// console.log(`The sum is ${findSum}`);


class Group {
    constructor(name, major) {
        this.name = name,
            this.major = major,
            this.number = 15
    }

    addStudent() {
        this.number += 1;
    }

    deleteStudent() {
        this.number -= 1;
    }
}

const myGroup = new Group('Информатика', 'Computer Science');
const myGroup2 = new Group('25-26', 'Backend');


// console.log(myGroup.number);
// console.log(myGroup2.number);


// Создайте функцию, которая будет создавать экземпляры класса Group и собирать их в один массив

// let allGroupsArr = [];
// const addGroupsIntoArr = (name, major, number) => allGroupsArr.push(new Group(name, major, number));

// addGroupsIntoArr('25-26', 'Backend', 5);
// addGroupsIntoArr('Информатика', 'Computer Science', 6);
// addGroupsIntoArr('30-36', 'Backend', 12);

// console.log(allGroupsArr);

class Language {
    constructor(name, alphabet, country) {
        this.name = name,
            this.alphabet = alphabet,
            this.country = country
    }
    getInfo() {
        console.log(`Язык ${this.name}, Алфавит: ${this.alphabet}, Страна: ${this.country}`);
    }
}

const myCountry = new Language('Romanian', 'Latin', 'Republic of Moldova and Romania');
console.log(myCountry.name, myCountry.alphabet, myCountry.country);

myCountry.getInfo();