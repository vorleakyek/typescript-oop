export class Animal {
    age: number;
    legs: number;
    name: string;
    
    lives = 1; 
    
    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }

    sound(): string {
        return 'Roar!';
    }
}

//overridden the sound() in the CAT class 
export class Cat extends Animal {
    lives = 9; 

    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    sound(): string {
        super.sound();
        this.lives; //will refer to the lives variable defined in this Cat class 

        return 'MEOW! HISS! HISS!';
    }
}
