//get the values from the Page
//start or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //paste into int
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        let numbers =  generateNumbers(startValue, endValue);        
        //we call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter numbers")
    }

}

//generate numbfers from the start value to the end value
//logic function(s)
function generateNumbers(startValue, endValue){
    let numbers = [];

    //we want to get all nunbers from the start to end
    for (let index = startValue; index <= endValue; index++) {
        //this will execute in a loop until index = endValue
        numbers.push(index);
        
    }
    return numbers;
}

//display the numbers and mark even number bold
//display or view functions
function displayNumbers(numbers){

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];
        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}