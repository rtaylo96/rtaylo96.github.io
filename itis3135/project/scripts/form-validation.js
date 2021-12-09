$(document).ready(function(){
    // regular expression for emails
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    // move the focus to the first text box
    $("#name").focus();


    $("#interest-form").submit({
        function(event) {
            var isValid = true;

            // validate name
            var name = $("#name").val().trim();
            if (name === "") {
                $("#name").next().text("Required");
                isValid = false;
            } else {
                $("#name").val(name);
                $("#name").next().text("");
            }
            $("#name").val(name);
            console.log("Name Validated");

            // validate school
            var school = $("#school").val().trim();
            if (school === "") {
                $("#school").next().text("Required");
                isValid = false;
            } else if (school != "UNCC" || school != "CPCC") {
                $("#school").next().text("Please enter UNCC or CPCC");
                isValid = false;
            } else {
                $("#school").val(school);
                $("#school").next().text("");
            }
            $("#school").val(school);
            console.log("School Validated");

            // validate email
            var email = $("#email").val().trim();
            if (email === ""){
                $("#email").next().text("Required");
                isValid = false;
            } else if (!emailPattern.test(email)){
                $("#email").next().text("Please Enter a valid email address");
                isValid = false;
            } else {
                $("#email").next().text("");
            }
            $("#email").val(email);
            console.log("Email Validated");

            //prevent the submission of the form if any entries are invalid
            if (isValid == false){
                event.preventDefault();
            }
        }
    });
});

// opening the console an error is thrown and I am unsure how to debug it.
// Error:
// Uncaught TypeError: ((S.event.special[o.origType] || {}).handle ||
// o.handler).apply is not a function
//  at HTMLFormElement.dispatch (jquery-3.1.1.min.js:3)
//  at HTMLFormElement.v.handle (jquery-3.1.1.min.js:3)