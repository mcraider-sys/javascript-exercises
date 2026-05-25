let fibArray = [1,1,2,3,5,8,13,21,34]

const fibonacci = function(num) {
    let fibboArray = [0, 1,];    
    for(let i = 2; i <= num; i++){
        let lastValue = fibboArray[i - 1];
        let lasterValue = fibboArray[i - 2];
        fibboArray[i] = lastValue + lasterValue;
    }
    return fibboArray[num];

};

(console.log(fibonacci(8)));

// Do not edit below this line
module.exports = fibonacci;
