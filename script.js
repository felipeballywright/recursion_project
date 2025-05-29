console.log("Running script.js");

// ITERATION

function fibs(fibArrLength){
    const arr = [0, 1];
    for(let i = 0; i < fibArrLength - 2; i++){
        const newNumber = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(newNumber);
    }
    console.log(arr);
}

// fibs(8);

// RECURSION

function fibsRec(numberOfRepetitions, arr){
    if(!arr){
        console.log("Creating arr from scratch.")
        arr = [0, 1];
        return fibsRec(numberOfRepetitions, arr);
    }
    const newNumber = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(newNumber);
    if(arr.length > numberOfRepetitions - 1){
        console.log("The function reached the number of repetitions. The array is:", arr);
        return arr
    } else{
        return fibsRec(numberOfRepetitions, arr);
    }
}

// fibsRec(8);

// MERGE SORT
    