const removeFromArray = function(arr, ...arg) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(!arg.includes(arr[i])){
            newArray.push(arr[i])
        } else{
            continue;
        }
    }
    return newArray;
};

console.log(removeFromArray([1,2,2,3], 2,3));

// Do not edit below this line
module.exports = removeFromArray;
