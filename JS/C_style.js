$(".search-input").focus();

$(".carousel").carousel();

// more & less controller for resrouce-section

$(".desktop .resource-more-btn").click(function() {
    $(".desktop .resource-list").slice(1, 3).removeClass("notVisible");
    $(this).toggle();
    $(".resource-less-btn").toggle();
});
$(".desktop .resource-less-btn").click(function() {
    $(".desktop .resource-list").slice(1, 3).addClass("notVisible");
    $(this).toggle();
    $(".resource-more-btn").toggle();

});


// toggle search-bar on mobile
$(".search-toggle").click(function(event) {
    event.stopPropagation();
    $(".search-popup").toggle();
    // $(".search-input").focus();
});
$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is(".search-popup") && !$(target).parents().is(".search-popup")) {
        $(".search-popup").hide();
    }
});

// $(".close-nav").click(function(){
//     $(".ecorcoran-nav-list").toggle();
// });
$(".navbar-toggle").click(function(){
    $(".ecorcoran-nav-list").toggle();
});

// $(document).click(function(e) {
//     var target = e.target;
//     if (!$(target).is(".ecorcoran-nav-list") && !$(target).parents().is(".ecorcoran-nav-list")) {
//         $(".ecorcoran-nav-list ").hide();
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
    $(".ecorcoran-nav-list").hide();
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





