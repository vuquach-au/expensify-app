
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreating(){
        return `Hi ! I am ${ this.name }`
    }

    getDescription() {
        
        return `Name: ${this.name} Age: ${this.age}`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;

    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description+= ` THeir major is ${this.major}`
        }
        return description;
    }

}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreating() {
        let greeting = super.getGreating();
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }
        return greeting
    }
}
const me = new Traveler('Vu Quach', 37, 'Melbourne');
console.log(me.getGreating());

const other = new Traveler(undefined, undefined, 'No Where');
console.log(other.getGreating())
