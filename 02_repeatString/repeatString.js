const repeatString = function(greet, number) {
    let result = '';
    if(number < 0)
        return 'ERROR';
    for(let i = 0; i < number; i++)
        result += greet;
    return result;
}

// Do not edit below this line
module.exports = repeatString;
