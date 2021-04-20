//
// Object destructuring
//

// const person = {
//     name: 'Steven',
//     age: 38,
//     location: {
//         city: 'Melbourne',
//         temp: 88
//     }
// }

// const { name: firstName  = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if(city && temperature ){

//     console.log(`It's is ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
// Array desctructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, , state] = address;

// console.log(`You are in ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , mediumPrice, price3] = item;

console.log(`A medium ${name} costs ${mediumPrice}`)