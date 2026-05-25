const reverseString = function(str) {
    let reversed = [];
    for (let i = 0; i < str.length; i++){
        reversed.unshift(str[i]);
    }
    return reversed.join("");
};


console.log(reverseString("Hello!123Nerdo"));
// Do not edit below this line
module.exports = reverseString;
