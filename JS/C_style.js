$('.multi-select-dropdown').multiselect();

$(".search-input").focus();

$(".carousel").carousel({
    interval: false
});



//make the dot-nav vertically centered on desktop view
var NavTopOffset = $(".ecorcoran-nav-list").outerHeight() / 2;
NavTopOffset = -NavTopOffset;
$(".ecorcoran-nav-list").css("margin-top", NavTopOffset);



//menu toggel on mobile
$(".close-nav").click(function() {
    $(".ecorcoran-nav-list").hide('slide', { direction: 'left' }, 300);
    $(".menu-dimmer").fadeOut("slow");
});
$(".navbar-toggle").click(function() {
    if ($(".search-popup").hasClass('isOpen')) {
        close_mobile_search();
    }
    $(".ecorcoran-nav-list").show('slide', { direction: 'left' }, 300);
    $(".menu-dimmer").fadeIn("slow");
});
//dismiss menu on mobile when clicking anywhere else
$(".menu-dimmer").click(function() {
    $(".ecorcoran-nav-list").hide('slide', { direction: 'left' }, 300);
    $(".menu-dimmer").fadeOut("slow");
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
$(".resource-desktop .resource-list-toggle").addClass('fadeEffect');
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
    if (!$(".search-popup").hasClass('isOpen'))
        open_mobile_search();
    else
        close_mobile_search();
});

//dismiss menu on mobile when clicking anywhere else
$(".mobile-search-dimmer").click(function() {
    close_mobile_search();
});

function open_mobile_search() {
    $(".mobile-search-dimmer").fadeIn("slow");
    $(".search-popup").slideDown(400);
    $(".search-popup").addClass('isOpen');
    $(".search-toggle").children('.close-search').show();
    $(".search-toggle").children('.open-search').hide();
    // $(".search-input").focus();
}

function close_mobile_search() {
    $(".mobile-search-dimmer").fadeOut("slow");
    $(".search-popup").slideUp(400);
    $(".search-popup").removeClass('isOpen');
    $(".search-toggle").children('.close-search').hide();
    $(".search-toggle").children('.open-search').show();
}

// if ($(window).width() >= 992) {
$(".default-section:nth-child(even)").addClass('title-left');
$(".default-section:nth-child(odd)").addClass('title-right');
// }


// jump to sections on desktop & mobile and close the menu after goto the destination
function goTo(target_ID, el) {
    var ID = "." + target_ID;
    var destination = $(ID).offset().top - 50;
    $('body, html').animate({ scrollTop: destination }, 600);
    console.log("moving from GOTO");
    $(el).addClass('active');
    $(el).siblings('li').removeClass('active');
    if ($(window).width() <= 768) {
        $(".ecorcoran-nav-list").hide('slide', { direction: 'left' }, 350);
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
    var header_bottom = $(window).scrollTop() + 50;
    var search_bar_top = $('#search-bar-top').offset().top;
    var title_top = $('#page-title-top').offset().top + 15;
    if ($(window).width() >= 768) {
        if (header_bottom > title_top) {
            $('.page-title').fadeOut("fast");
            $('.search-bar').addClass('stick');
            $('#search-bar-top').height($('.search-bar').outerHeight());
        } else {
            $('.search-bar').removeClass('stick');
            $('#search-bar-top').height(0);
            $('.page-title').show();
        }
    }
});

$(window).scroll(function() {
    var bottomOfSectionList = $(".section-list-wrapper").position().top + $(".section-list-wrapper").outerHeight();
    var topOfFooter = $(".footer").position().top - $(window).scrollTop();
    console.log("bottomOfSectionList" + bottomOfSectionList);
    console.log("topOfFooter" + topOfFooter);
    if ($(window).scrollTop() > 190) {
        $(".section-list-wrapper").addClass("fixedPosition");
        if ((topOfFooter - 40) <= bottomOfSectionList) {
            $(".section-list-wrapper").removeClass("fixedPosition");
            $(".section-list-wrapper").addClass("fixedBottom");
        } else {
            $(".section-list-wrapper").addClass("fixedPosition");
            $(".section-list-wrapper").removeClass("fixedBottom");
        }

    } else {
        $(".section-list-wrapper").removeClass("fixedPosition");
    }



});

//load-more-btn on search page
$(".load-more-files").click(function() {
    $(".groupOf12.hiddenFiles").first().removeClass('hiddenFiles');
    $(".load-more-btn-wrapper").slideDown("slow");
    if ($(".groupOf12.hiddenFiles").length == 0)
        $(this).hide();
});

// move_autocomplete_dropdown();

// function move_autocomplete_dropdown() {
//     $("#ui-id-1").appendTo('.mobile-search-dropdown .search-wrapper');
//     $("#ui-id-1").css({
//         "position": "absolute",
//         "top": "0px",
//         "text-align": "left"
//     });

//     $("#ui-id-2").appendTo('.desktop-search .search-wrapper');
//     $("#ui-id-2").css({
//         "position": "absolute",
//         "top": "0px",
//         "text-align": "left"
//     });
// }
// $("#ui-id-1").appendTo('.mobile-search-dropdown .search-wrapper');
// $("#ui-id-1").css({
//     "position":"absolute",
//     "top":"0px",
//     "text-align":"left"

// });

// $("#ui-id-2").appendTo('.desktop-search .search-wrapper');
// $("#ui-id-2").css({
//     "position":"absolute",
//     "top":"0px",
//     "text-align":"left"
