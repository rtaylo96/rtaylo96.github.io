$(document).ready(function(){
    // create an array of the slide images
    var image, imageCounter = 0, imageCache = [];
    $("#slides img").each(function(){
        image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        imageCache[imageCounter] = image;
        imageCounter++;
    });
    //start slide show
    imageCounter = 0;
    var nextImage;
    setInterval(function(){
        $("#caption").fadeOut(2000);
        $("#current").fadeOut(2000,
            function(){
                imageCounter = (imageCounter + 1) % imageCache.length;
                nextImage = imageCache[imageCounter];
                $("#current").attr("src",
                    nextImage.src).fadeIn(2000);
                $("#caption").text(
                    nextImage.title).fadeIn(2000);
            }
        );
    }, 
    5000);
    // email validation pattern
    var validEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    // have a variable to test when to prevent default
    var valid = true;
    // have a variable for each school within the district
    var cpcc = "CPCC";
    var uncc = "UNCC";
    // submit button event handler for the form
    $("#interest-form").submit(
        function(event){
            alert("Thank you for your interest!");
        }
    );
});

// The above code was adapted from Murach's JavaScript and jQuery (3rd Ed.) Chapter 9

/**
 * Because of the placeholders the following validation code is broken...
 * // validate the name entry
            var name = $("#name").val().trim();
            if(name == ""){
                $("#name").next().text("Please enter a Name");
                valid = false;
            } else {
                $("#name").val(name);
                $("#name").next().text("");
            }
            $("#name").val(name);
            // validate the school
            var school = $("#school").val().trim();
            if(school == ""){
                $("#school").next().text("Please enter a school");
                valid = false;
            } else if ((school != cpcc) || (school != uncc)){
                $("#school").next().text("Please enter either CPCC or UNCC");
                valid = false;
            } else {
                $("#school").next().text("");
            }
            $("#school").val(school);
            // validate the email with the given pattern
            var email = $("#email").val().trim();
            if (email == ""){
                $("#email").next().text("Please enter an Email");
                valid = false;
            } else if (!validEmail.test(email)) {
                $("#email").next().test("Please enter a valid email address.");
                valid = false;
            } else {
                $("#email").next().text("");
            }
            $("#email").val(email);
            // prevent the submission of the form if any entries are invalid
            if (valid == false){
                event.preventDefault();
            }
 */