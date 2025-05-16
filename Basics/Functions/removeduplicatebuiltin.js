const arr = [1,2,3,4,5,3,5];
let uArr = arr.filter((v,i)=>{
    return arr.indexOf(v) ==i;
})

console.log(uArr);
let uArr1 = [... new Set(arr)];
console.log(uArr1)


// arr.filter((v,i)=>{

//     console.log(v+"_"+arr.indexOf(v)+"_"+i)
// })