var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
    
};

function updateCalorie() {
    var calorie = document.getElementById("calorie").value;
    if (calorie != 0){
        if(document.getElementById("monday").checked){
            calories[0] = calorie;
        } else if (document.getElementById("tuesday").checked){
            calories[1] = calorie;
        } else if (document.getElementById("wednesday").checked){
            calories[2] = calorie;
        } else if (document.getElementById("thursday").checked){
            calories[3] = calorie;
        } else if (document.getElementById("friday").checked){
            calories[4] = calorie;
        } else if (document.getElementById("saturday").checked){
            calories[5] = calorie;
        } else if (document.getElementById("sunday").checked){
            calories[6] = calorie;
        } else {
            alert("Please select a day");
        }
        alert("Your updated calories details are: " + calories);
        document.getElementsById("calorie").reset();
    } else {
        alert("Enter a valid number");
    }
}

function showAverageCalories() {
    var result = 0;
    var i;
    for (i = 0; i < calories.length; i++){
        result += calories[i];
    }
    var avg = result / calories.length;
    document.getElementById("average-calorie").value = avg;
    document.getElementById("average-calorie").style.color = "green";
    document.getElementById("average-calorie").style.backgroundColor = "transparent";
}

function showMax() {
    // Unsure how to do this one
    // I'm assuming it is with JQuery
}