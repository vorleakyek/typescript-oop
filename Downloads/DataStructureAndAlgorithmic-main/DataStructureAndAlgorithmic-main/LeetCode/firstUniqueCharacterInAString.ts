function firstUniqChar(s: string): number {
    
    const seenConsts = new Map();
    
    if (s.length === 1) {
        return 0;
    }
          
    for (let i=0; i<s.length; i++) {
        if (seenConsts.has(s[i])) {
            continue;
        }
        
        seenConsts.set(s[i], i);
            
        if (!s.substring(i+1).includes(s[i])) {
            return i;
        }
    }
    
    return -1;
    
};