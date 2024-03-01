// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

function reverse(x: number): number {
      
    const pNum = x < 0 ? x*(-1) : x;
    let s = pNum.toString().split('');
        
           for (let i=0; i<s.length/2; i++) {
            const original = s[i];
            const replace = s[s.length-1-i];
            s[i] = replace;
            s[s.length-1-i] = original;
        
    }
    const num = Number(s.join(''));
    const result = x < 0? num*(-1): num; 
    
    
    if (result <= -Math.pow(2,31) || result >= Math.pow(2,31)-1) {
       return 0
    }    

    return result;   
   
};


// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21

// Input: x = 123
// Output: 321