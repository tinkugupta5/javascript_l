function removeDuplicate(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

const originalArray = [1, 2, 3, 4, 4, 5];
const removedDuplicate = removeDuplicate(originalArray);
console.log(removedDuplicate); 