console.log("usman");


$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav2 = $(".navbar-brand");
        $nav2.toggleClass('scrolled', $(this).scrollTop() > $nav2.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav3 = $(".navbar-nav");
        $nav3.toggleClass('scrolled', $(this).scrollTop() > $nav3.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".navbar-light .navbar-nav .nav-link");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".logo1");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".navbar-toggler");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});



/*================== Read More Text ==================*/
$(function () {
    var showChar = 110;
    var moretext = " ...";
    var lesstext = " ... less";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content +
                '</span><a href="" class="morelinks link-style" >' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
//$(function () {
//    var showChar = 178;
//    var moretext = "Read More";
//    var lesstext = "Read Less";
//    $('.comments-spaces').each(function () {
//        var content = $(this).html();
//        if (content.length > showChar) {
//            var show_content = content.substr(0, showChar);
//            var hide_content = content.substr(showChar, content.length - showChar);
//            var html = show_content + '<span class="remaining-contents"><span>' + hide_content +
//                '</span><a href="" class="morelinkss btn btn-more-load link-style mt-45 btn-r-0" style="display:block;" >' + moretext + '</a>'
//                + '</span>';
//            $(this).html(html);
//        }
//    });

//    $(".morelinkss").click(function () {

//        if ($(this).hasClass("less")) {
//            $(this).removeClass("less");
//            $(this).html(moretext);
//        } else {
//            $(this).addClass("less");
//            $(this).html(lesstext);
//        }
//        $(this).parent().prev().toggle();
//        $(this).prev().toggle();
//        return false;
//    });
//});

/*===================== Load More Images ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-link').on('click',
        function () {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        });
});

/*======================= Load Section Function =======================*/
//var counters = [];
//counters = $(".counter-value");
//var countersQuantity = counters.length;
//console.log(counters + "," + countersQuantity);
//var counter = [];

//for (i = 0; i < countersQuantity; i++) {
//    counter[i] = parseInt(counters[i].innerHTML);
//}
//var count = function (start, value, id) {
//    var localStart = start;
//    setInterval(function () {
//        if (localStart < value) {
//            localStart++;
//            counters[id].innerHTML = localStart;
//        }
//    }, 1);
//}
//var cond = true;
//requestScrollAnimation((pos) => {
//    var elAlert = document.getElementById("counter-section");
//    var isVisible = isScrolledIntoView(elAlert, true);

//    if (isVisible) {
//        if (cond) {
//            for (var j = 0; j < countersQuantity; j++) {
//                count(0, counter[j], j);
//            }
//            cond = false;
//        }


//    }
//});


/* ==================== Js Function for the Date Picker ================== */
$(function () {
    $("#datepicker").datepicker();
});
/* ==================== Js Function to give the class on Scroll ================== */
//$(function () {
//    $(window).scroll(function () {
//        var scroll = $(window).scrollTop();

//        if (scroll >= 100) {
//            $("nav").addClass("fixed-top");
//        } else {
//            $("nav").removeClass("fixed-top ");
//        }
//    });
//});
//(function () {
//    $(window).scroll(function () {
//        var scroll = $(window).scrollTop();

//        if (scroll >= 100) {
//            $("#navbarNav ul").removeClass("nav-padding");
//        } else {
//            $("#navbarNav ul").addClass("nav-padding");
//        }
//    });
//});

/* ==================== Js Function For the Owl Carousel Slider ================== */
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        //autoplay: true,
        margin: 15,
        dots: true,
        responsiveClass: true,
        slideBy: '3',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});
/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 6,
        showItems: 3

    });

});

/*===================== Load More List Tabs  ======================*/
$(document).ready(function () {

    var list = $(".list .list-group-item");
    var numToShow = 1;
    var button = $("#next");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
        button.show();
    }
    list.slice(0, numToShow).show();

    button.click(function () {
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
    });

});
