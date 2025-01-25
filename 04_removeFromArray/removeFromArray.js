const removeFromArray = function(arr, ...k) {
    let result = []
    let shouldAdd;

    //iterate through array
    for(let i = 0; i < arr.length; i++){
        //initially, all values can be added to the result
        shouldAdd = true;
        //loop through values of k
        for(let j = 0; j < k.length; j++){
            // if the array includes the value from k and it's equal to arr[i] AND they're both the same type
            // it shouldn't be added
            if(arr.includes(k[j]) && arr[i] == k[j] && typeof arr[i] == typeof k[j])
                shouldAdd = false;
        }

        //push if k can't bee found in arr[i]
        if(shouldAdd)
            result.push(arr[i])
    }

    return result;

}

// Do not edit below this line
module.exports = removeFromArray;

// algo
/**
 * convert arr and k to string
 * for i < array length
 * if arr[i] != k
 *      add to new array
 */