<!-- Control Play and Pause Buttons on Carousel -->
$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});
    // Detect the state of the button using a jQuery selector, children and class
    // Based on the state, change the button, and perform action on carousel
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        }
        else if($("#carousel-button").children("span").hasClass("fa-play")){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
    });
});
