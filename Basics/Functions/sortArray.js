function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } 
        }
    }
    return arr;
}
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = sortArray(unsortedArray);
console.log(sortedArray); 