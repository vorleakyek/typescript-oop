/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    
    // Step 1: Ignore leading whitespace
    while (s[i] === ' ') {
        i++;
    }
    
    // Step 2: Check for sign character
    if (s[i] === '-' || s[i] === '+') {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }
    
    // Step 3: Read in digits until a non-digit character or end of input is reached
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result + s[i]
        i++;
    }
    
    // Step 4: Change sign if necessary
    result = Number(result) * sign;
    
    // Step 5: Clamp result to 32-bit signed integer range
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    
    if (result > INT_MAX) {
        return INT_MAX;
    } else if (result < INT_MIN) {
        return INT_MIN;
    } else {
        return result;
    }
};


// Example usage:
// console.log(myAtoi("   42"));          // Output: 42
// console.log(myAtoi("   -42"));         // Output: -42
// console.log(myAtoi("4193 with words")); // Output: 4193
// console.log(myAtoi("words and 987"));  // Output: 0
// console.log(myAtoi("-91283472332"));   // Output: -2147483648 (INT_MIN)