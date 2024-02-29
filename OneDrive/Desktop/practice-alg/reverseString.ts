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


// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]