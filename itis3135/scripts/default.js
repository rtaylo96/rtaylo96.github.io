// function based off of w3schools.com/js/tryit.asp?filename=tryjs_prompt
const name = window.prompt("Please enter your first and last name: "); 
const userMood = window.prompt("How are you doing today?");
function userInformation(userName, mood){
    let userText, moodText;
    let company = "Rapid Tree Frog Industries";
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("date-and-time").innerHTML = "Today is " + today.toDateString() + ", and the time is " + time;

    if (userName == null || userName == "")
    {
        userText = "User cancelled the prompt";
    } else {
        userText = "The " + company + " Team welcomes you, " + userName + "!";
    }
    document.getElementById("welcome").innerHTML = userText;

    if (mood == null || mood == "")
    {
        moodText = "User cancelled the prompt";
    } else {
        moodText = "We're glad you are doing " + mood + "!";
    }
    document.getElementById("mood").innerHTML = moodText;
}

function joke(){
    let jokeText;
    let userJoke = prompt("Give us a joke!");
    if (userJoke == null || userJoke == "")
    {
        jokeText = "User cancelled the prompt to tell a joke";
    } else {
        jokeText = "Joke of the day! -> " + userJoke;
    }
    document.getElementById("joke").innerHTML = jokeText;
}

function toCelsius(){
    let celsiusText, celsius;
    let fahrenheit = prompt("Give us a temperature!");
    if(fahrenheit == null || fahrenheit == "")
    {
        celsiusText = "User cancelled the prompt to convert to celsius";
    } else {
        celsius = (5/9) * (fahrenheit - 32);
        celsiusText = "The temperature is " + celsius + " Celsius";
    }
    document.getElementById("celsius").innerHTML = celsiusText;
}

function addition(){
    let text;
    var sum = 0;
    var x = prompt("Give us a number between -100 and 100: ");
    var y = prompt("Give us a second number between -100 and 100");
    if(x == null || x == "")
    {
        text = "User cancelled the prompt to give the first number";
    } else if (y == null || y == "")
    {
        text = "User cancelled the prompt to give the second number";
    } else {
        x = parseInt(x);
        y = parseInt(y);
        sum = x + y;
        text = "Adding " + x + " by " + y + " equals " + sum;
    }
    document.getElementById("addition").innerHTML = text;
}

function noise(){
    let text;
    let noise = prompt("Give us random onomatopeia!");
    if(noise == null || noise == "")
    {
        text = "User cancelled the prompt to give a random noise";
    } else {
        text = "Did you know that tree frogs make the noise " + noise + "!? Isn't that silly?";
    }
    document.getElementById("noise").innerHTML = text;
}

function favoriteAvenger(){
    let text; 
    alert("Iron Man\nCaptain America\nHulk\nThor\nBlack Widow\nHawkeye\nLoki")
    let avenger = prompt("Between the Avengers Listed, who is your favorite?");
    if(avenger == null || avenger == "")
    {
        text = "User cancelled the prompt to give their favorite avenger";
    } else {
        text = "Employee of the Month: " + avenger;
    }
    document.getElementById("avenger").innerHTML = text;
}


// jquery-videos code

$ (function() {
    //$('li').css('color', 'red');
    //$('li').addClass('alert');
    //$('li').removeClass('alert');
    //$('li:first').addClass('alert');
    //$('li:last').addClass('alert');
    //$('li:even').addClass('alert');
    //$('li:odd').addClass('alert');
    //$('li:nth-child(4)').addClass('alert'); (returns 4)
    //$('li:eq(4)').addClass('alert'); (returns 5)
    //$('li a[title=title]').addClass('alert');
    $('li > a').addClass('alert');
});