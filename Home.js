"use strict";

$(window).on('load', function () {
    $('.events').carousel('pause');

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#navBar',
        offset: 56
    });


    //Social Media share...
    //$('.fa-facebook').on('click', function (e) {
    //    e.preventDefault();
    //    $('#eventDetails').modal('hide');
    //    $('#socialMedia').modal('show').find('.modal-body').load($(this).attr('href'));
    //});
});

function nextSlide(events) {
    let $this = events.id;
    if ($("#" + $this).parent().next().next().children('div').eq(0).hasClass("active") == true) {
        $("#" + $this).parent().children('a').eq(0).removeClass('btn-primary').addClass('disabled');
    }
    else if ($("#" + $this).parent().next().children('div').eq(1).hasClass("active") == true) {
        $("#" + $this).parent().children('a').eq(1).removeClass('btn-primary').addClass('disabled');
    }else {
        $("#" + $this).parent().children('a').eq(0).removeClass('disabled').addClass('btn-primary');
    }
}

function prevSlide(events) {
    let $this = events.id;
    if ($("#" + $this).parent().next().next().children('div').eq(0).hasClass("active") == true) {
        $("#" + $this).parent().children('a').eq(1).removeClass('btn-primary').addClass('disabled');
    }
    else if ($("#" + $this).parent().next().children('div').eq(1).hasClass("active") == true) {
        $("#" + $this).parent().children('a').eq(0).removeClass('btn-primary').addClass('disabled');
    } else {
        $("#" + $this).parent().children('a').eq(1).removeClass('disabled').addClass('btn-primary');
    }
}

function applyEvent() {
    $('#eventDetails').modal('hide');
    setTimeout(function () { $('#applyEventPopUp').modal('show'); }, 400);
    
}


