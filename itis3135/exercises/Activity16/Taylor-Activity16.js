$(document).ready(function(){
    // URL found at https://www.flickr.com/services/feeds/docs/photos_public/
    var url = "http://www.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding"
    $.getJSON(url, function(data){
        var html = "";
        $.each(data.items, function(i, item){
            html += "<a href= \" " + item.media.m + "\" data-lightbox = \"images\" data-title=" 
            + item.title + "><img src=" + item.media.m + "></a>";
        });
        $("#new_building").html(html);
    });
});