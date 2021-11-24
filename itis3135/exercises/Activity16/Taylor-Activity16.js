$(document).ready(function(){
    // URL found at https://www.flickr.com/services/feeds/docs/photos_public/
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding"
    $.getJSON(url, function(data){
        var html = "";
        $.each(data.items, function(i, item){
            html += "<a href=" + item.media.m + " data-lightbox=buildingImages data-title="
            + '"' + item.title + '"' + ">"
            + "<img src=" + item.media.m + " alt=" 
            + '"' + item.title + '"' + ">" 
            + "</a>";
        });
        $("#new_building").html(html);
    });
});