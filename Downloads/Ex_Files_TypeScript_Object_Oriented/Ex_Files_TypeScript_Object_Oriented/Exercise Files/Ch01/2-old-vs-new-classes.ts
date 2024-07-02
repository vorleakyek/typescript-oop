export class Message {
    title;
    message;
    id;
}


//old codes that is equivalent to the class 
function Message2(title, message, id) {
    this.title = title;
    this.message = message;
    this.id = id; 
}

const message = new Message2('Hello', 'World', 'Infinity'); 




