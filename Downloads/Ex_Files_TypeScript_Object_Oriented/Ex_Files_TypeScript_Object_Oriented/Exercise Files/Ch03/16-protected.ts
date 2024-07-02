export class Animal {
    protected age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}


//child 
export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    get birthday(): number {
        return this.age + 1;  // have access to "age" variable from the parent class 
    }
}

const cat = new Cat({age: 3, legs: 4, name: 'Cat'});
cat.age; // not available outside of the child/sub child classes 


//shape 
//Can't use "implements" anymore 
export class Dog implements Animal {
    age: number; // conflict with this variable 
    legs: number;
    name: string;
}
