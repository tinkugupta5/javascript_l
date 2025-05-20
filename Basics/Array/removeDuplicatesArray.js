function removeDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
      let uniqueArr = [];
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }
  
  const originalArray = [1, 2, 3, 4, 4, ]
  
  const removedDuplicate = removeDuplicate(originalArray);
  console.log(removedDuplicate); 
  //Output: [1, 2, 3, 4, 5]