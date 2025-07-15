
const duplicates = arr.filter((element,index) => {
    return arr.indexOf(element) !== index
})
const arr = [1, 2, 3, 4, 2, 3, 5];
console.log(duplicates);
 