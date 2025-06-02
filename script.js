// ITERATION

// function fibs(fibArrLength){
//     const arr = [0, 1];
//     for(let i = 0; i < fibArrLength - 2; i++){
//         const newNumber = arr[arr.length - 1] + arr[arr.length - 2];
//         arr.push(newNumber);
//     }
//     console.log(arr);
// }

// fibs(8);

// RECURSION

// function fibsRec(numberOfRepetitions, arr){
//     if(!arr){
//         console.log("Creating arr from scratch.")
//         arr = [0, 1];
//         return fibsRec(numberOfRepetitions, arr);
//     }
//     const newNumber = arr[arr.length - 1] + arr[arr.length - 2];
//     arr.push(newNumber);
//     if(arr.length > numberOfRepetitions - 1){
//         console.log("The function reached the number of repetitions. The array is:", arr);
//         return arr
//     } else{
//         return fibsRec(numberOfRepetitions, arr);
//     }
// }

// fibsRec(8);

// MERGE SORT

function mergeSort(arr){

    function merge(a, b){
        console.log("Running merge with", a, b);
        let result = [];
        while(a.length && b.length){
            if(a[0] > b[0]){
                result.push(b.shift());
            } else {
                result.push(a.shift());
            }
        }
        result = result.concat(a, b);
        return result
    }

    if(arr.length > 2){
      const mid = Math.ceil(arr.length / 2);
      const firstHalf = arr.slice(0, mid);
      const secondHalf = arr.slice(mid);
      console.log("1st and 2nd", firstHalf, secondHalf);

      const leftHalf = mergeSort(firstHalf);
      const rightHalf = mergeSort(secondHalf);
      console.log("left and right", leftHalf, rightHalf);

      const bothHalves = merge(leftHalf, rightHalf);
      console.log("Both halves", bothHalves);
      return bothHalves
    } else if (arr.length === 2) {
        console.log("The array length is 2");
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    } else if(arr.length === 1){
        return arr
    }
}

// const testOne = [4, 2, 5, 1];
const testTwo = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(testTwo));