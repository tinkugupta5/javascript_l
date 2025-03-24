Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0; i<this.length;i++)
    {
        if(cb(this[i],i,this)) temp.push(this[i]); 
    }
    return temp;
}


const nums = [1,2,3,4,5]

const multiply = nums.myFilter((item,index,arr)=>{
    if(item > 3) 
    {
        console.log("satisfies")
    }
    else{
        console.log("not satisfies");
    }
})

console.log(multiply);
