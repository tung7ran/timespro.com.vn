$(document).ready(function(){
   

    $('.btn--more').click(function(){
        $('.open--options').toggle();
    })

    // slick slide
    $('.investor--group').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true, 
            autoplaySpeed: 1500,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-sharp fa-solid fa-angles-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-left'><i class='fa-sharp fa-solid fa-angles-right'></i></button>",

    });
});
