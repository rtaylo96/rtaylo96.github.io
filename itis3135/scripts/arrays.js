const person = [];
const salaries = [];

function addSalary(){
    var x = document.getElementById("employee_name");
    var newPerson = x.selectedIndex;
    if (newPerson == 0){
        person.push("Tony Stark");
        salaries.push(8667);
    } else if (newPerson == 1){
        person.push("Steve Rodgers");
        salaries.push(10400);
    } else if (newPerson == 2){
        person.push("Chris Hemsworth");
        salaries.push(5200);
    } else if (newPerson == 3){
        person.push("Bruce Banner");
        salaries.push(6325);
    } else if (newPerson == 4){
        person.push("Natasha Romanoff");
        salaries.push(7560);
    } else if (newPerson == 5){
        person.push("Clint Barton");
        salaries.push(8420);
    } else if (newPerson == 6){
        person.push("Tom Hiddleson");
        salaries.push(6360);
    } else {
        alert("Please choose an Employee from the drop-down menu");
    }
}

function displayResults(){
    let result = 0;
    var i;
    for (i = 0; i < salaries.length(); i++)
    {
        result = result + salaries[i];
    }
    var average = result / salaries.length();
    var header = document.createElement("h2");
    header.innerHTML = "Results";
    document.getElementById("results").appendChild(header);
    var p1 = document.createElement("p");
    p1.innerHTML = "Average Salary: $" + average;
    document.getElementById("result").appendChild(p1);
    var p2 = document.createElement("p");
    p2.innerHTML = "Max Salary: $" + Math.max(... salaries);
    document.getElementById("result").appendChild(p2);

}

function displaySalaries(){
    var i;
    for (i = 0; i < salaries.length(); i++)
    {
        var tableHead = document.createElement("thead");
        tableHead.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
        document.getElementById("results_table").appendChild(tableHead);
        var tableBody = document.createElement("tbody");
        tableBody.innerHTML = "<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>";
    }
}