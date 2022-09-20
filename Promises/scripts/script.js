// let a = 15;

// setTimeout(() => {
//     a = 20;
//     console.log(a);
// }, 2000)

// console.log(a);

let random = new Promise((resolve, reject) => {
    let a = Math.random();

    if (a >= 0.5) {
        resolve(a)
    } else {
        reject(a)
    }
})

random.then(
    (value) => console.log(value + ': its alright'),
    (value) => console.log(value + ': not alright')

)