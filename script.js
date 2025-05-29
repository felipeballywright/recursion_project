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

const allTheSortedArr = [];

function mergeSort(arr){

    if(arr.length > 2){
        console.log("arr.length > 2");
      const mid = Math.ceil(arr.length / 2);

      const firstHalf = arr.slice(0, mid);
      console.log("1st half is", firstHalf);

      const secondHalf = arr.slice(mid);
      console.log("2nd half is", secondHalf);

      mergeSort(firstHalf);
      mergeSort(secondHalf);
    } else if(arr.length === 2){
        let sortedArr = [];
        arr[0] > arr[1] ? sortedArr = [arr[1], arr[0]] : sortedArr = [arr[0], arr[1]];

        console.log("The sorted arr is", sortedArr);
        return sortedArr
    }
}

// const testOne = [4, 2, 5, 1];
const testTwo = [3, 2, 1, 13, 8, 5, 0, 1];
mergeSort(testTwo);