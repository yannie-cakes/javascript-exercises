const reverseString = function(str) {
    let result = '';
    let stringArr = str.split('');
    
    for(let i = str.length-1; i >= 0; i--)
        result += stringArr[i];

    return result;
};

// Do not edit below this line
module.exports = reverseString;
