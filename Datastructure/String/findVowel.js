function vowelValue(str) {
    let vowels = 'aeiou';
    let counter = 0;
    let notvowels = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            console.log('vowels values from list are', str[i]);
            counter++
        }
        else {
            notvowels++
        }
    }
    return counter
}

const namevalue = 'Tinku Gupta';
const findVowel = vowelValue(namevalue);
console.log("vowels vcalues count is ", findVowel);

// 2017,2018,2019,2020,2021,2022,2023,2024,2025