
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr
}


const originalArray = [1, 6, 3, 5, 4, 2]
const sortedArray = sortArray(originalArray);
console.log(sortedArray);


267ee9ed194c3249859042259c051d12