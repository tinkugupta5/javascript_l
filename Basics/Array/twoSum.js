
function twoSumfn(arr,target)
{
    console.log(arr)
    console.log(target)
    for(let i = 0; i<arr.length;i++)
    {
        for(let j = i+1; j<arr.length;j++)
        {
            if(arr[i]+arr[j] === target)
            {
                return [i,j]
            }
        } 
    }
    return null ;
}

const originalArray = [2,8,11,15];
const target = 9;

const twoSumAns = twoSumfn(originalArray,target)



const originalArraydata  = [1,2,3,4,5,5,6];
const tragetValue = 9;



