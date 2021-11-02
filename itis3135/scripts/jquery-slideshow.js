// js used for the slideshow, however it breaks without the script being in the html
// the following code has been adapted from www.youtube.com/watch?v=iCBBLAR3R-60
$(document).ready(function() {
    var imgs = new Array();
    var intervalID;

    $('#slideshow img').each(function() {
        imgs.push($(this).attr('src'));
    });

    function setImage() 
    {
        var active = $('#active');
        var currentImageURL = active.attr('src');
        var activeImage = $.inArray(currentImageURL, imgs);
        if(activeImage == (imgs.length - 1)){
            activeImage = -1;
        }

        active.attr('src', imgs[activeImage + 1]);
    }

    $(function(){
        intervalID = setInterval(setImage, 1500);
    });
});