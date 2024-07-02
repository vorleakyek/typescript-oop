
//readonly does not allows anychanges after instantiating 
// can make 'readonly' private, public, or protected  (e.g public readonly id: string)
export class Message {
    public readonly id: string;
    title: string;
    message: string;
    isSent: boolean;

    constructor(id: string) {
        this.id = id;
    }
}

const message = new Message('123');
message.id;
message.id = '234'; // can't reassigned the value 
