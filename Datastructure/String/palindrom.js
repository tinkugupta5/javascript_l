function getReversedString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

function isPalindrome(str) {
    console.time("Palindrome Check Time");
    let reversed = getReversedString(str);
    if (reversed === str) {
        console.log("Yes, it is a palindrome");
    } else {
        console.log("No, it is not a palindrome");
    }
    console.timeEnd("Palindrome Check Time");
}


let original = "tinku";
isPalindrome(original);
