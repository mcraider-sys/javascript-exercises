function giveLetters (string) {
    let letters = string.split("").filter(char =>  /[a-zA-Z]/.test(char));
    return letters.join("").toLowerCase();
}

function reverseString (string) {
    let copyString = [];
    let onlyLetters = giveLetters(string);
    for(let i = 0; i < onlyLetters.length; i++){
        copyString.unshift(onlyLetters[i]);
    }
    return copyString.join("").toLowerCase() ;
};

const palindromes = function (str) {
    let revStr = reverseString(str);
    let compStr = giveLetters(str);
    if(compStr === revStr){
        return true;
    } else {
        return false;
    }

};

console.log(palindromes("r3acec3are"));


// Do not edit below this line
module.exports = palindromes;
