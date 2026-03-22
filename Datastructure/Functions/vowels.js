function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let notvowelscount = 0 ;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        } else{
            notvowelscount++;
        }
    }
    return count;
}
const inputString = "Tinku";
const vowelCount = countVowels(inputString);
console.log(vowelCount); 

  