export class Message {
    title: string;
    message: string;
    isSent: boolean;
}

// static - access the variable without instantiate from a class 
// can't use the "this" keyword unless the property or the method itself is also static 
// static is public by default 
export class Messages extends Array<Message> {

    //can have the same method name in "public" 
    //this will be invoke in a different way (by instantiate from the class)
    public getValidMessages(): Message[] {
        return this.filter((value)=>value.message.trim().length > 0); 
    }
    
    //invoke without having to instantiate from the class 
    static getValidMessages(messages: Message[]): Message[] {
        return messages.filter((value)=>value.message.trim().length > 0); 
    }
}


Messages.getValidMessages([]);