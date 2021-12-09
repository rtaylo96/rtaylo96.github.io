$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "districtList.json",
        beforeSend: function(){
            $("#district").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error){
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#district").html("");
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#district").append(
                        "<p>" + "<strong>" + value.title + ":</strong> " +
                        value.full_name + " <a href=\"mailto:" + value.email + "\"> " +
                        value.email + "</a>" + "</p>"
                    )
                })
            });
        }
    });
});