const fibonacci = function(a) {
    if(typeof a === String){
        a = parseInt(a)
    }

    if(a >= 0){
        if(a == 0)
            return 0
        else if(a == 1 || a == 2)
            return 1
        else if (a > 1)
            return fibonacci(a-1) + fibonacci(a-2)
    } else return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
