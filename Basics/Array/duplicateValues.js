const arr = [1, 2, 3, 4, 2, 3, 5];
const duplicates = arr.filter((element,index) => {
    return arr.indexOf(element) !== index
})

console.log(duplicates);
 