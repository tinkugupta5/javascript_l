function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequentElement = null;

    // Use a for loop to count the frequency of each element
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;

        // Update the most frequent element if the current count is greater
        if (frequencyMap[element] > maxCount) {
            maxCount = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

const array = [1, 3, 2, 3, 4, 1, 3, 2, 1, 1];
console.log(findMostFrequentElement(array)); // Output: 1