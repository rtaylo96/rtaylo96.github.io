// create a variable to hold the prompt answer
let numberOfSides = prompt("Rapid Tree Frog Industries would like a number: ");

// create a variable to hold the validated number after calling the function
let newNumberOfSides = validateEntry(numberOfSides);

// call the getShape funciton
getShape(newNumberOfSides);

function getShape(numberOfSides){
    if (numberOfSides == 10)
        {
            return alert("Your polygon is a decagon");
        } else if (numberOfSides == 9)
        {
            return alert("Your polygon is a enneagon");
        } else if (numberOfSides == 8)
        {
            return alert("Your polygon is a octagon");
        } else if (numberOfSides == 7)
        {
            return alert("Your polygon is a heptagon");
        } else if (numberOfSides == 6)
        {
            return alert("Your polygon is a hexagon");
        } else if (numberOfSides == 5)
        {
            return alert("Your polygon is a pentagon");
        } else if (numberOfSides == 4)
        {
            return alert("Your polygon is a tetragon");
        } else if (numberOfSides == 3)
        {
            return alert("Your polygon is a trigon");
        } else if (numberOfSides == 2)
        {
            return alert("Your polygon is a digon");
        } else if (numberOfSides == 1)
        {
            return alert("Your polygon is a henagon");
        } else {
            return alert("There is no polygon with 0 sides!")
        }
}

function validateEntry(numberOfSides){
    var newNumberOfSides = Math.abs(numberOfSides);
    newNumberOfSides = Math.round(newNumberOfSides);
    do
    {
        if(newNumberOfSides < 0 || newNumberOfSides > 10){
            newNumberOfSides = prompt("Rapid Tree Frog Industries would like a number between 0 and 10:");
        }
    } while (newNumberOfSides > 10)
    return newNumberOfSides;
}