//
// Object destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 89
//     }
// };

// //es6 destructuring
// //defualt value, rename
// const { name: firstname = 'Anonymous', age} = person;

// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'RYan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName =' Self-Published'} = book.publisher;

// console.log(publisherName); //Pengunin, Self-Published


//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//follow array order
const [, city, state = 'New York',] = address;
console.log(`You are in ${city} ${state}`);

const item = [
    'Coffee (iced)', '$3.00', '$3.50', '$3.75'
];

const [itemName,,mediumPrice,] = item;

//grab 1st and 3rd items using array destructuring
console.log(`A medium ${itemName} costs ${mediumPrice}`);