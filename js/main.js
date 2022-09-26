$(document).ready(function(){
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
      $('.module-content--list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-sharp fa-solid fa-angles-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-left'><i class='fa-sharp fa-solid fa-angles-right'></i></button>",
    });

    /**
     * click header button
     */
      $(".select-control-label__title").click (function(){
        // Close all open windows
        $(".custom-dropbox-cate").stop().slideDown(300); 
        // Toggle this window open/close
        $(this).next(".custom-dropbox-cate").stop().slideToggle(300);
      });
      $(document).click(function(){
        $(".custom-dropbox-cate").stop().slideUp(300); 
      })
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
});
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
      $(".menu-more-image").click (function(){
          // Close all open windows
          $(".morebox").stop().slideDown(300); 
          // Toggle this window open/close
          $(this).next(".morebox").stop().slideToggle(300);
        });
        $(this).click(function(){
          $(".morebox").stop().slideUp(300); 
        })
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
     
