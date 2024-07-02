export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

export class Cat extends Animal {
    constructor(data: {age: number, legs: number, name: string}) {
        super(data.age, data.legs, data.name); 
    }

    meow(): string {
        return 'MEOW! HISS! HISS!';
    }
}

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

    woof(): string {
        return 'WOOF! WOOF! WOOF!';
    }
}

const dog = new Dog();
const cat = new Cat({age: 3, legs: 4, name: 'Cat'});

console.log(dog instanceof Animal); //false
console.log(cat instanceof AnalyserNode); //true 