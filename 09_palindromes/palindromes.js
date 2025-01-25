const palindromes = function (str) {

    str = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    let arr = str.split('')
    let arr2 = []
    let j = 0

    for(let i = arr.length-1; i >= 0; i--){
        if(j < arr.length)
            arr2[j] = arr[i]
        j++
    }

    for(let k = 0; k < arr.length; k++)
        if(!(arr[k] === arr2[k]))
            return false;
    return true;
};

// Do not edit below this line
module.exports = palindromes;
