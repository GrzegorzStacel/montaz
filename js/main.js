$(document).ready(function () {

    stick_menu();
    scroll_animate();
    change_active_links_in_navbar();
    pricing_button();
    hamburger_menu();
    paralax();
    top_arrow();

});

function top_arrow() {
    $('.arrow').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000, 'linear');
    });
}

$(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        668: {
            items: 2
        },
        1019: {
            items: 4
        }
    }
});



function stick_menu() {
    $(window).on('scroll', () => {
        let position = $('html, body').scrollTop();

        if (position > 100) {
            $('nav .stick_container').addClass('sticked').slideDown();
            $('.arrow').show(1000);
        } else {
            $('nav .stick_container').removeClass('sticked');
            $('.arrow').hide(500);
        }
    })
}

function hamburger_menu() {
    $('#home .hamburger').on('click', () => {
        $('#home').toggleClass('mobile');
    })

    $('#home .links').on('click', 'a', () => {
        $('#home').toggleClass('mobile');
    })
}


// Options to lightbox in portfolio
lightbox.option({
    'disableScrolling': true,
    'wrapAround': true,
})


// Animated number counter from zero to value
$('.pricing_counter_num').each(function () {
    var $this = $(this);
    jQuery({
        Counter: 0
    }).animate({
        Counter: $this.text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function () {
            $this.text(Math.ceil(this.Counter));
        }
    });
});


function pricing_button() {
    $('#pricing .pricing_tab_switcher').on('click', function () {
        $('.on').toggleClass('off');

        $('.pricing_price_amount').toggleClass('change_amount');
    })
}

function change_active_links_in_navbar() {
    var sections = $('.sections'),
        nav = $('nav .links'),
        nav_height = nav.outerHeight();


    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height - 55,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                
                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('#home .links a').on('click', function () {
        var $el = $(this),
        id = $el.attr('href');
            
            $('html, body').animate({
                scrollTop: $(id).offset().top - nav_height,
            }, 500);

        return false;
    });
}


function scroll_animate() {
    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1500, 'easeOutCirc');
        }
    });
};

function paralax() {
    $(document).on('scroll', function () {
        let bg_offset = $(document).scrollTop() * -0.2;

        $('#home').css({
            'background-position-y': bg_offset,
        })
    })
}





// --------------------
//      Animations 
// --------------------

var isReset = false;

// NAV

ScrollReveal().reveal('.headline', {
    duration: 1000,
    reset: isReset,
    origin: 'left',
    distance: "150%"
});

ScrollReveal().reveal('.button_left', {
    duration: 500,
    reset: isReset,
    origin: 'bottom',
    delay: 1000,
    distance: "150%"
});

ScrollReveal().reveal('.button_right', {
    duration: 500,
    reset: isReset,
    origin: 'bottom',
    delay: 1500,
    distance: "150%"
});


// ABOUT 1 / 2


ScrollReveal().reveal('.anim_about_1', {
    duration: 500,
    reset: isReset,
    delay: 800,
    origin: 'left',
    distance: "150%"
});

ScrollReveal().reveal('.anim_about_2', {
    duration: 500,
    reset: isReset,
    origin: 'left',
    delay: 300,
    distance: "150%"
});

ScrollReveal().reveal('.anim_about_3', {
    duration: 500,
    reset: isReset,
    origin: 'rigth',
    delay: 300,
    distance: "150%"
});

ScrollReveal().reveal('.anim_about_4', {
    duration: 500,
    reset: isReset,
    origin: 'rigth',
    delay: 800,
    distance: "150%"
});


// ABOUT 2 / 2

ScrollReveal().reveal('.about_two', {
    duration: 700,
    reset: isReset,
    scale: 0.4,
    delay: 600,
});



// SERVICES

ScrollReveal().reveal('.services_title', {
    duration: 300,
    reset: isReset,
    scale: 0.0,
    delay: 300,

    viewOffset: {
        bottom: 300
    }
});

ScrollReveal().reveal('.anim_services_3, .anim_services_6', {
    duration: 200,
    reset: isReset,
    origin: 'left',
    delay: 200,
    distance: "150%"
});

ScrollReveal().reveal('.anim_services_2, .anim_services_5', {
    duration: 200,
    reset: isReset,
    origin: 'left',
    delay: 300,
    distance: "150%"
});

ScrollReveal().reveal('.anim_services_1, .anim_services_4', {
    duration: 200,
    reset: isReset,
    origin: 'left',
    delay: 600,
    distance: "150%"
});


// CONTACT PROMOTION

ScrollReveal().reveal('.contact_promotion_content', {
    duration: 700,
    reset: isReset,
    scale: 0.4,
    delay: 400,
})

ScrollReveal().reveal('.anim_scale', {
    duration: 400,
    // reset: isReset,
    reset: true,
    scale: 0.4,
    delay: 300,
})