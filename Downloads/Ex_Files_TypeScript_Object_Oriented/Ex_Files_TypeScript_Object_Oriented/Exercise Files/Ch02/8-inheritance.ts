// Base / Parent Class
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

// Derived / Child Class(s)
export class Dog extends Animal {
    woof(): string {
        return 'Woof!'; 
    }
}

const dog = new Dog(2,4,'Dog');
dog.name;
dog.woof;

export class Cat extends Animal {
    meow(): string {
        return 'Meow!'; 
    }
}

const cat = new Cat(3,4,'Cat');
cat.age;
cat.meow;