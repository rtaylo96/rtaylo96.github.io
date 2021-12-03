$(document).ready(function(){
    $('#interest-form').validate({
        rules: {
            name: "required",
            school: "required",
            email:{
                required: true,
                email: true
            },
        },
        messages: {
            name: "This field is required",
            school: "Please enter UNCC or CPCC",
            email: "Enter a valid email"
        },
        errorPlacement: function (error, element){
            error.appendTo('#err');
        },
        submitHandler: function(form){
            form.submit();
        }
    });
});

// for some reason the error messages are not showing...