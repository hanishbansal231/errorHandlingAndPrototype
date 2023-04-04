class Person {
    constructor(name = "Unkown", age = 0) {
        this.name = name;
        this.age = age;
    };
};
const person1 = new Person("Hanish", 20);
console.log(person1);
const person2 = new Person();
console.log(person2);