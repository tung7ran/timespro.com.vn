$(document).ready(function(){
    $('.btn--more').on('click', function() {
      $('.open--options').fadeToggle("slow");
    });
    /**
     * tab UI -> Home
     */
    $('.bds--options--heading__list--item').click(function(){
      $('.bds--options--heading__list--item').removeClass("active");
      $(this).addClass("active");
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
            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 5,
                }
              },
              {
                breakpoint: 741,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 376,
                settings: {
                  slidesToShow: 2,
                }
              }
            ]
      });
      $('.module-content--list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-sharp fa-solid fa-angles-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-left'><i class='fa-sharp fa-solid fa-angles-right'></i></button>",
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 741,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    /**
     * click header button
     */
    $('.select-control-label__title:not(:only-child)').click(function(e) {
        $(this).siblings('.custom-dropbox-cate').toggle();
        // Close one dropdown when selecting another
        $('.custom-dropbox-cate').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.custom-dropbox-cate').hide();
      });
      $('#nav-toggle').click(function() {
        $('.select-control').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
      //  show/hide content desc
    jQuery('.subpage-readmore-btn').click(function(e) {
      e.preventDefault();
      console.log('click');
      jQuery('.subpage-exp-content').slideToggle('slow');
      jQuery(this).text(jQuery(this).text() == 'Thu gọn ' ? 'Xem thêm' : 'Thu gọn ');
    });
    // pagesale
    $(".categories").on("click", ".categories--heading", function() {
      $(this).toggleClass("active").next().slideToggle();
      $(".categories--list").not($(this).next()).slideUp(300);
      $(this).siblings().removeClass("active");
      });
      // additions quantity
      var n = 0; //n is equal to 1
      $('#qty-room').val(n);
      //On click add 1 to n
      $('.plus').on('click', function(){
        $('#qty-room').val(++n);
      });
      $('.min').on('click', function(){
        if(n >= 1){
          $('#qty-room').val(--n);
        }else{}
      });
      var m = 0;
       $('#bathroom').val(m);
       $('.add-quantity').on('click', function(){
        $('#bathroom').val(++m);
      });
      $('.reduce-quantity').on('click', function(){
        if(m >= 1){
          $('#bathroom').val(--m);
        }
      });
      /**
       * recruit
       */
       $(".location--heading").click(function () {
        var current_li = $(this).parent();
        $(".location--body").each(function(i, el) {			
          if($(el).parent().is(current_li)) {				
            $(el).prev().toggleClass("plus");
            $(el).slideToggle();				
          } else{
            $(el).prev().removeClass("plus");
            $(el).slideUp();
          }
        });
      });
      $('.location--body').hide();

      // Click UI edit-information
      $('.categories--list__item:first-child').addClass('active');
      $('.tabs--item').hide();
      $('.tabs--item:first').show();
      // Click function
      $('.categories--list__item').click(function(){
      $('.categories--list__item').removeClass('active');
      $(this).addClass('active');
      $('.tabs--item').hide();
      var activeTabEdit = $(this).find('a').attr('href');
      $(activeTabEdit).fadeIn();
      return false;
      });
      /**
       * show more box 
       */
       $('.menu-more-image:not(:only-child)').click(function(e) {
        $(this).siblings('.morebox').toggle();
        // Close one dropdown when selecting another
        $('.morebox').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.morebox').hide();
      });
      
/**
 * Show more post news
 */
 // Click UI edit-information
 $('.manage-menu--list__item:first-child').addClass('active');
 $('.posts--item').hide();
 $('.posts--item:first').show();
 // Click function
 $('.manage-menu--list__item').click(function(){
 $('.manage-menu--list__item').removeClass('active');
 $(this).addClass('active');
 $('.posts--item').hide();
 var activeTabEdit = $(this).find('a').attr('href');
 $(activeTabEdit).fadeIn();
 return false;
 });
 /**
  * modal
  */
  $('.modal-tabs-list__item:first-child').addClass('active');
  $('.tabs--list').hide();
  $('.tabs--list:first').show();
  // Click function
  $('.modal-tabs-list__item').click(function(){
  $('.modal-tabs-list__item').removeClass('active');
  $(this).addClass('active');
  $('.tabs--list').hide();
  var activeTabsModal = $(this).find('a').attr('href');
  $(activeTabsModal).fadeIn();
  return false;
  });
  /**
   * click modal
   */
   var $modal = $('.form--post-modal');
   $('.btn-continue').on('click', openModal);
   $modal
     .on('click', closeModal)
     .on('click', '.exit-modal', closeModal)
     .on('click', '.form--post__inner', function(event) {
     event.stopPropagation();  // prevent closing the modal window when user clicks on the window itself
   });
   function closeModal() {
     $modal.fadeOut();
   };
   function openModal() {
     $modal.fadeIn();
   };
/**
 * Slide page tin tuc chi tiet
 */
 $('.reportage--all--interested__all').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows:true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 375,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    }
  ]
});

   /**
    * click show menu table & mobile
    */
   $('.js-mobile-btn').click(function(){
     $('.js-mobile-menu').addClass('show');
     $('.mobile-menu-overlay').addClass('show');
    })
    $('.mobile-menu-overlay').click(function(){
      $('.js-mobile-menu').removeClass('show');
      $('.mobile-menu-overlay').removeClass('show');
    })
    /**
     * click show sub menu
     */
    
     $(".header--menu--nav__list--item").on("click", ".header--menu--nav__list--item--link", function() {
      $(this).toggleClass(".sub--nav.block").next().slideToggle();
      $(".sub--nav").not($(this).next()).slideUp(100);
      $(this).siblings().removeClass(".sub--nav.block");
      });
      /**
       * click button post news
       */
       $('.search-bar--box--item').click(function(){
        $('.search-bar--box--item').removeClass("active");
        $(this).addClass("active");
    });
});
     
