function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        let isAlreadyAdded = false;
        for (let k = 0; k < duplicates.length; k++) {
            if (duplicates[k] === arr[i]) {
                isAlreadyAdded = true;
                break;
            }
        }
        
        if (count > 1 && !isAlreadyAdded) {
            duplicates[duplicates.length] = arr[i]; // Manually add duplicate value
        }
    }
    
    return duplicates;
}

const arr = [1, 2, 3, 4, 2, 3, 5, 6, 1];
console.log(findDuplicates(arr)); 
// Output: [1, 2, 3]
