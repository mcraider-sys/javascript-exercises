const sumAll = function(num1, num2) {
    let sum = 0;
    if(typeof (num1, num2) !== "number" || (num1 || num2) % 1 !== 0 || (num1 || num2) < 0){
        return "ERROR";
    }
    let start = num1;
    let end = num2;

    if(end > start){
        for(let i = start; i <= end; i++){
        sum += i;
        }
    } else {
        for(let i = end; i <= start; i++){
            sum += i;
        }
    }



    return sum;

};

console.log(sumAll(5,1));



// Do not edit below this line
module.exports = sumAll;
