function isPalindrome(s: string): boolean {
  if (s === " ") {
    return true;
  }

  const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length / 2; i++) {
      console.log(str[i], str[str.length - i - 1]);
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < str.length / 2 - 1; i++) {
      console.log(str[i], str[str.length - i - 1]);
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }
  }

  return true;
}
