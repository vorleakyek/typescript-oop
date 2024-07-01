function isAnagram(s: string, t: string): boolean {
    if (s.length === t.length) {
        // compare the strings
        const sortedS = s.split("").sort().join("");
        const sortedT = t.split("").sort().join("");
        if (sortedS === sortedT) {
            return true
        }
        return false
    } else {
        return false;
    }
};