$(document).ready(function(){
    $('form[id="interest-form"]').validate({
        rules: {
            name: 'required',
            school: 'required',
            email:{
                required: true,
                email: true,
            }
        },
        messages: {
            name: 'This field is required',
            school: 'Please enter UNCC or CPCC',
            email: 'Enter a valid email'
        },
        submitHandler: function(form){
            form.submit();
        }
    });
    alert('Thank you for your interest!');
});