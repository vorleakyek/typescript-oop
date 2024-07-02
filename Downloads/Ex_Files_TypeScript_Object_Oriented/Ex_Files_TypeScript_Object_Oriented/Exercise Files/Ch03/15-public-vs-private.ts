export class Animal {
    public age: number;
    private legs: number;
    name: string; // public if not declared 

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }

}

export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    // available outside of class -- public variable 
    public get numAge() {
        return this.age; 
    }

    // not available outside of the class -- private variable 
    public get numLegs() {
        return this.legs;
    }
}

const cat = new Cat({age: 3, legs: 4, name: 'Cat'});
cat.age; // available outside of class -- public variable 
cat.legs ; // not available outside of the class -- private variable 