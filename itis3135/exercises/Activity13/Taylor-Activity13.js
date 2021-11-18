$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json", // changed from team.xml to team.json
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json", // changed from xml to json
        success: function(data) {
            $("#team").html("");
            // XML
            // $(data).find("management").children().each(function() {
            //    var xmlDoc = $(this);
            //    $("#team").append
            //    ("<h3>" + xmlDoc.find("name").text() + "</h3>" +
            //          xmlDoc.find("title").text() + "<br>" +
            //            xmlDoc.find("bio").text() + "<br>");
            //});
            
            // JSON Murach Page 421
            $.each(data, function(){
                $.each(this, function(key, value){
                    $('#team').append(
                        '<h3>' + value.name + '</h3>' +
                        value.title + '<br>' +
                        value.bio + '<br>' + 
                        '<br>'
                    );
                });
            });
        }
    });
});
