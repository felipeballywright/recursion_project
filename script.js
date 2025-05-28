function fibs(){
    const userInput = document.getElementById("user-input").value;
    if(userInput > 20){
        alert("Enter a number less than 20");
        return
    } else if(userInput < 2){
        alert("Enter a number greater than 1");
        return
    }
    const arr = [];
    // for(let i = 0; arr.length < userInput + 1; ){

    // }
}

const submitBtn = document.querySelector("#submit-button");
submitBtn.addEventListener("click", fibs);