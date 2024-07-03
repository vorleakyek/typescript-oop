export class User {
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string) { }

    doesEmailMatch(email: string): boolean {
        return this.email === email;
    }
}

//class prior to ES6 
function UserLegacy(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email; 

    this.doesEmailMatch = function (email) {
        return this.email === email; 
    }
}

const user = new UserLegacy('user1', 'last', 'a@b.com'); 
user.firstName; 