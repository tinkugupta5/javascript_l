function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // Swap the elements at i and randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr)); // Output: Shuffled array, e.g., [3, 1, 5, 4, 2]