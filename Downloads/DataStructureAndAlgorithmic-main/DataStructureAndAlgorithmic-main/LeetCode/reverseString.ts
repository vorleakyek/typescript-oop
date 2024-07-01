/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
    
    for (let i=0 ; i<s.length/2 ; i++) {
        const replace = s[s.length-1-i];
        const original = s[i];
        s[i] = replace ;
        s[s.length-1-i]=original;
    }
};


// function reverseString2(s: string): string {
//     //check input 
//     if (!s || s.length <2 || typeof s !== 'string') {
//         return 'not a valid string'; 
//     }

//     const backwards: string[] = [];
//     const totalChars = s.length - 1;

//     for (let i = totalChars; i >= 0; i--) {
//         backwards.push(s[i]); 
//     }

//     const result = backwards.join('');

//     console.log(result);
//     return result;
// }

// // Input: s = ["h","e","l","l","o"]
// // Output: ["o","l","l","e","h"]

// //Input: s = ["H","a","n","n","a","h"]
// // Output: ["h","a","n","n","a","H"]


// reverseString2('hello');