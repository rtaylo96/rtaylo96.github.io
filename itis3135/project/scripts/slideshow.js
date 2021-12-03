$(document).ready(function(){
    // create an array of the slide images
    var image, imageCounter = 0, imageCache = [];
    $("#slides img").each(function(){
        image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        imageCache[imageCounter] = image;
        imageCounter++;
    });
    //start slide show
    imageCounter = 0;
    var nextImage;
    setInterval(function(){
        $("#caption").fadeOut(2000);
        $("#current").fadeOut(2000,
            function(){
                imageCounter = (imageCounter + 1) % imageCache.length;
                nextImage = imageCache[imageCounter];
                $("#current").attr("src",
                    nextImage.src).fadeIn(2000);
                $("#caption").text(
                    nextImage.title).fadeIn(2000);
            }
        );
    }, 
    5000);
});

// The above code was adapted from Murach's JavaScript and jQuery (3rd Ed.) Chapter 9