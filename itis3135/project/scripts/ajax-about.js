$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "aboutList.json",
        beforeSend: function(){
            $("#information").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error){
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#information").html("");
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#information").append(
                        "<h3>" + value.title + "</h3>" +
                        "<p>" + value.info + "</p>"
                    )
                })
            });
        }
    });
});