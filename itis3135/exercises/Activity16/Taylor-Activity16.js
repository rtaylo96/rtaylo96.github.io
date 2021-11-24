$(document).ready(function(){
    // URL found at https://www.flickr.com/services/feeds/docs/photos_public/
    var url = "http://www.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
    $.getJSON(url, function(data){
        var html = "";
        $.each(this, function(key, value){
            html += "<a href= \" " + value.media.m + "\" data-lightbox = \"images\" data-title=" 
            + value.title + "><img src=" + value.media.m + "></a>";
        });
        $("#new_building").html(html);
    });
});