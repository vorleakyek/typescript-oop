function reverseString2(s: string): string {
    //check input 
    if (!s || s.length <2 || typeof s !== 'string') {
        return 'not a valid string'; 
    }

    const backwards: string[] = [];
    const totalChars = s.length - 1;

    for (let i = totalChars; i >= 0; i--) {
        backwards.push(s[i]); 
    }

    const result = backwards.join('');

    console.log(result);
    return result;
}

reverseString2('hello');