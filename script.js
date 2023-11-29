function nextPalindrome(num) {
  //your JS code here.
	 while (true) {
    num++;
    if (isPalindrome(num)) {
      return num;
    }
  }
}
function isPalindrome(number) {
  const str = String(number);
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}


const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
