$('.multi-select-dropdown').multiselect();

$(".search-input").focus();

$(".carousel").carousel({
    interval: false
});

//menu toggel on mobile
$(".close-nav").click(function() {
    $(".ecorcoran-nav-list").hide('slide', { direction: 'left' }, 300);
    $(".menu-dimmer").fadeOut("slow");
});
$(".navbar-toggle").click(function() {
    $(".ecorcoran-nav-list").show('slide', { direction: 'left' }, 300);
    $(".menu-dimmer").fadeIn("slow");
});


$(".ui-autocomplete").width($(".search-wrapper").width());


//show or hide carousel conditionally
$(".carousel-control.left").hide();
var Index_Of_Active = 1;
$(".carousel-control.left").click(function() {
    Index_Of_Active--;
});
$(".carousel-control.right").click(function() {
    Index_Of_Active++;
});
$('#section-resource-mobile').on('slide.bs.carousel', function() {
    var carousel_Length = $('#section-resource-mobile .item').length;
    if (Index_Of_Active > 1 && Index_Of_Active < carousel_Length) {
        $(".carousel-control.left").show();
        $(".carousel-control.right").show();
    } else if (Index_Of_Active == 1) {
        $(".carousel-control.left").hide();
        $(".carousel-control.right").show();
    } else if (Index_Of_Active == carousel_Length) {
        $(".carousel-control.left").show();
        $(".carousel-control.right").hide();
    }
    console.log("Index_Of_Active=" + Index_Of_Active);
});



// more & less controller for resrouce-section
$(".resource-desktop .resource-list-toggle").hide();
$(".resource-desktop .resource-more-btn").click(function() {
    $(".resource-desktop .resource-list-toggle").slideDown(400);
    $(".resource-desktop .resource-list-toggle").removeClass('fadeEffect');
    $(this).toggle();
    $(".resource-less-btn").toggle();
});
$(".resource-desktop .resource-less-btn").click(function() {
    $(".resource-desktop .resource-list-toggle").slideUp(400);
    $(".resource-desktop .resource-list-toggle").addClass('fadeEffect');
    $(this).toggle();
    $(".resource-more-btn").toggle();
});


// toggle search-bar on mobile
$(".search-toggle").click(function(event) {
    // event.stopPropagation();
    $(".search-popup").toggle('slide', { direction: 'up' }, 500);
    $(this).children('.close-search').toggle();
    $(this).children('.open-search').toggle();
    $(".search-popup").toggleClass('isOpen');
    // $(".search-input").focus();
});

// console.log($(".search-popup").hasClass('isOpen'));
// $(document).click(function(e) {
//     var target = e.target;
//     if ($(".search-popup").hasClass('isOpen')) {
//         console.log($(".search-popup").hasClass('isOpen'));

//         if (!$(target).is(".search-popup") && !$(target).parents().is(".search-popup")) {
//             $(".search-popup").hide();
//         }
//     }

// });

// if ($(window).width() >= 992) {
$(".default-section:nth-child(even)").addClass('title-left');
$(".default-section:nth-child(odd)").addClass('title-right');
// }


// jump to sections on desktop
function goTo(target_ID, el) {
    var ID = "#" + target_ID;
    var destination = $(ID).offset().top - 50;
    $('body, html').animate({ scrollTop: destination }, '700');
    $(el).toggleClass('active');
    $(el).siblings('li').removeClass('active');
    if ($(window).width() <= 768) {
        $(".ecorcoran-nav-list").hide('slide', { direction: 'left' }, 300);
        $(".menu-dimmer").fadeOut("slow");
    }
}


// click effect in search-result page
$(".section-list-item").click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

});

//show search-bar in top-header on desktop
$(window).scroll(function() {
    var header_bottom = $(window).scrollTop() + 60;
    var search_bar_top = $('#search-bar-top').offset().top;
    var title_top = $('#page-title-top').offset().top;
    if ($(window).width() >= 768) {
        if (header_bottom > search_bar_top) {
            $('.search-bar').addClass('stick');
            $('#search-bar-top').height($('.search-bar').outerHeight());
        } else {
            $('.search-bar').removeClass('stick');
            $('#search-bar-top').height(0);
        }
        if (header_bottom > title_top) {
            $('.page-title').fadeOut("fast");
        } else {
            $('.page-title').show();
        }
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 190) {
    $(".section-list-wrapper").addClass("fixedPosition");
  } else {
    $(".section-list-wrapper").removeClass("fixedPosition");
  }
});

//load-more-btn on search page
$(".load-more-files").click(function(){
    $(".groupOf12.hiddenFiles").first().removeClass('hiddenFiles');
    $(".load-more-btn-wrapper").slideDown("slow");
    if($(".groupOf12.hiddenFiles").length == 0)
        $(this).hide();
});

//goto search result page
// $(".view-all-btn").click(function() {
//     window.location.href = "searchResult.html";
// });
