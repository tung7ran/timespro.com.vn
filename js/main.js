$(document).ready(function(){
   

    // $('.btn--more').click(function(){
    //     $('.open--options').toggle();
    // });
    $('.btn--more').on('click', function() {
      $('.open--options').fadeToggle("slow");
        });
    /**
     * tab UI -> Home
     */
 
    $('.bds--options--heading__list bds--options--heading__list--item:first-child').addClass('active');
    $('.bds--options--container').hide();
    $('.bds--options--container:first').show();

    // Click function
    $('.bds--options--heading__list--item').click(function(){
    $('.bds--options--heading__list--item').removeClass('active');
    $(this).addClass('active');
    $('.bds--options--container').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
    });

    /**
     * Tab UI page duan
     */
    $('.project--heading--list__item:first-child').addClass('active');
    $('.project--content').hide();
    $('.project--content:first').show();
    
    // Click function
    $('.project--heading--list__item').click(function(){
    $('.project--heading--list__item').removeClass('active');
    $(this).addClass('active');
    $('.project--content').hide();
    
    var activeTabProject = $(this).find('a').attr('href');
    $(activeTabProject).fadeIn();
    return false;
    });
    /**
     * slick slide -> HOME
     */
 
    $('.investor--group').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true, 
            autoplaySpeed: 1500,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-sharp fa-solid fa-angles-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-left'><i class='fa-sharp fa-solid fa-angles-right'></i></button>",

    });

      $(".select-control-label__title").click (function(){
        // Close all open windows
        $(".custom-dropbox-cate").stop().slideUp(300); 
        // Toggle this window open/close
        $(this).next(".custom-dropbox-cate").stop().slideToggle(300);
        
      });

     
});
