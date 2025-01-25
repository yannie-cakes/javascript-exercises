const sumAll = function(a,b) {
    let sum = 0;
    // check if a and b are integers and if they're both non-negative
    if((Number.isInteger(a) && Number.isInteger(b)) && (a > 0 && b > 0)){
        //if b is greater than a
        if(b > a)
            for(;a <= b; a++)
                sum += a;
            //if a is greater than b
        else if(b < a)
            for(;b <= a; b++)
                sum += b
    } else
        return "ERROR"
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
