
function flatternArray(arr) {
    let emptyArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            emptyArray = emptyArray.concat(flatternArray(arr[i]))
        }
        else {
            emptyArray.push(arr[i])
        }
    }
    return emptyArray
}

const originalArray = [1, [2, [3, [4, [5]]]]]
const result = flatternArray(originalArray);
console.log(result)