// sep 10 2023
//How to find the sum of all elements in array in Javascript
const array = [1, 2, 3, 4, 5];

function sumArray(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum = arr[i]+sum
    }
  
    return sum;
  }
  
  
  const total = sumArray(array);
  console.log(total); // Output: 15
  
