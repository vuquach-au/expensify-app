const add =  (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

const user = {
    name: 'Steven',
    cities: ['Melbourne', 'Sydney', 'BRisbane'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy() {
        return this.numbers.map((num) => num * 2);
    }

};

console.log(multiplier.multiplyBy());